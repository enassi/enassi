import { AppModeInfo } from '@/types'
import { useAppStore } from '@/pinia/modules/app'

const showTitleBar = (): boolean => {
  const appStore = useAppStore()
  const appData = appStore.data

  if (appData.appMode === AppModeInfo.Desktop && !appData.isWebPage) {
    return true
  }
  return false
}

const insertStyleSheet = (style: string) => {
  const sheet = document.styleSheets[0]
  // If got error in console: "Cannot access rules at CSSStyleSheet.invokeGetter ..."
  // check the first style elemeent of HTML(Including link rel="stylesheet")
  // has any cross-domain issues.

  sheet.insertRule(style, sheet.cssRules.length)
}

export const initStyle = () => {
  const appStore = useAppStore()

  if (!showTitleBar()) {
    insertStyleSheet(`
      #desktop-title-bar { 
          display: none !important; 
      }`)
    insertStyleSheet(`
      .app-main { 
          height: 100vh !important; 
      }`)
  } else {
    insertStyleSheet(`
      body {
          padding-top: var(--enas-desktop-title-bar-height); 
      }`)
    insertStyleSheet(`
      .app-main { 
          height: calc(100vh - var(--enas-desktop-title-bar-height) - 2px) !important;
          //min-height: calc(100vh - var(--enas-desktop-title-bar-height) - 2px) !important; 
      }`)
  }
}

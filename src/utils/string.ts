import dateUtil from 'date-and-time'

export const classNames = (...values: (string | boolean | undefined)[]): string => {
  return values.map((value) => (typeof value === 'string' ? value : null)).join(' ')
}

export const fileToBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}

export const formatDateTime = (dt: Date, fmt: string): string => {
  const timeFormat = fmt
  return dateUtil.format(dt, timeFormat)
}

/**
 * format string with params object, a little like **Template Literals**
 *
 * usage:
 * ```js
 * const a = 123
 * const str = '>>> ${aa} <<<'
 * const aaa = formatStringWithParams(str, { aa: a })
 * console.log('aaa >> ', aaa)
 * ```
 */
export const formatStringWithParams = (str: string, paramObj: object): string => {
  const names = Object.keys(paramObj)
  const vals = Object.values(paramObj)
  // eslint-disable-next-line no-new-func
  return new Function(...names, `return \`${str}\`;`)(...vals)
}

/**
 * Convert byte array to string
 * @param {byte[]} arr
 * @returns {string}
 */
export const byteToString = (arr: number[]): string => {
  if (typeof arr === 'string') {
    return arr
  }
  let str = ''
  const _arr = arr
  for (let i = 0; i < _arr.length; i++) {
    const one = _arr[i].toString(2)
    const v = one.match(/^1+?(?=0)/)
    if (v && one.length === 8) {
      const bytesLength = v[0].length
      let store = _arr[i].toString(2).slice(7 - bytesLength)
      for (let st = 1; st < bytesLength; st++) {
        store += _arr[st + i].toString(2).slice(2)
      }
      str += String.fromCharCode(parseInt(store, 2))
      i += bytesLength - 1
    } else {
      str += String.fromCharCode(_arr[i])
    }
  }
  return str
}

/**
 * stringToByte: convert string to byte[]
 * @param {string} str
 * @returns {number[]}
 */
export const stringToByte = (str: string): number[] => {
  const bytes = []
  let c
  for (let i = 0; i < str.length; i++) {
    c = str.charCodeAt(i)
    if (c >= 0x010000 && c <= 0x10FFFF) {
      bytes.push(((c >> 18) & 0x07) | 0xF0)
      bytes.push(((c >> 12) & 0x3F) | 0x80)
      bytes.push(((c >> 6) & 0x3F) | 0x80)
      bytes.push((c & 0x3F) | 0x80)
    } else if (c >= 0x000800 && c <= 0x00FFFF) {
      bytes.push(((c >> 12) & 0x0F) | 0xE0)
      bytes.push(((c >> 6) & 0x3F) | 0x80)
      bytes.push((c & 0x3F) | 0x80)
    } else if (c >= 0x000080 && c <= 0x0007FF) {
      bytes.push(((c >> 6) & 0x1F) | 0xC0)
      bytes.push((c & 0x3F) | 0x80)
    } else {
      bytes.push(c & 0xFF)
    }
  }
  return bytes
}

export const stringToUint8Array = (str: string): Uint8Array => {
  return new TextEncoder().encode(str)
}

export const Uint8ArrayToString = (arr: Uint8Array): string => {
  return new TextDecoder('utf-8').decode(arr)
}

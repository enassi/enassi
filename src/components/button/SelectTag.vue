<template>
  <XPopover refId="selectTagBtnPop" placement="bottom-start" trigger="click" :propTitle="t('Icon')" :widthAuto="true">
    <template #reference>
      <el-button v-if="useIcon" :icon="CollectionTag" circle />
      <el-button v-else>{{ t('Tag') }}</el-button>
    </template>

    <template v-if="appStore.data.userData.tags.length > 0">
      <div v-for="(item, index) in appStore.data.userData.tags" v-bind:key="index">
        <div class="py-2" @click="onClick(item)">
          <span :class="`${tagExist(item.sign) ? 'highlight font-bold' : ''}`">
            {{ item.icon }}{{ item.title }}
          </span>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="empty py-12"> {{ t('&No content') }} </div>
    </template>
  </XPopover>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { CollectionTag } from '@element-plus/icons-vue'

import XPopover from '@/components/widget/XPopover.vue'
import { useAppStore } from '@/pinia/modules/app'
import { TagInfo } from '@/libs/user_data/types'

const props = defineProps({
  tagExist: {
    type: Function,
    required: true
  },
  useIcon: {
    type: Boolean
  }
})

// For better code hints. Refer: https://juejin.cn/post/7012814138145505287
interface emitType {
  (e: 'onClick', value: TagInfo): void
}

const emits = defineEmits<emitType>()
const { t } = useI18n()
const appStore = useAppStore()

const onClick = (detail: TagInfo) => {
  emits('onClick', detail)
}
</script>

<style lang="scss"></style>

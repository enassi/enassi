<template>
  <XPopover refId="listSortBtnPop" placement="top-start" trigger="click" :propTitle="t('Sort')">
    <template #reference>
      <el-button :icon="Sort" circle />
    </template>

    <div class="enas-list cur-ptr">
      <div class="group-title">
        {{ t('Sort') }}
      </div>
      <el-radio-group v-model="appStore.data.settings.appearance.listColSortBy">
        <el-radio label="title">{{ t('Sort by title') }}</el-radio>
        <el-radio label="mtimeUtc">{{ t('Sort by update time') }}</el-radio>
        <el-radio label="ctimeUtc">{{ t('Sort by create time') }}</el-radio>
      </el-radio-group>

      <div class="list-item">
        <div class="disp-flex">
          <div class="disp-flex flex-grow">{{ t('Sort order') }}</div>
          <div class="disp-flex flex-grow justify-content-right">
            <div class="px-1">
              <el-icon @click="appStore.data.settings.appearance.listColSortOrder = 'ASC'"
                :class="`${appStore.data.settings.appearance.listColSortOrder !== 'DESC' ? 'highlight font-bold' : ''}`">
                <SortDown />
              </el-icon>
            </div>
            <div class="px-1">
              <el-icon @click="appStore.data.settings.appearance.listColSortOrder = 'DESC'"
                :class="`${appStore.data.settings.appearance.listColSortOrder === 'DESC' ? 'highlight font-bold' : ''}`">
                <SortUp />
              </el-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  </XPopover>
</template>

<script lang="ts" setup>
import { Sort, SortUp, SortDown } from '@element-plus/icons-vue'
import { useI18n } from 'vue-i18n'

import XPopover from '@/components/widget/XPopover.vue'
import { useAppStore } from '@/pinia/modules/app'

const { t } = useI18n()
const appStore = useAppStore()
</script>

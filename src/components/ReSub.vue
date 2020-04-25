<template functional>
  <a-sub-menu :key="props.menuInfo.key">
    <span slot="title">
      <a-icon :type="props.menuInfo.icon" v-if="props.menuInfo.icon" /><span>{{
        props.menuInfo.title
      }}</span>
    </span>
    <template v-for="item in props.menuInfo.children">
      <a-menu-item v-if="!item.children" :key="item.key">
        <a :href="item.path" @click="goToChildRoute">
          <a-icon :type="item.icon" v-if="item.icon" />
          <span>{{ item.title }}</span>
        </a>
      </a-menu-item>
      <sub-menu v-else :key="item.key" :menu-info="item" />
    </template>
  </a-sub-menu>
</template>
<script>
import { navigateToUrl } from 'single-spa'
// 递归组件菜单
export default {
  props: ['menuInfo'],
  methods: {
    goToChildRoute(e) {
      // 官方指定跳转
      e.preventDefault()
      navigateToUrl(e)
    },
  },
}
</script>

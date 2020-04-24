<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo" />
      <a-menu theme="dark" mode="inline" v-if="list.length > 0">
        <template v-for="item in list">
          <a-menu-item v-if="!item.children" :key="item.key">
            <router-link :to="{ path: item.path }">
              <a-icon :type="item.icon"></a-icon>
              {{ item.title }}
            </router-link>
          </a-menu-item>
          <a-sub-menu v-else :key="item.key">
            <span slot="title"
              ><a-icon :type="item.icon" v-if="item.icon"></a-icon
              ><span>{{ item.title }}</span></span
            >
            <template v-for="(subMenuItem, SubMenuKey) in item.children">
              <template v-if="!subMenuItem.children">
                <a-menu-item :key="SubMenuKey">{{
                  subMenuItem.title
                }}</a-menu-item>
              </template>
              <template v-else>
                <ReSub :menuInfo="subMenuItem" :key="SubMenuKey"></ReSub>
              </template>
            </template>
          </a-sub-menu>
        </template>
      </a-menu>
      <div class="left-menu" v-else>
        暂无菜单！
      </div>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <div class="content">
          <!--这是右侧内容栏-->
          <div id="single-vue" class="single-spa-vue">
            <div id="vue"></div>
          </div>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import ReSub from '@/components/ReSub.vue'
export default {
  components: {
    ReSub,
  },
  data() {
    return {
      collapsed: false,
      list: [
        {
          key: '1',
          title: 'Option 1',
          icon: 'home',
          path: '#/',
        },
        {
          key: '2',
          title: 'Navigation 2',
          icon: 'delete',
          path: '#/about',
          children: [
            {
              key: '2.1',
              title: 'Navigation 3',
              icon: 'form',
              path: '#/home',
              children: [
                {
                  key: '2.1.1',
                  title: 'Option 2.1.1',
                  icon: 'redo',
                  path: '#/',
                },
                {
                  key: '2.1.2',
                  title: 'Option 2.1.2',
                  icon: 'redo',
                  path: '#/about',
                },
              ],
            },
          ],
        },
      ],
    }
  },
}
</script>
<style>
#components-layout-demo-custom-trigger {
  min-height: 100vh;
  min-width: 100vw;
  overflow: hidden;
  height: 100%;
  width: 100%;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.left-menu {
  color: #fff;
  text-align: center;
  font-size: 18px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

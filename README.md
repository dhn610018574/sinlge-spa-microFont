# 基于 single-spa single-spa-vue 和 vue-cli 的微前端基础

## 项目技术栈： vue + vuex + vue-router + axios + webpack

## 完成父项目递归菜单树

Step 1:
在 src/components 文件夹下创建 ReSub 递归菜单树组件
在 App.vue 文件中引入
模拟菜单 list 数据
完成调试

## 安装依赖：

```
npm install | cnpm install | yarn install
```

### 启动本地服务：

## 启动父项目：http://localhost:8080/

```
cd single-spa-vue && yarn install && npm run serve
```

## 启动子项目：http://localhost:3000/

```
cd app-vue && yarn install && npm run serve
```

### 打包项目：

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

<template>
  <div class="app">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>

    <tab-bar>
      <tab-bar-item path="/home">
        <template #item-icon >
          <div>
            <img src="@/assets/img/2.png">
          </div>
        </template>
        <template #item-icon-active>
          <div>
            <img src="@/assets/img/3.png">
          </div>
        </template>
        <template #item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/category">
        <template #item-icon>
          <div>
            <img src="@/assets/img/2.png">
          </div>
        </template>
        <template #item-icon-active>
          <div>
            <img src="@/assets/img/3.png">
          </div>
        </template>
        <template #item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/cart">
        <template #item-icon>
          <div>
            <img src="@/assets/img/2.png">
          </div>
        </template>
        <template #item-icon-active>
          <div>
            <img src="@/assets/img/3.png">
          </div>
        </template>
        <template #item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/profile">
        <div slot="item-icon">
          <img src="@/assets/img/2.png">
        </div>
        <div slot="item-icon-active">
          <img src="@/assets/img/3.png">
        </div>
        <div slot="item-text">我的</div>

      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
// @ is an alias to /src
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";

export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

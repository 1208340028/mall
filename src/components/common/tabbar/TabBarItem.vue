<template>
  <div class="tab-bar-item" @click="click_router" >
    <div v-if="!active">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :class="{isactive: !active}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String
  },
  data() {
    return {
      active: false
    }
  },
  methods: {
    click_router() {
      // 解决重复点击链接错误
      this.$router.push("/location").catch(err => {console.log(err)})

      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
  .tab-bar-item {
    flex: 1px;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .isactive {
    color: red;
  }
</style>
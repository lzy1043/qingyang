<template>
  <div class="sub-nav">
    <nav class="sub-nav-item">
      <router-link class="router-link" to="/index">推荐</router-link>
      <router-link class="router-link" to="/frontend">Web开发</router-link>
      <router-link class="router-link" to="native_dev">原生开发</router-link>
      <router-link class="router-link" to="/start_up">创业投资</router-link>
      <router-link class="router-link" to="/ux">交互设计</router-link>
      <router-link class="router-link" to="/ui">视觉设计</router-link>
      <router-link class="router-link" to="/tech_fun">科技酷玩</router-link>
      <router-link class="router-link" to="/app_tool">软件猎奇</router-link>
      <router-link class="router-link" to="/overseas">海外频道</router-link>
    </nav>
  </div>
</template>
<style lang="scss" scoped>
  .sub-nav{
    background: #fff;
    height: 54px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.1);
    .sub-nav-item{
      display: flex;
      max-width: 1000px;
      margin: 0 auto;
      font-size: 14px;
      flex:1;
      .router-link{
        display:block;
        flex:1;
        -ms-flex:1;
        text-align: center;
        height: 54px;
        line-height: 54px;
        margin-right: 0;
        color: rgba(96,96,96,0.8);
      }
      .router-link-active{
        background-color: #f3f3f3;
        font-weight: 400;
      }
    }
  }
</style>
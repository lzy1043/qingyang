<template>
  <div class="side-info">
    <div class="aside-box">
      <h4 class="aside-title">立即加入</h4>
      <p class="aside-text">同步APP的点赞、评论和个性化设置</p>
      <div class="login-btn btn-green">微信登录</div>
      <div class="login-btn btn-red">微博登录</div>
    </div>
    <div class="aside-box">
      <h4 class="aside-title">下载轻氧APP</h4>
      <div class="aside-qrcode text-align">
        <img src="https://app.aotu.io/img/ios-qr.png" width="150" alt="app">
      </div>
      <p class="aside-text text-align">IOS/Android客户端</p>
    </div>
    <div class="aside-box">
      <h4 class="aside-title">关注我们</h4>
      <div class="aside-qrcode text-align">
        <img src="https://aotu.io/img/qrcode.jpg" width="150" alt="app">
      </div>
      <p class="aside-text text-align">微信公众号</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .side-info{
    width: 230px;
    padding-top: 16px;
    .aside-box{
      padding: 20px;
      margin-bottom: 20px;
      background-color: #fff;
      box-shadow: 1px 2px 3px #eee;
    }
    .aside-title{
      padding: 0;
      margin: 0;
      font-weight: 300;
      font-size: 18px;
      color: #393b36;
      padding-bottom: 14px;
    }
    .aside-text{
      padding: 0;
      margin: 0;
      font-size: 13px;
      padding-bottom: 10px;
      color: rgba(50,50,50,0.8);
      line-height:1.5;
    }
    .login-btn{
      display: block;
      width: 100%;
      height: 40px;
      line-height: 40px;
      margin-bottom: 15px;
      border-radius: 3px;
      font-size:14px;
      padding:0;
      text-align: center;
      color: #fff;
      cursor: pointer;
    }
    .btn-green{
      background-color: #7ed321;
    }
    .btn-red{
      background-color: #d0021b;
    }
    .text-align{
      text-align: center;
    }
  }
</style>

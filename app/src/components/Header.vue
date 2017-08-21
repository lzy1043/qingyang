<template>
  <header class="header">
      <section class="inner">
        <a href="/" class="link">
          <img src="../assets/logo.svg" class="logo" alt="logo">
        </a>
        <a href="/" class="link active">资讯</a>
        <a href="https://aotu.io/notes/index.html" class="link">博客</a>
        <a href="https://news.aotu.io/about" class="link">关于</a>
        <div class="side-menu">
          <a href="" class="link">下载APP</a>
          <a href="" class="link">登录</a>
        </div>
      </section>
    </header>
</template>
<style lang="scss" scoped>
  .header {
    background: #6190e8;
    height: 60px;
    font-size: 14x;
    .inner{
      max-width: 1000px;
      box-size: border-box;
      margin: 0 auto;
      .link{
        display: block;
        float: left;
        padding: 0 20px;
        height: 57px;
        line-height: 57px;
        color: #f5f5f5;
        border-top:2px solid transparent;
        -moz-transition: all 1s;
        -webkit-transition: all 1s;
        -o-transition: all 1s;
        transition: all 1s;
        font-size:14px;
        .logo{
          margin: 14px 10px 0 0;
        }
        &:hover{
          border-color: #fff;
          color: #fff;
        }
      }
      .active{
        border-color: #fff;
        color: #fff;
      }
    }
    .side-menu{
      float: right;
    }
  }
</style>

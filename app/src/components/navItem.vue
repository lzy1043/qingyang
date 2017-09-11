<template>
  <div class="nav-item">
    <qy-header></qy-header>
    <qy-nav></qy-nav>
    <div class="view">
      <div class="news-wrap">
        <div class="new-index">
          <ul class="news-list news-part">
            <li v-for="(item, index) in newList" :key="index" class="list-item">
              <div class="item-info">
                <div class="sort">
                  <div class="avatar-info"><a><img class="avatar" :src="item.origin.avatar.url + '?imageView2/5/w/30/h/30/format/jpg/interlace/1'" :alt="item.origin.avatar.name"><span class="nickname">{{item.origin.name}}</span></a>
                  </div>
                </div>
              </div>
              <div class="item-info">
                <div class="item-info-text">
                  <router-link class="sub-title" :to="'/a/' + item.objectId">{{item.title}}</router-link>
                  <div class="descp">{{item.excerpt}}</div>
                  <div class="status clearfix">
                     <div class="meta-tag clearfix">
                      <span class="label">
                        <i class="fa fa-eye"></i>
                        {{item.readCount}}
                      </span>
                      <span class="label">
                        <i class="fa fa-heart"></i>
                        {{item.likeCount ? item.likeCount : 0}}
                      </span>
                    </div>
                    <div class="sort-tag clearfix">
                      <span class="label label-time">
                       {{Math.floor((new Date().getTime() - new Date(item.publishedDate.iso).getTime())/(24 * 60 *60*1000))}}天前
                      </span>
                      <span class="label label-tag" v-for="(iTag, key) in item.tags" :key="key">{{iTag}}</span>
                    </div>
                  </div>
                </div>
                <div class="img-cover">
                  <router-link :to="'/a/' + item.objectId">
                    <img :src="item.image.url + '?imageView2/2/w/200/h/160/format/jpg/interlace/1'">
                  </router-link>
                 </div>
              </div>
            </li>
          </ul>
        </div>
        <aside-box></aside-box>
      </div>
    </div>
  </div>
</template>
<script>
  import Header from '@/components/Header'
  import Nav from '@/components/Nav'
  import Aside from '@/components/side'
  export default {
    data () {
      return {
        newList: [],
        page: 1,
        channelKey: ''
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll)
      this.channelKey = this.$route.name.toUpperCase()
      this.fetchInitData(this.page, this.channelKey)
    },
    methods: {
      fetchInitData (page, key) {
        this.axios.get(`/api/index?page=${page}&key=${key}`).then((res) => {
          console.log(res)
          if (res.status === 200) {
            res.data.forEach((item) => {
              if (item.tags.length > 3) {
                item.tags = item.tags.splice(0, 3)
              }
            })
            this.newList = this.newList.concat(res.data)
          }
        })
      },
      handleScroll () {
        const scrollTop = document.documentElement.scrollTop
        const bodyHeight = document.documentElement.scrollHeight
        const pageHeight = window.innerHeight
        if (Math.ceil(scrollTop) === bodyHeight - pageHeight) {
          this.page++
          this.fetchInitData(this.page, this.channelKey)
        }
      }
    },
    components: {
      'qy-header': Header,
      'qy-nav': Nav,
      'aside-box': Aside
    }
  }
</script>

<style lang="scss" scoped>
  li{
    list-style: none;
  }
  a{
    cursor: pointer;
  }
  .view{
    display: flex;
    max-width: 1000px;
    margin: 0 auto;
    flex:1;
    .news-wrap{
      display:flex;
      margin: 30px auto;
      max-width: 1000px;
      width: 100%;
      justify-content: space-between;
    }
  }
  .news-list{
    width: 750px;
    box-shadow: 1px 2px 3px #eee;
    background-color: #fff;
    padding: 0;
    a:hover{
      color: rgba(0,166,254,0.6)!important;
    }
    .list-item{
      padding:20px 0 20px 30px;
      border-bottom: 1px solid #eee;
      &:last-child{
        border-color: transparent; 
      }
      .item-info{
        display:flex;
        flex:1;
        align-items:center;
        color: rgba(50,50,50,.8);
        .sub-title{
          display:inline-block;
          max-width: 489px;
          margin:20px 0 10px;
          color: #000;
          font-weight:400;
          font-size: 16px;
          text-overflow: ellipsis;
          overflow:hidden;
          white-space: nowrap;
        }
        .descp{
          font-size:14px;
          line-height: 1.5;
        }
        .status{
          padding: 16px 0px 0px;
          .meta-tag{
            float: left;
          }
          .sort-tag{
            float: right;
            .label-tag{
              background-color:rgb(238, 238, 238);
              border-radius:3px;
              padding: 8px 10px;
              margin: 0px 0px 0px 15px;
              color: rgba(50,50,50,0.8);
            }
          }
          .label{
            padding:8px 0;
            display:inline-block;
            vertical-align:middle;
            font-size:12px;
            color: #666;
            float: left;
            margin-right: 10px;
            line-height: 16px;
          }
          .label-time{
            margin-right: 0;
            height: 21px;
            max-width: 50%;
            overflow:hidden;
            -ms-text-overflow: ellipsis;
            text-overflow: ellipsis;
          }
        }
      }
      .img-cover{
        width: 200px;
        min-width: 200px;
        height: 160px;
        overflow:hidden;
        display:flex;
        align-items: center;
        justify-content: center;
        background: none repeat scroll 0 0 rgba(87,120,137,0.1);
        box-shadow: 0 0 6px #bdccd4;
        border:3px solid #fdfdfd;
      }
      .item-info-text{
        max-width:490px;
        flex:1;
        padding-right: 20px;
      }
    }
    .avatar-info{
      .avatar{
        display:inline-block;
        margin-right: 10px;
        vertical-align: middle;
        border-radius: 50%;
        border:1px solid #ccc;
      }
      .nickname{
        display:inline-block;
        vertical-align:middle;
        font-size: 14px;
      }
    }
  }
</style>

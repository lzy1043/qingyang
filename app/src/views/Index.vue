<template>
  <div class="index">
    <qy-header></qy-header>
    <qy-nav></qy-nav>
    <div class="view">
      <div class="news-wrap">
        <div class="news-index">
          <div class="news-editor news-part">
            <h3 class="title">
              <i class="fa fa-flash"></i>
              编辑推荐
            </h3>
            <div class="content">
              <svg width="44px" height="44px" viewBox="0 0 44 44" class="spinner">
                <circle fill="none" stroke-width="4" stroke-linecap="round" cx="22" cy="22" r="20" class="path"></circle>
              </svg>
              <ul class="list">
                <li class="list-item" v-for="(item,index) in hotnewsGroup" :key="index">
                  <div class="main-title">{{item.title}}</div>
                  <div class="sub-content">
                    <div class="cover-img">
                      <img :src="item.coverUrl + '?imageView2/5/w/158/h/112/format/jpg/interlace/1'" height="112" width="158">
                    </div>
                    <ul class="sub-title-list">
                      <li class="sub-list-item" v-for="(subItem,subIndex) in item.newsList" :key="subIndex">
                        <router-link :to="'/a/' + subItem.objectId">{{subItem.title}}</router-link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="news-hot news-part">
            <h3 class="title">
              <i class="fa fa-fire"></i>
              热门资讯
            </h3>
            <div class="content">
              <svg width="44px" height="44px" viewBox="0 0 44 44" class="spinner">
                <circle fill="none" stroke-width="4" stroke-linecap="round" cx="22" cy="22" r="20" class="path"></circle>
              </svg>
              <ul class="list clearfix">
                 <li class="list-item" v-for= "(item,index) in hotnews">
                   <div class="item-info">
                     <h4 class="sub-title">
                       <router-link :to="'/a/' + item.objectId">{{item.title}}</router-link>
                     </h4>
                     <div class="status clearfix">
                       <span class="label"><a :href="'https://news.aotu.io/origin/' + item.originKey">{{item.origin.name}}</a></span>
                       <span class="label">
                         <i class="fa fa-eye"></i>
                         {{item.readCount}}
                       </span>
                       <span class="label">
                         <i class="fa fa-heart"></i>
                         {{item.likeCount ? item.likeCount : 0}}
                       </span>
                       <span class="label label-time">
                         {{Math.floor((new Date().getTime() - new Date(item.publishedDate.iso).getTime())/(24 * 60 *60*1000))}}天前
                       </span>
                     </div>
                   </div>
                   <div class="img-cover">
                     <router-link to="/">
                       <img :src="item.image.url + '?imageView2/5/h/68/format/jpg/interlace/1'">
                     </router-link>
                   </div>
                 </li>
              </ul>
            </div>
          </div>
          <div class="news-part news-today">
            <h3 class="title">
              <i class="fa fa-paw"></i>
              今日资讯
            </h3>
            <div class="content">
              <ul class="list clearfix">
                <li class="list-item" v-for= "(item,index) in initData">
                  <div class="item-info">
                    <div class="sort">
                      <div class="avatar-info"><a><img class="avatar" :src="item.origin.avatar.url + '?imageView2/5/w/30/h/30/format/jpg/interlace/1'" :alt="item.origin.avatar.name"><span class="nickname">{{item.origin.name}}</span></a></div>
                    </div>
                  </div>
                   <div class="item-info">
                     <div class="item-info-text">
                       <router-link class="sub-title" :to="'/a/' + item.objectId">{{item.title}}</router-link>
                       <div class="descp">{{item.excerpt}}</div>
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
          </div>
        </div>
        <aside-box></aside-box>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Nav from '@/components/Nav'
  import side from '@/components/side'
  export default {
    name: 'Index',
    data () {
      return {
        hotnews: [],
        hotnewsGroup: [],
        initData: [],
        page: 1
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll)
      this.axios.get('/api/hotnews').then((res) => {
        if (res.status === 200) {
          this.hotnews = res.data
        }
      })

      this.axios.get('/api/hotnewsgroup').then((res) => {
        if (res.status === 200) {
          this.hotnewsGroup = res.data.blocks
        }
      })

      this.fetchInitData(1, 'TODAY')
    },
    components: {
      'qy-header': Header,
      'qy-nav': Nav,
      'aside-box': side
    },
    methods: {
      fetchInitData (page, key) {
        this.axios.get(`/api/index?page=${page}&key=${key}`).then((res) => {
          if (res && res.status === 200) {
            this.initData = this.initData.concat(res.data)
          }
        })
      },
      handleScroll () {
        const scrollTop = document.documentElement.scrollTop
        const bodyHeight = document.documentElement.scrollHeight
        const pageHeight = window.innerHeight
        if (Math.ceil(scrollTop) === bodyHeight - pageHeight) {
          this.page++
          this.fetchInitData(this.page, 'TODAY')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
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
    }
    .news-index{
      width: 750px;
      margin: 15px 20px 0 0;
      box-shadow: 1px 2px 3px #eee;
      background-color: #fff;
      a:hover{
        color: rgba(0,166,254,0.6)!important;
      }
    }
    .news-part{
      width: 750px;
      margin-bottom: 20px;
      background-color: #fff;
      padding: 20px 20px 0;
      border:1px solid #eee;
      .title{
        margin:0;
        font-size: 20px;
        font-weight: 400;
        padding-bottom: 10px;
        border-bottom: 1px solid #eee;
      }
      .content{
        position: relative;
        .list{
          list-style: none;
          padding:0;
          margin:0;
          .list-item{
            padding-bottom:20px;
            border-bottom: 1px dashed #dfdfdf;
            &:last-child{
              border-color: transparent; 
            }
          }
          .main-title{
            font-weight: 400;
            font-size: 18px;
            margin: 1em 0;
          }
          .sub-content{
            display:flex;
            .cover-img{
              width: 200px;
            }
          }
        }
        .sub-title-list{
          list-style:none;
          padding:0;
          margin:0;
          .sub-list-item{
            max-width: 505px;
            padding: 10px 0;
            overflow: hidden;
            -ms-text-overflow: ellipsis;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #999;
            font-size: 16px;
            font-weight: 300;
            &:before{
              content:'\2022';
              color: #ee021b;
              font-size: 14px;
              margin-right: 5px;
            }
            a{
              color: #999;
            }
          }
        }
      }
      .spinner{
       position:absolute; 
      }
    }
    .news-hot{
      a{
        color: #333;
      }
      .content{
        margin-top: -1px;
        overflow:hidden;
      }
      .list{
        overflow: hidden;
        transform: translateY(1px);
      }
      .list-item{
        padding:20px 0;
        width: 340px;
        height: 112px; 
        float: left;
        display:flex;
        border-bottom: 1px solid #efefef!important;
        &:nth-child(2n){
          margin-left: 28px;
        }
        .item-info{
          flex:1;
          .sub-title{
            margin:0;
            font-size:16px;
            font-weight:400;
            height: 50px;
            line-height: 24px;
            overflow:hidden;
            -ms-text-overflow: ellipsis;
            text-overflow: ellipsis;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            display: -webkit-box;
            padding-right: 8px;
          }
          .status{
            .label{
              font-size:12px;
              color: #666;
              float: left;
              margin-right: 10px;
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
          width: 74px;
          display:flex;
          align-items:center;
          jutyify-content:center;
          overflow:hidden;
          border:2px solid #fff;
          box-shadow:0 0 1px #ddd;
          margin:0 1px 0 10px;
          img{

          }
        }
      }
    }
    .news-today{
      .list-item{
        padding:20px 0;
        .item-info{
          display:flex;
          flex:1;
          color: rgba(50,50,50,.8);
          .sub-title{
            display:inline-block;
            max-width: 490px;
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
  }
</style>

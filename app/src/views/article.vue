<template>
  <div class="index">
    <qy-header></qy-header>
    <qy-nav></qy-nav>
    <div class="view view-post" v-html="articleContent"></div>
  </div>
</template>
<script>
  import Header from '@/components/Header'
  import Nav from '@/components/Nav'
  export default {
    data () {
      return {
        articleContent: '',
        articleId: ''
      }
    },
    created () {
      console.log(this.$route)
      this.articleId = this.$route.params.id
      this.fetchArticleContent()
    },
    methods: {
      fetchArticleContent () {
        this.axios.get(`/api/a/${this.articleId}`).then((res) => {
          this.articleContent = res.data.data
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    components: {
      'qy-header': Header,
      'qy-nav': Nav
    }
  }
</script>
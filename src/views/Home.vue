<template>
  <div>
    <div>
      <!-- 封面 -->
      <template v-for="item in cover">
        <img :src="item" alt="" :key="item" />
      </template>
      <!-- 简介 -->
      <template v-for="item in synopsis">
        <p :key="item">
          {{ item }}
        </p>
      </template>
      <!-- 简介 -->
      <template v-for="item in BookHerf">
        <a :href="item" :key="item"> 点击前往</a>
      </template>
    </div>
    <p></p>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      keyWord: '诛仙', // 关键字
      synopsis: [], // 简介,
      BookHerf: [], // 书籍连接
      cover: [] // 封面
    }
  },
  async mounted () {
    this.getBookInfo('盘龙')
  },
  methods: {
    // 根据关键字获取书本信息 获取了书本的 链接封面
    async getBookInfo (keyWord) {
      const data = await this.$axios.get(
        `https://www.qidian.com/search?kw=${keyWord}`
      )
      const $ = this.$cheerio.load(data.data)
      const tmpArr = $(
        '#result-list > .book-img-text > ul >li > .book-img-box > a'
      )
      const imageArr = $(
        '#result-list > .book-img-text > ul >li > .book-img-box > a > img'
      )
      const bookInfo = $(
        '#result-list > .book-img-text > ul >li > .book-mid-info'
      )

      bookInfo.each((index, item) => {
        item.children.forEach(item => {
          if (item.attribs) {
            const _this = this
            switch (item.attribs.class) {
              case 'intro':
                if (item.children[0].data) {
                  _this.synopsis.push(item.children[0].data)
                }
                break
              case 'author':
                // this.synopsis.push(item.children[0].data)
                break
              case 'update':
                // this.synopsis.push(item.children[0].data)
                break
            }
          }
        })
      })
      imageArr.map(i => {
        this.cover.push('https:' + imageArr[i].attribs.src)
      })

      tmpArr.map(i => {
        this.BookHerf.push('https:' + tmpArr[i].attribs.href)
      })
      console.log(this.cover) // 封面
      console.log(this.BookHerf) // 书本连接
      console.log(this.synopsis) // 简介
    }
  }
}
</script>
<style lang="scss" scoped></style>

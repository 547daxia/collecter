<template>
  <div>
    <template v-for="item in nav">
      {{ item.label }}
    </template>
  </div>
</template>

<script>

export default {
  name: '',
  data () {
    return {
      nav: [
        { href: '', label: '1' },
        { href: '', label: '2' },
        { href: '', label: '3' }
      ],
      keyWord: '诛仙'
    }
  },
  async mounted () {
    const data = await this.$axios.get(
      `https://www.qidian.com/search?kw=${this.keyWord}`
    )
    const $ = this.$cheerio.load(data.data)
    // const tmpArr = $(
    //   '#result-list > .book-img-text > ul >li > .book-img-box > a'
    // )
    // const imageArr = $(
    //   '#result-list > .book-img-text > ul >li > .book-img-box > a > img'
    // )
    const bookInfo = $(
      '#result-list > .book-img-text > ul >li > .book-mid-info'
    )
    bookInfo[0].children.forEach(item => {
      if (item.attribs) {
        if (item.attribs.class) {
          // console.log(item.attribs.class)
          item.text()
        }
      }
    })

    // console.log('https:' + imageArr[0].attribs.src) // 封面
    // console.log('https:' + tmpArr[0].attribs.href) // 链接
  }
}
</script>
<style lang="scss" scoped></style>

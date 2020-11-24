<template>
  <div>
    <template v-for="item in nav">
      {{ item.label }}
    </template>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: '',
  data () {
    return {
      nav: [
        { href: '', label: '1' },
        { href: '', label: '2' },
        { href: '', label: '3' }
      ]
    }
  },
  async mounted () {
    const data = await axios.get('https://www.baidu.com')
    console.log(data)
  }
}
</script>
<style lang="scss" scoped></style>

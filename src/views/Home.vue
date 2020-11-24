<template>
  <div>
    <template v-for="item in nav">
      {{ item.label }}
    </template>
  </div>
</template>

<script>
import test from '@/api/test.js'
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
  async created () {
    const data = await test()
    console.log(data)
  }
}
</script>
<style lang="scss" scoped></style>

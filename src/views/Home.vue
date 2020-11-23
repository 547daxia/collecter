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
        { href: '', label: '3' },
        { href: '', label: '4' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped></style>

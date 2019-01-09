<template>
  <el-input
    v-model="searchKeyword"
    placeholder="曲名で検索"
    clearable
    @change="value => $store.dispatch('searchSongsByTitle', value)"
  />
</template>

<script>
export default {
  data() {
    return {
      searchKeyword: ''
    }
  },
  mounted() {}
}
</script>

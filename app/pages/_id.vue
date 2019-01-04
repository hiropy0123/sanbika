<template>
  <section class="container">
    <el-card 
      v-for="song in songs" 
      :key="song.sys.id"
      class="box-card"
    >
      <h2>{{ song.fields.title }}</h2>
      <span class="root-key">Root Key：{{ song.fields.keyCode }}</span>
      <vue-markdown
        :source="song.fields.lyrics"
        class="lyrics"
      />
    </el-card>
  </section>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import Search from '~/components/Search'
import Select from '~/components/Select'
import { mapGetters } from 'vuex'

export default {
  components: {
    VueMarkdown,
    Search,
    Select
  },
  computed: {
    ...mapGetters(['songs'])
  }
}
</script>

<style lang="scss" scoped>
</style>

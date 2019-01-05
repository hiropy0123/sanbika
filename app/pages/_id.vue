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
import { DegreeName, DegMap } from '~/plugins/scale'

export default {
  components: {
    VueMarkdown,
    Search,
    Select
  },
  filters: {
    transposeKey(value, fromKey, toKey) {
      if (!value) return ''
      if (!this.selectedKey) {
        // キーが選択されていなければ、ルートキーで表示
        let scale = _.find(DegMap, item => _.includes(item.key, this.rootKey))
        for (let i = 0; i < 7; i++) {
          value = value.replace(DegreeName[i], scale.map[i], 'g')
        }
      } else {
        let scale = _.find(DegMap, item => _.includes(item.key, this.selectedKey))
        for (let i = 0; i < 7; i++) {
          value = value.replace(DegreeName[i], scale.map[i], 'g')
        }
      }
      value.toString().replace()
    }
  },
  data() {
    return {
      selectedKey: '',
      rootKey: ''
    }
  },
  computed: {
    ...mapGetters(['songs'])
  },
  methods: {
    replaceKey() {}
  }
}
</script>

<style lang="scss" scoped>
</style>

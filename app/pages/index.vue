<template>
  <section class="container">
    <div>
      <h2 class="subtitle">
        賛美歌 歌詞コード検索
      </h2>
      <el-button @click="visible = true">modal</el-button>
      <el-dialog 
        :visible.sync="visible" 
        title="Hello world"
      >
        <p>Try Element</p>
      </el-dialog>
      <Search/>
      <Select/>
      <el-card 
        v-for="song in songs" 
        :key="song.sys.id"
        class="box-card"
      >
        <nuxt-link :to="`/${song.fields.title}`">{{ song.fields.title }}</nuxt-link> 
      </el-card>
      <el-pagination
        :total="1000"
        background
        layout="prev, pager, next"
      />
      <el-button :plain="true" @click="open">Show message</el-button>
      <el-button type="primary" icon="el-icon-refresh" @click="$store.dispatch('fetchSongs')">Reset</el-button>

    </div>
    
  </section>
</template>

<script>
import _ from 'lodash'
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
  data() {
    return {
      visible: false
    }
  },
  computed: {
    ...mapGetters(['songs'])
  },
  mounted() {
    let scale = _.find(DegMap, item => _.includes(item.key, 'D♭'))
    console.log(scale.map)
  },
  methods: {
    open() {
      this.$message('This is a message.')
    },
    error() {
      this.$notify.error({
        title: 'Error',
        message: 'This is an error message',
        position: 'top-left'
      })
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>

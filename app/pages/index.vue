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
      <el-button type="primary" icon="el-icon-search">Search</el-button>
      <el-card class="box-card">
        <nuxt-link to="/">賛美タイトル</nuxt-link> 
      </el-card>
      <el-card class="box-card">
        <nuxt-link to="/">賛美タイトル</nuxt-link> 
      </el-card>
      <el-card class="box-card">
        <nuxt-link to="/">賛美タイトル</nuxt-link> 
      </el-card>
      <el-pagination
        :total="1000"
        background
        layout="prev, pager, next"
      />
      <el-button :plain="true" @click="open">Show message</el-button>

      <el-card 
        v-for="song in songs" 
        :key="song.sys.id"
        class="box-card"
      >
        <h2>{{ song.fields.title }}</h2>
        <vue-markdown
          :source="song.fields.lyrics"
          class="lyrics"
        />
      </el-card>
    </div>
    
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
  data() {
    return {
      visible: false
    }
  },
  computed: {
    ...mapGetters(['songs'])
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

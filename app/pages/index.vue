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
    </div>
    
  </section>
</template>

<script>
import Search from '~/components/Search'
import Select from '~/components/Select'

export default {
  components: {
    Search,
    Select
  },
  data() {
    return {
      visible: false
    }
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

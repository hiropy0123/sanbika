<template>
  <el-select
    v-model="value9"
    :remote-method="remoteMethod"
    :loading="loading"
    multiple
    filterable
    remote
    reserve-keyword
    placeholder="Please enter a keyword">
    <el-option
      v-for="item in options4"
      :key="item.value"
      :label="item.label"
      :value="item.value"/>
  </el-select>
</template>

<script>
export default {
  data() {
    return {
      options4: [],
      value9: [],
      list: [],
      loading: false,
      states: ['Alabama', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Wisconsin', 'Wyoming']
    }
  },
  mounted() {
    this.list = this.states.map(item => {
      return { value: item, label: item }
    })
  },
  methods: {
    remoteMethod(query) {
      if (query !== '') {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.options4 = this.list.filter(item => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
          })
        }, 200)
      } else {
        this.options4 = []
      }
    },

    searchByName(keyword) {}
  }
}
</script>

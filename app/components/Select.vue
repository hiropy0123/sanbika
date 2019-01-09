<template>
  <el-select 
    v-model="value" 
    placeholder="Select Chord"
    @change="value => $store.dispatch('searchSongsByChord', value)"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: 'Degree',
          label: '度数表記（ディグリーネーム）'
        },
        {
          value: 'A',
          label: 'A'
        },
        {
          value: 'B♭',
          label: 'B♭'
        },
        {
          value: 'B',
          label: 'B'
        },
        {
          value: 'C',
          label: 'C'
        },
        {
          value: 'D♭',
          label: 'D♭'
        },
        {
          value: 'D',
          label: 'D'
        },
        {
          value: 'E♭',
          label: 'E♭'
        },
        {
          value: 'E',
          label: 'E'
        },
        {
          value: 'F',
          label: 'F'
        },
        {
          value: 'F#',
          label: 'F#'
        },
        {
          value: 'G',
          label: 'G'
        },
        {
          value: 'A♭',
          label: 'A♭'
        },
        {
          value: 'Am',
          label: 'Am'
        },
        {
          value: 'B♭m',
          label: 'B♭m'
        },
        {
          value: 'Bm',
          label: 'Bm'
        },
        {
          value: 'Cm',
          label: 'Cm'
        },
        {
          value: 'D♭m',
          label: 'D♭m'
        },
        {
          value: 'Dm',
          label: 'Dm'
        },
        {
          value: 'E♭m',
          label: 'E♭m'
        },
        {
          value: 'Em',
          label: 'Em'
        },
        {
          value: 'Fm',
          label: 'Fm'
        },
        {
          value: 'F♯m',
          label: 'F♯m'
        },
        {
          value: 'Gm',
          label: 'Gm'
        },
        {
          value: 'A♭m',
          label: 'A♭m'
        }
      ],
      value: ''
    }
  }
}
</script>

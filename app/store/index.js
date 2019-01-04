import Vuex from 'vuex'
import { createClient } from '~/plugins/contentful.js'
import _ from 'lodash'

const client = createClient()

export default () =>
  new Vuex.Store({
    state: {
      songs: [],
      total: 0
    },

    getters: {
      songs: state => state.songs,
      total: state => state.total
    },

    mutations: {
      setSongs(state, payload) {
        state.songs = payload
      },
      setTotal(state, payload) {
        state.total = payload
      }
    },

    actions: {
      async fetchSongs({ commit }) {
        await client
          .getEntries({
            content_type: 'song',
            order: '-sys.createdAt'
          })
          .then(entries => {
            commit('setSongs', entries.items)
          })
      },

      async fetchTotal({ commit }) {
        await client
          .getEntries({
            content_type: 'song',
            order: '-sys.createdAt'
          })
          .then(entries => {
            commit('setTotal', entries.total)
          })
      }
    }
  })

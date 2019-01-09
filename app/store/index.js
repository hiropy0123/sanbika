import Vuex from 'vuex'
import { createClient } from '~/plugins/contentful.js'
import _ from 'lodash'

const client = createClient()

export default () =>
  new Vuex.Store({
    state: {
      songs: [],
      total: 0,
      selectedKey: String
    },

    getters: {
      songs: state => state.songs,
      total: state => state.total,
      selectedKey: state => state.selectedKey
    },

    mutations: {
      setSongs(state, payload) {
        state.songs = payload
      },
      setTotal(state, payload) {
        state.total = payload
      },
      setKey(state, payload) {
        state.selectedKey = payload
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

      async searchSongsByChord({ commit }, chord) {
        await client
          .getEntries({
            content_type: 'song',
            order: '-sys.createdAt',
            'fields.keyCode': chord
          })
          .then(entries => {
            commit('setSongs', entries.items)
          })
      },

      async searchSongsByTitle({ commit }, keyword) {
        await client
          .getEntries({
            content_type: 'song',
            order: '-sys.createdAt',
            'fields.title[match]': keyword
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

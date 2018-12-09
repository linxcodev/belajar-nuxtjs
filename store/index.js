import axios from '~/plugins/axios'

export const state = () => ({
  provs: []
})

export const mutations = {
  setPokemons(state, items) {
    state.provs = items
  }
}

export const actions = {
  async nuxtServerInit ( {commit }) {
    const { data } = await axios.get('province')
    commit('setPokemons', data.rajaongkir.results)
  }
}

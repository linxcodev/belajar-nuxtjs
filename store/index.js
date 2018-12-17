import axios from '~/plugins/axios'

export const state = () => ({
  datas: []
})

export const mutations = {
  setData(state, items) {
    state.datas = items
  }
}

export const actions = {
  async setItems ( {commit}, params) {
    const { data } = await axios.get(params)
    commit('setData', data.rajaongkir.results)
  }
}

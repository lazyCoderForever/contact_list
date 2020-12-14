import Vue from 'vue'
import Vuex from 'vuex'
// import { uuid } from 'vue-uuid'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: [
      {
        _id: '1',
        name: 'Руденко',
        lastName: 'Северал',
        phone: '338(529)134-92-25',
        Email: 'Hurew1978@deyrep.com',
      },
      {
        _id: '2',
        name: 'Остимчук ',
        lastName: 'Арнгольд',
        phone: '9(376)300-96-26',
        Email: 'Fainsirly1962@weleworm.com',
      },
      {
        _id: '3',
        name: 'Осипова ',
        lastName: 'Хармони',
        phone: '87(397)427-46-86',
        Email: 'Cogried63@rgyat.com',
      },
    ],
  },
  getters: {
    getContact: (state) => (contactId) => {
      let tt = {}
      let contact = state.contacts.find((contact) => {
        return contact._id === contactId
      })
      tt = { ...contact }
      delete tt._id
      return tt
    },
  },
  mutations: {},
  actions: {},
  modules: {},
})

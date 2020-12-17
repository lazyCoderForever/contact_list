import Vue from "vue";
import { uuid } from "vue-uuid";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contacts: [
      {
        _id: "1",
        name: "Руденко",
        surname: "Северал",
        phone: "338(529)134-92-25",
        email: "Hurew1978@deyrep.com",
      },
      {
        _id: "2",
        name: "Остимчук ",
        surname: "Арнгольд",
        phone: "9(376)300-96-26",
        email: "Fainsirly1962@weleworm.com",
      },
      {
        _id: "3",
        name: "Осипова ",
        surname: "Хармони",
        phone: "87(397)427-46-86",
        email: "Cogried63@rgyat.com",
      },
      {
        _id: "34",
        name: "Осипова ",
        surname: "Хармони",
        phone: "87(397)427-46-86",
        email: "Cogried63@rgyat.com",
      },
      {
        _id: "35",
        name: "Осипова ",
        surname: "Хармони",
        phone: "87(397)427-46-86",
        email: "Cogried63@rgyat.com",
      },
      {
        _id: "36",
        name: "Осипова ",
        surname: "Хармони",
        phone: "87(397)427-46-86",
        email: "Cogried63@rgyat.com",
      },
      {
        _id: "37",
        name: "Осипова ",
        surname: "Хармони",
        phone: "87(397)427-46-86",
        email: "Cogried63@rgyat.com",
      },
    ],
  },
  getters: {
    getContact: state => contactId => {
      let returnData = {};
      let contact = state.contacts.find(contact => {
        return contact._id === contactId;
      });
      returnData = { ...contact };
      delete returnData._id;
      return returnData;
    },
  },
  mutations: {
    SET_NEW_CONTACT_DATA(state, { contactId, changedContactData }) {
      const changedContactDataKeys = Object.keys(changedContactData);
      let contactFromState = state.contacts.find(contact => {
        return contact._id === contactId;
      });
      changedContactDataKeys.forEach(key => {
        Vue.set(contactFromState, key, changedContactData[key]);
      });
    },
    DEL_CONTACT(state, { contactId }) {
      const filtered = state.contacts.filter(contact => {
        return contact._id !== contactId;
      });
      state.contacts = filtered;
    },
    SET_FIELD_VALUE(state, { contactId, fieldName, fieldValue }) {
      let contactFromState = state.contacts.find(contact => {
        return contact._id === contactId;
      });
      Vue.set(contactFromState, fieldName, fieldValue);
    },
    DEL_FIELD(state, { contactId, fieldToDelete }) {
      let contactFromState = state.contacts.find(contact => {
        return contact._id === contactId;
      });
      Vue.delete(contactFromState, fieldToDelete);
    },
    ADD_FIELD(state, { contactId, fieldName, fieldValue }) {
      let contactFromState = state.contacts.find(contact => {
        return contact._id === contactId;
      });
      Vue.set(contactFromState, fieldName, fieldValue);
    },
    ADD_CONTACT(
      state,
      { name = "none", surname = "...", phone = "...", email = "..." }
    ) {
      let newContact = {
        _id: uuid.v1(),
        name,
        surname,
        phone,
        email,
      };
      state.contacts.push(newContact);
    },
  },
  actions: {},
});

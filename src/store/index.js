import Vue from "vue";
import { uuid } from "vue-uuid";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lastAction: {
      actionType: "",
      actionData: {},
    },
    contacts: [
      {
        _id: "1",
        name: "Руденко",
        surname: "Северал",
        phone: "338 (529) 134-92-25",
        email: "Hurew1978@deyrep.com",
      },
      {
        _id: "2",
        name: "Остимчук ",
        surname: "Арнгольд",
        phone: "9 (376) 300-96-26",
        email: "Fainsirly1962@weleworm.com",
      },
      {
        _id: "3",
        name: "Осипова ",
        surname: "Хармони",
        phone: "87 (397) 427-46-86",
        email: "Cogried63@rgyat.com",
      },
      {
        _id: "34",
        name: "Егоров ",
        surname: "Адалат",
        phone: "+7 (951) 212-36-34",
        email: "Cogried63@rgyat.com",
      },
      {
        _id: "35",
        name: "Ермилов ",
        surname: "Иеремий",
        phone: "+7 (972) 585-73-31",
        email: "Cogried63@rgyat.com",
      },
      {
        _id: "36",
        name: "Вещая ",
        surname: "Андозия",
        phone: "+7 (985) 829-05-39",
        email: "Cogried63@rgyat.com",
      },
      {
        _id: "37",
        name: "Верховская ",
        surname: "Чина",
        phone: "+7 (930) 275-38-88",
        email: "ChinaVerhovskaya366@rgyat.com",
      },
    ],
  },
  getters: {
    getLastAction: state => {
      return state.lastAction;
    },
    getContact: state => contactId => {
      let returnData = {};
      let contact = state.contacts.find(contact => {
        return contact._id === contactId;
      });
      returnData = { ...contact };
      delete returnData._id;
      return returnData;
    },
    getAllContacts: state => {
      return state.contacts;
    },
  },
  mutations: {
    STEP_BACK(state, { contactId, lastAction }) {
      const defaultState = {
        actionType: "",
        actionData: {},
      };
      const { actionType, actionData } = lastAction;
      let contactFromState = state.contacts.find(contact => {
        return contact._id === contactId;
      });
      //ACTION_EDIT,ACTION_DEL,ACTION_ADD
      switch (actionType) {
        case "ACTION_EDIT": {
          let actionDataKeys = Object.keys(actionData.prevData);
          actionDataKeys.forEach(key => {
            Vue.set(contactFromState, key, actionData.prevData[key]);
          });
          state.lastAction = { ...defaultState };
          break;
        }
        case "ACTION_DEL": {
          const { fieldToDelete, fieldValue } = actionData;
          Vue.set(contactFromState, fieldToDelete, fieldValue);
          state.lastAction = { ...defaultState };
          break;
        }
        case "ACTION_ADD": {
          const { fieldName } = actionData;
          Vue.delete(contactFromState, fieldName);
          state.lastAction = { ...defaultState };
          break;
        }
      }
    },
    SET_LAST_ACTION(state, { actionType, actionData }) {
      state.lastAction = { ...state.lastAction, ...{ actionType, actionData } };
    },
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

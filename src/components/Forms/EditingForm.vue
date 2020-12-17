<template>
  <div class="contactForm-wraper">
    <button v-if="!change" class="contactForm_add-field" v-on:click="openForm">
      Добавить поле
    </button>
    <form class="contactForm">
      <button
        type="button"
        class="change-contact-data"
        v-if="!change"
        v-on:click="allowChangeData"
      ></button>
      <div
        v-for="(field, name, index) in sortedContactData"
        :key="index"
        v-bind:class="{
          contactForm_static: !change,
          contactForm_active: change,
        }"
      >
        <label class="contactForm_inputlabel" :for="index">{{
          `${Object.keys(field)[0]}:`
        }}</label>
        <div v-if="!change" class="contactForm_info">
          {{ field[Object.keys(field)[0]] }}
        </div>
        <div v-if="change" class="contactForm_inputField-wraper">
          <input
            class="contactForm_inputField"
            type="text"
            :id="index"
            :value="field[Object.keys(field)[0]]"
            :data-name_field="Object.keys(field)[0]"
            v-on:input="changeFieldValue"
          />
          <span
            class="contactForm_deleteField minus"
            v-on:click="deleteField"
          ></span>
        </div>
      </div>
      <div class="contactForm_active_options" v-if="change">
        <button
          type="button"
          class="contactForm_active_options-btn"
          data-set="cancel"
          v-on:click="setNewContactData"
        >
          Cancel
        </button>
        <button
          type="button"
          class="contactForm_active_options-btn"
          data-set="save"
          v-on:click="setNewContactData"
        >
          Save
        </button>
      </div>
      <ConfirmPopUp :confirm="confirm" :withField="fieldToDelete" />
      <ConfirmPopUp
        :confirm="confirmСancellation"
        popUpText="Undo editing ?"
        additionalClass="change-contact-confirm"
      />
    </form>
  </div>
</template>

<script>
import { toggleForm } from "@/assets/js/toggleForm";
import ConfirmPopUp from "@/components/ConfirmPopUp.vue";
export default {
  components: { ConfirmPopUp },
  name: "EditingForm",
  props: {
    contactData: Object,
    contactId: String,
  },
  data: () => {
    return {
      changedContactData: {},
      userLastAction: {
        changeName: "",
        fieldName: "",
        fielValue: "",
      },
      fieldToDelete: "",
      change: false,
    };
  },
  computed: {
    sortedContactData: function() {
      let keys = Object.keys(this.contactData);
      keys.sort(function(a, b) {
        if (a.toLowerCase().indexOf("name") >= 0) {
          if (b.toLowerCase().indexOf("name") === 0) {
            return 1;
          } else {
            return -1;
          }
        }
        if (b.toLowerCase().indexOf("name") >= 0) {
          return 1;
        }
        return 0;
      });
      let sortedKeys = keys.map(el => {
        return { [el]: this.contactData[el] };
      });
      return sortedKeys;
    },
  },
  methods: {
    confirmСancellation(e) {
      const confirmForm = document.querySelector(".change-contact-confirm");
      const Form = toggleForm(confirmForm);
      if (e.target.dataset.conf_value === "yes") {
        Form.close();
        this.changedContactData = {};
        this.change = !this.change;
      } else {
        Form.close();
      }
    },
    setNewContactData(e) {
      const clickedButton = e.target;
      const clickedButtonDataSet = clickedButton.dataset.set;
      if (clickedButtonDataSet === "save") {
        this.$store.commit("SET_NEW_CONTACT_DATA", {
          contactId: this.contactId,
          changedContactData: this.changedContactData,
        });
        this.changedContactData = {};
        this.change = !this.change;
      } else {
        const confirmСancellationForm = document.querySelector(
          ".change-contact-confirm"
        );
        const Form = toggleForm(confirmСancellationForm);
        Form.open("contain");
      }
    },
    changeFieldValue(e) {
      const activeField = e.target;
      const activeFieldName = activeField.dataset.name_field;
      const activeFieldValue = activeField.value;
      this.changedContactData[activeFieldName] = activeFieldValue;
    },
    allowChangeData() {
      this.change = !this.change;
    },
    openForm() {
      const addFieldForm = document.querySelector(".addFieldForm");
      const windowWidth = Number(window.innerWidth) / 2 - 161;
      addFieldForm.style.left = `${windowWidth}px`;
    },
    deleteField(e) {
      const confirmForm = document.querySelector(".confirm_popUp_wraper");
      const Form = toggleForm(confirmForm);
      let nameField = e.target.previousSibling.dataset.name_field;

      this.fieldToDelete = nameField;
      Form.open("contain");
    },
    confirm(e) {
      const confirmForm = document.querySelector(".confirm_popUp_wraper");
      const Form = toggleForm(confirmForm);
      if (e.target.dataset.conf_value === "yes") {
        this.$store.commit("DEL_FIELD", {
          contactId: this.contactId,
          fieldToDelete: this.fieldToDelete,
        });
        Form.close();
      } else {
        Form.close();
      }
    },
  },
};
</script>

<style scoped lang="scss">
.contactForm-wraper {
  margin: 30px auto;
  .change-contact-confirm {
    display: flex;
    align-items: center;
  }
  .change-contact-data {
    width: 30px;
    height: 30px;
    border: none;
    background-image: url("../../assets/img/pen.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-color: transparent;
    cursor: pointer;
  }
  .contactForm {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    max-width: 50vw;
    padding: 20px;
    margin: 20px auto;
    box-shadow: 0px 0px 20px 0px rgba(133, 133, 133, 1);
    border-radius: 20px;
    &_active {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin: 15px auto;
      &_options {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 15px auto;
        &-btn {
          margin: 0 50px;
          padding: 10px 50px;
          background: #1d7373;
          border: 1px solid transparent;
          border-radius: 25px;
          color: white;
          font-size: 18px;
          cursor: pointer;
          transition: 0.3s;
          &:hover {
            background: transparent;
            border: 1px solid #1d7373;
            color: black;
          }
        }
      }
    }
    &_static {
      width: 400px;
      display: grid;
      grid-template-columns: 100px max-content;
      align-items: center;
      margin: 15px auto;
    }
    &_info {
      text-align: left;
    }
    &_add-field {
      padding: 15px 20px;
      border-radius: 15px;
      background-color: transparent;
      border: 1px solid #1d7373;
      color: black;
      font-size: 20px;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        color: white;
        background-color: #33cccc;
        border: 1px solid transparent;
      }
    }
    &_inputlabel {
      margin: 10px 0;
      font-size: 18px;
      font-weight: 500;
      text-align: left;
      color: black;
    }
    &_inputField {
      max-width: 100%;
      margin: 0 auto 0 0;
      padding: 15px 25px;
      border: 1px solid #33cccc;
      box-sizing: border-box;
      border-radius: 15px;
      transition: 0.3s;
      &:hover {
        box-shadow: 12px 9px 10px 0px rgba(133, 133, 133, 1);
      }
      &-wraper {
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
    }
    &_deleteField {
      position: relative;
      display: block;
      width: 20px;
      height: 20px;
      margin: 0 15px;
      border: 1px solid #33cccc;
      border-radius: 30px;
      background-color: transparent;
      cursor: pointer;
      &::after {
        content: "";
        position: absolute;
        left: 50%;
        top: 45%;
        width: 50%;
        height: 2px;
        margin-left: -4px;
        background-color: #33cccc;
      }
    }
  }
}
</style>

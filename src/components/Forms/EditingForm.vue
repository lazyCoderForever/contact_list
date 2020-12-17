<template>
  <div class="contactForm-wraper">
    <form class="contactForm">
      <div v-if="change !== 'edit'" class="contactForm_options">
        <button
          type="button"
          class="contactForm_options_view"
          data-form_option="static"
          v-on:click="allowChangeData"
        ></button>
        <button
          type="button"
          class=" contactForm_options_add-field"
          v-if="change === 'static'"
          v-on:click="openAddFieldForm"
        ></button>
        <button
          type="button"
          class=" contactForm_options_edit-field"
          data-form_option="edit"
          v-if="change !== 'edit'"
          v-on:click="allowChangeData"
        ></button>
        <button
          type="button"
          class=" contactForm_options_del-field"
          data-form_option="del"
          v-if="change !== 'del'"
          v-on:click="allowChangeData"
        ></button>
      </div>

      <div
        v-for="(field, name, index) in sortedContactData"
        :key="index"
        v-bind:class="{
          contactForm_static: change === 'static',
          contactForm_edit: change === 'edit',
          contactForm_del: change === 'del',
        }"
      >
        <label class="contactForm_inputlabel" :for="index">{{
          `${Object.keys(field)[0]}:`
        }}</label>
        <div v-if="change === 'static'" class="contactForm_info">
          {{ field[Object.keys(field)[0]] }}
        </div>
        <div v-if="change === 'del'" class="contactForm_del-info">
          {{ field[Object.keys(field)[0]] }}
          <span
            class="contactForm_deleteField minus"
            :data-name_field="Object.keys(field)[0]"
            v-on:click="deleteField"
          ></span>
        </div>
        <div v-if="change === 'edit'" class="contactForm_inputField-wraper">
          <input
            class="contactForm_inputField"
            type="text"
            :id="index"
            :value="field[Object.keys(field)[0]]"
            :data-name_field="Object.keys(field)[0]"
            v-on:input="changeFieldValue"
          />
        </div>
      </div>
      <div class="contactForm_edit_options" v-if="change === 'edit'">
        <button
          type="button"
          class="contactForm_edit_options-btn"
          data-set="cancel"
          v-on:click="setNewContactData"
        >
          Cancel
        </button>
        <button
          type="button"
          class="contactForm_edit_options-btn"
          data-set="save"
          v-on:click="setNewContactData"
        >
          Save
        </button>
      </div>
      <AddFieldForm :contactId="contactId" :contactData="contactData" />
      <ConfirmPopUp
        :confirm="confirm"
        :withField="fieldToDelete"
        additionalClass="contact-confirm-del"
      />
      <ConfirmPopUp
        :confirm="confirmСancellation"
        popUpText="Undo editing ?"
        additionalClass="contact-confirm-change"
      />
    </form>
  </div>
</template>

<script>
import { toggleForm } from "@/assets/js/toggleForm";
import ConfirmPopUp from "@/components/ConfirmPopUp.vue";
import AddFieldForm from "@/components/Forms/AddFieldForm.vue";
export default {
  components: { ConfirmPopUp, AddFieldForm },
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
      change: "static",
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
      const confirmForm = document.querySelector(".contact-confirm-change");
      const Form = toggleForm(confirmForm);
      if (e.target.dataset.conf_value === "yes") {
        Form.close();
        this.changedContactData = {};
        this.change = "static";
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
        this.change = "static";
      } else {
        const confirmСancellationForm = document.querySelector(
          ".contact-confirm-change"
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
    allowChangeData(e) {
      const optionType = e.target.dataset.form_option;

      //      this.$store.commit("SAVE_PREV_DATA", {
      //   contactId: this.contactId,
      //   prevData: this.contactData,
      // });
      this.change = optionType;
    },
    openAddFieldForm() {
      const addFieldForm = document.querySelector(".addFieldForm");
      addFieldForm.style.left = `-20%`;
    },
    deleteField(e) {
      const confirmForm = document.querySelector(".contact-confirm-del");
      const Form = toggleForm(confirmForm);
      let nameField = e.target.dataset.name_field;

      this.fieldToDelete = nameField;
      Form.open("contain");
    },
    confirm(e) {
      const confirmForm = document.querySelector(".contact-confirm-del");
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
  .contact-confirm-change {
    display: flex;
    align-items: center;
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
    &_del {
      &-info {
        display: flex;
        justify-content: space-between;
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
    &_options {
      &_view,
      &_edit-field,
      &_del-field,
      &_add-field {
        width: 30px;
        height: 30px;
        margin: 0 15px;
        border: none;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        background-color: transparent;
        cursor: pointer;
      }
      &_view {
        background-image: url("../../assets/img/eye.png");
      }
      &_edit-field {
        background-image: url("../../assets/img/pen.png");
      }
      &_del-field {
        background-image: url("../../assets/img/trash-can.png");
      }
      &_add-field {
        background-image: url("../../assets/img/plus.png");
      }
    }
    &_del {
      width: 400px;
      display: grid;
      grid-template-columns: 100px -webkit-max-content;
      grid-template-columns: 100px max-content;
      align-items: center;
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
    &_edit {
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
      width: 600px;
      display: grid;
      grid-template-columns: 200px max-content;
      align-items: center;
      margin: 15px auto;
    }
    &_info {
      text-align: left;
    }

    &_inputlabel {
      margin: 10px 0;
      font-size: 18px;
      font-weight: 500;
      text-align: left;
      color: black;
      overflow: hidden;
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
  }
}
</style>

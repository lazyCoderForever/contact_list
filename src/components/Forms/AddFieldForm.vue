<template>
  <form class="addFieldForm" v-on:submit.prevent="addField">
    <button
      type="button"
      class="addFieldForm_close-btn"
      v-on:click="closeForm"
    ></button>
    <div class="addFieldForm_fields-wraper">
      <div class="addFieldForm_field-container">
        <label for="field_name" class="addFieldForm_label">Field name</label>
        <input
          type="text"
          class="addFieldForm_input"
          id="field_name"
          placeholder="Phone-2"
          v-model.trim="fieldName"
        />
        <span class="error-alert">{{ this.error }}</span>
      </div>
      <div class="addFieldForm_field-container">
        <label for="field_value" class="addFieldForm_label">Field value</label>
        <input
          type="text"
          class="addFieldForm_input"
          id="field_value"
          placeholder="+9 (999) 999-99-99"
          v-model.trim="fieldValue"
        />
      </div>
    </div>
    <button type="submit" class="addFieldForm_add-field-btn">Add field</button>
  </form>
</template>

<script>
export default {
  name: "AddFieldForm",
  props: {
    contactId: String,
    contactData: Object,
    setLastAction: Function,
  },
  data: () => {
    return {
      fieldName: "",
      fieldValue: "",
      error: "",
    };
  },
  methods: {
    displayError() {
      const alert = document.querySelector(".error-alert");
      alert.style.display = "block";
      setTimeout(() => {
        alert.style.display = "none";
      }, 3000);
    },
    addField() {
      if (
        Object.prototype.hasOwnProperty.call(this.contactData, this.fieldName)
      ) {
        this.error = "Field with this name already exist";
        this.displayError();
      } else if (!this.fieldName) {
        this.error = "Field  name requires";

        this.displayError();
      } else {
        this.$store.commit("ADD_FIELD", {
          contactId: this.contactId,
          fieldName: this.fieldName,
          fieldValue: this.fieldValue,
        });
        this.setLastAction("ACTION_ADD", {
          fieldName: this.fieldName,
        });
      }
    },
    closeForm(e) {
      const form = e.target.parentNode;
      form.style.left = "-200%";
    },
  },
};
</script>

<style scoped lang="scss">
.addFieldForm {
  position: absolute;
  left: -200%;
  top: 0%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 30px 40px 30px;
  transition: 0.3s;
  background-color: white;
  border: 1px solid black;
  border-radius: 25px;
  box-shadow: 0px 0px 10px 0px rgba(50, 50, 50, 0.75);
  z-index: 600;
  .error-alert {
    display: none;
    font-size: 14px;
    color: red;
    text-align: center;
  }
  &_close-btn {
    width: 30px;
    height: 30px;
    padding: 0;
    background: transparent;
    border: none;
    cursor: pointer;
    &::after,
    &::before {
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      background-color: #33cccc;
    }
    &::after {
      transform: rotate(45deg);
    }
    &::before {
      transform: rotate(-45deg) translateX(-2px);
    }
  }
  &_add-field-btn {
    width: 70%;
    margin: 0 auto;
    padding: 10px 25px;
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
  &_fields-wraper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  &_field-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 10px auto;
    .addFieldForm_input {
      max-width: 100%;
      margin: 15px 0;
      padding: 15px 25px;
      border: 1px solid #33cccc;
      box-sizing: border-box;
      border-radius: 15px;
      transition: 0.3s;
    }
    .addFieldForm_label {
      font-size: 18px;
    }
  }
}
</style>

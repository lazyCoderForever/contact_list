<template>
  <div class="addContactForm-wraper">
    <form class="addContactForm" v-on:submit.prevent="onSubmit">
      <div class="form_close">
        <button
          type="button"
          class="form_close-btn"
          v-on:click="closeForm"
        ></button>
      </div>
      <div class="addContactForm_fields-wraper">
        <label class="addContactForm_inputlabel" for="name">Name</label>
        <input
          class="addContactForm_inputField"
          type="text"
          id="name"
          placeholder="Presnyakova"
          v-model="name"
        />
        <label class="addContactForm_inputlabel" for="last_name"
          >Last Name</label
        >
        <input
          class="addContactForm_inputField"
          type="text"
          id="last_name"
          placeholder="Efimia"
          v-model="surname"
        />
        <label class="addContactForm_inputlabel" for="phone">Phone</label>
        <input
          class="addContactForm_inputField"
          type="text"
          id="phone"
          placeholder="+8(999)999-99-99"
          v-model="phone"
        />
        <label class="addContactForm_inputlabel" for="email">Email</label>
        <input
          class="addContactForm_inputField"
          type="text"
          id="email"
          placeholder="mail@mail.com"
          v-model="email"
        />
      </div>
      <button type="submit" class="addContactForm_submit">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddContactForm",
  data: () => {
    return {
      name: "",
      surname: "",
      phone: "",
      email: ""
    };
  },
  methods: {
    onSubmit() {
      const form = document.querySelector(".addContactForm-wraper");
      this.$store.commit("ADD_CONTACT", {
        name: this.name,
        surname: this.surname,
        phone: this.phone,
        email: this.email
      });
      form.style.left = "-100%";
      setTimeout(() => {
        this.name = "";
        this.surname = "";
        this.phone = "";
        this.email = "";
      }, 500);
    },
    closeForm() {
      const form = document.querySelector(".addContactForm-wraper");
      form.style.left = "-100%";
    }
  }
};
</script>

<style scoped lang="scss">
.addContactForm-wraper {
  position: absolute;
  left: -100%;
  max-width: 235px;
  margin: 0;
  transition: 0.3s;
  background: transparent;
  .addContactForm {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    max-width: 100%;
    padding: 20px;
    margin: 0 auto;
    background-color: white;
    box-shadow: 0px 0px 20px 0px rgba(133, 133, 133, 1);
    border-radius: 25px;
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
      width: 100%;
      margin: 10px auto;
      text-align: left;
    }
    &_inputField {
      max-width: 80%;
      margin: 0 auto 0 0;
      padding: 15px 25px;
      border: 1px solid #33cccc;
      box-sizing: border-box;
      border-radius: 15px;
      transition: 0.3s;
      &:hover {
        box-shadow: 12px 9px 10px 0px rgba(133, 133, 133, 1);
      }
    }
    &_fields-wraper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      margin: 15px auto;
    }
    &_submit {
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
    .form_close {
      display: flex;
      width: 30px;
      height: 30px;

      &-btn {
        width: 100%;
        height: 100%;
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
    }
  }
}
</style>

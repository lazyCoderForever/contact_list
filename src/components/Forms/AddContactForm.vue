<template>
  <div class="addContactForm-wraper">
    <div class="confirm_popUp_wraper">
      <div class="confirm_popUp">
        <p>Are you sure?</p>
        <div class="confirm_popUp-buttons">
          <button
            class="confirm_popUp-btn"
            data-conf_value="yes"
            v-on:click="confirm"
          >
            Yes
          </button>
          <button
            class="confirm_popUp-btn"
            data-conf_value="no"
            v-on:click="confirm"
          >
            No
          </button>
        </div>
      </div>
    </div>
    <form class="addContactForm" v-on:submit.prevent="onSubmit">
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
          v-model="lastName"
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
  name: 'AddContactForm',
  data: () => {
    return {
      name: '',
      lastName: '',
      phone: '',
      email: '',
    }
  },
  methods: {
    onSubmit() {
      const foo = document.querySelector('.confirm_popUp_wraper')
      foo.style.top = '0'
      foo.style.width = '100%'
      foo.style.height = '100vh'
    },
    confirm(e) {
      if (e.target.dataset.conf_value === 'yes') {
        return true
      } else {
        const foo = document.querySelector('.confirm_popUp_wraper')
        foo.style.top = '-100%'
        foo.style.width = '0'
        foo.style.height = '0'
      }
    },
  },
}
</script>

<style scoped lang="scss">
.addContactForm-wraper {
  margin: 30px auto;
  .confirm_popUp_wraper {
    position: absolute;
    top: -100%;
    width: 0;
    height: 0;
    background: rgba(227, 227, 227, 0.5);
    z-index: 590;
    transition: 0.5s;
    .confirm_popUp {
      position: relative;
      top: 50%;
      max-width: 560px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
      padding: 30px 40px;
      font-size: 18px;
      background-color: white;
      border-radius: 25px;
      &-buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 25px auto;
      }
      &-btn {
        width: 135px;
        margin: 0 25px;
        padding: 10px 15px;
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
  .addContactForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 50vw;
    padding: 20px;
    margin: 20px auto;
    box-shadow: 0px 0px 20px 0px rgba(133, 133, 133, 1);
    border-radius: 20px;
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
    }
    &_fields-wraper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      margin: 15px auto;
    }
    &_submit {
      width: 235px;
      padding: 15px 35px;
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
</style>

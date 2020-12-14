<template>
  <div class="contactForm-wraper">
    <button class="contactForm_add-field">Добавить поле</button>
    <form class="contactForm">
      <div
        v-for="(field, name, index) in contactData"
        :key="index"
        class="contactForm_field-wraper"
      >
        <label class="contactForm_inputlabel" :for="index">{{ name }}</label>
        <div class="contactForm_inputField-wraper">
          <input
            class="contactForm_inputField"
            type="text"
            :id="index"
            :value="field"
          />
          <span class="contactForm_deleteField minus"></span>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  props: {
    contactData: Object,
  },
  computed: {},
}
</script>

<style scoped lang="scss">
.contactForm-wraper {
  margin: 30px auto;
  .contactForm {
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
        content: '';
        position: absolute;
        left: 50%;
        top: 45%;
        width: 50%;
        height: 2px;
        margin-left: -4px;
        background-color: #33cccc;
      }
    }
    &_field-wraper {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 15px auto;
    }
  }
}
</style>

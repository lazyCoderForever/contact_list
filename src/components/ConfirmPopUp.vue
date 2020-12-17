<template>
  <div class="confirm_popUp_wraper" v-bind:class="additionalClass">
    <div class="confirm_popUp">
      <p v-if="withField">Remove field: "{{ this.withField }}"?</p>
      <p v-else-if="!withField">{{ this.popUpText }}</p>
      <div class="confirm_popUp-buttons">
        <button
          class="confirm_popUp-btn"
          data-conf_value="yes"
          v-on:click.prevent="confirm"
        >
          Yes
        </button>
        <button
          class="confirm_popUp-btn"
          data-conf_value="no"
          v-on:click.prevent="confirm"
        >
          No
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConfirmPopUp",
  props: {
    confirm: Function,
    withField: String,
    popUpText: String,
    additionalClass: String,
  },
};
</script>

<style scoped lang="scss">
.confirm_popUp_wraper {
  position: absolute;
  top: 0;
  width: 0;
  height: 0;
  background: rgba(227, 227, 227, 0.5);
  z-index: 590;
  transition: 0.5s;
  transform: scale(0);
  border-radius: 25px;
  .confirm_popUp {
    position: relative;
    top: 0;
    max-width: 100%;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 60px 40px;
    font-size: 18px;
    background-color: white;
    border-radius: 25px;
    &-buttons {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      margin: 25px auto;
    }
    &-btn {
      width: 135px;
      margin: 25px auto;
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
</style>

<button
  type="button"
  v-bind:class="{
    contactForm_options_stepBack: !lastAction.actionType,
    contactForm_options_stepBack_active: lastAction.actionType,
  }"
  v-bind:data="{
    active: !lastAction.actionType,
    contactForm_options_stepBack_active: lastAction.actionType,
  }"
  v-on:click="stepBack"
></button>

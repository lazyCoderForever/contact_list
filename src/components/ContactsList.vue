<template>
  <div class="contacts-wraper">
    <button class="contacts_addContact">Add new contact</button>

    <div class="contacts-table">
      <div v-for="contact in this.contacts" :key="contact._id" class="contact">
        <div class="contact-name">{{ contact.name }}</div>
        <div class="contact-lastName">{{ contact.lastName }}</div>
        <div class="contact-phone">{{ contact.phone }}</div>
        <div class="contact-mail">{{ contact.Email }}</div>
        <div class="contact-detail">
          <router-link :to="`/contact/${contact._id}`">Detail</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ContactsList',
  computed: {
    ...mapState({
      contacts: 'contacts',
    }),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.contacts_addContact {
  margin: 20px auto;
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
.contacts-table {
  margin: 30px auto;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 20px 6px rgba(50, 50, 50, 0.31);
  .contact {
    display: grid;
    grid-template-columns: 200px 200px 1fr 1fr 200px;
    padding: 20px 0;
    border-bottom: 1px solid #33cccc;
    &-name,
    &-lastName {
      text-align: left;
    }
    &-detail {
      a {
        padding: 15px 30px;
        background-color: #1d7373;
        border-radius: 15px;
        color: white;
        transition: 0.3s;
        &:hover {
          color: #1d7373;
          background: transparent;
          border: 1px solid #1d7373;
        }
      }
    }
  }
}
</style>

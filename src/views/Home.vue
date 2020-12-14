<template>
  <div>
    <Header />
    <div class="container home-wraper">
      <ContactsList />
    </div>
    <AddContactForm />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import ContactsList from '@/components/ContactsList.vue'
import AddContactForm from '@/components/Forms/AddContactForm.vue'
export default {
  name: 'Home',
  components: {
    ContactsList,
    Header,
    AddContactForm,
  },
}
</script>

<style scoped lang="scss">
.home-wraper {
  max-width: 1440px;
  display: grid;
  grid-template-columns: 1fr;
}
</style>

<template>
  <div>
    <Header />
    <EditingForm :contactId="contactId" :contactData="contact" />
  </div>
</template>

<script>
import EditingForm from "@/components/Forms/EditingForm.vue";
import Header from "@/components/Header.vue";

export default {
  name: "ContactDetail",
  components: {
    EditingForm,
    Header
  },
  props: ["id"],
  computed: {
    contactId() {
      return this.id;
    },
    contact() {
      return this.$store.getters.getContact(this.contactId);
    }
  }
};
</script>

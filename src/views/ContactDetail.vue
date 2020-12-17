<template>
  <div>
    <Header />
    <EditingForm :contactId="contactId" :contactData="contact" />
    <AddFieldForm :contactId="contactId" :contactData="contact" />
  </div>
</template>

<script>
import EditingForm from "@/components/Forms/EditingForm.vue";
import Header from "@/components/Header.vue";
import AddFieldForm from "@/components/Forms/AddFieldForm.vue";
export default {
  name: "ContactDetail",
  components: {
    EditingForm,
    Header,
    AddFieldForm,
  },
  props: ["id"],
  computed: {
    contactId() {
      return this.id;
    },
    contact() {
      return this.$store.getters.getContact(this.contactId);
    },
  },
};
</script>

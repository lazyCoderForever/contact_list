<template>
  <div class="contacts-wraper">
    <button class="contacts_addContact" v-on:click="addContact">
      Add new contact
    </button>
    <div class="confirm_popUp_wraper">
      <div class="confirm_popUp">
        <p>Delete this contact ?</p>
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
    <div class="contacts_table">
      <div class="contacts_table-header">
        <div class="contacts_table-header-name">Name</div>
        <div class="contacts_table-header-surname">Surname</div>
        <div class="contacts_table-header-phone">Phone</div>
        <div class="contacts_table-header-email">Email</div>
      </div>
      <div
        v-for="contact in this.contacts"
        :key="contact._id"
        class="contact"
        :data-id="contact._id"
      >
        <button class="contact-del" v-on:click="delContact"></button>
        <div class="contact_table-name">{{ contact.name }}</div>
        <div class="contact_table-surname">{{ contact.surname }}</div>
        <div class="contact_table-phone">{{ contact.phone }}</div>
        <div class="contact_table-email">{{ contact.email }}</div>
        <div class="contact_table-detail">
          <router-link :to="`/contact/${contact._id}`">Detail</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { toggleForm } from "@/assets/js/toggleForm";
export default {
  name: "ContactsList",
  data: () => {
    return {
      contactToDelete: "",
    };
  },
  computed: {
    ...mapState({
      contacts: "contacts",
    }),
  },
  methods: {
    confirm(e) {
      const confirmForm = document.querySelector(".confirm_popUp_wraper");
      const Form = toggleForm(confirmForm);
      if (e.target.dataset.conf_value === "yes") {
        this.$store.commit("DEL_CONTACT", {
          contactId: this.contactToDelete,
        });
        console.log(this.contactToDelete);
        Form.close();
      } else {
        Form.close();
      }
    },
    delContact(e) {
      const contactParentNode = e.target.parentNode;
      const contactId = contactParentNode.dataset.id;
      const confirmForm = document.querySelector(".confirm_popUp_wraper");
      const Form = toggleForm(confirmForm);
      this.contactToDelete = contactId;

      Form.open("full-screen");
    },
    addContact() {
      const form = document.querySelector(".addContactForm-wraper");
      let windowWidth = Number(window.innerWidth) / 2 - 137;
      form.style.left = `${windowWidth}px`;
      form.style.top = "30%";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.contacts-wraper {
  max-width: 90%;
  margin: 0 auto;
  .confirm_popUp_wraper {
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 10px 1px rgba(50, 50, 50, 0.75);
    .confirm_popUp {
      position: relative;
      top: 0;
      width: 400px;
      height: 300px;
      display: flex;
      padding: 40px;
      font-size: 20px;
      background-color: white;
      &-buttons {
        margin: 30px auto;
      }
      &-btn {
        margin: 15px auto;
      }
    }
  }
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
  .contacts_table {
    margin: 30px auto;
    padding: 20px 40px;
    border-radius: 20px;
    box-shadow: 0px 0px 20px 6px rgba(50, 50, 50, 0.31);
    &-header {
      display: grid;
      grid-template-columns: 150px 150px 200px 250px 250px;
      padding: 20px 0;
      margin: 20px auto;
      font-size: 23px;
      border-bottom: 1px solid red;
      &-name,
      &-surname {
        text-align: center;
      }
      &-phone,
      &-email {
        text-align: center;
      }
    }
    .contact {
      position: relative;
      display: grid;
      grid-template-columns: 150px 150px 200px 250px 250px;
      padding: 20px 0;
      border-bottom: 1px solid #33cccc;
      transition: 0.3s;
      &:hover {
        background: rgba(222, 222, 222, 0.5);
      }
      &:hover > .contact-del {
        transform: scale(1);
      }
      &-del {
        position: absolute;
        width: 20px;
        height: 20px;
        left: 10px;
        top: 30%;
        transform: scale(0);
        background-image: url("../assets/img/trash-can.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        border: none;
        background-color: transparent;
        transition: 0.2s;

        cursor: pointer;
      }
      &_table-name,
      &_table-surname {
        text-align: center;
      }
      &_table-detail {
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
}
</style>

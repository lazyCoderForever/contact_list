<template>
  <div class="addButton-wraper">
    <button class="addButton">Добавить контакт</button>
  </div>
</template>

<script>
export default {
  name: "AddContact",
  computed: {
    ...mapState({
      framesCount: "contacts"
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>

<template>
  <div>
    <Header />
    <h2>404</h2>
    <h3>Visit home page</h3>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "NotFound",
  components: {
    Header
  }
};
</script>

<style scoped lang="scss">
h2 {
  font-size: 20em;
}
h3 {
  font-size: 3em;
}
</style>

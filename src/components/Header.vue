<template>
  <header class="header-wraper">
    <div class="container header">
      <div class="home">
        <router-link :to="'/'">Main</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped lang="scss">
.header-wraper {
  padding: 20px 0;
  background-color: #1d7373;
  .header {
    .home {
      display: flex;
      justify-content: flex-start;
      margin: 0 30px;
      a {
        color: white;
        font-size: 32px;
        text-transform: uppercase;
      }
    }
  }
}
</style>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import '@/scss/reset';
* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
  max-width: 1440px;
  margin: 0 auto;
}
a {
  text-decoration: none;
}
</style>

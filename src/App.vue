<template>
  <pokemonPage />
</template>

<script>
import pokemonPage from './pages/PokemonPage.vue'

export default {
  name: 'App',
  components: {
    pokemonPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

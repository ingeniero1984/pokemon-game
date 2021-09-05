<template>
  <div class="pokemon-container">
    <img
      v-if="!showPokemon"
      :src="imgSrc"
      class="hidden-pokemon"
      alt="pokemon"
    />
    <img v-else :src="imgSrc" class="fade-in" alt="pokemon" />
  </div>
</template>

<script>
import { defineComponent, computed, ref } from "vue";

export default defineComponent({
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  setup(props) {
    const urlImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokemonId}.svg`;
    const url = ref(urlImg);
    const imgSrc = computed(() => url.value);

    return {
      url,
      imgSrc,
    };
  },
});
</script>

<style scoped>
.pokemon-container {
  height: 200px;
}
img {
  height: 200px;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.hidden-pokemon {
  filter: brightness(0);
}
</style>
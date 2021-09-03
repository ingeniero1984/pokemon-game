<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>¿Quién es este Pokemon?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemonArr.pokemons" @selected="checkAnswer"/>

   <div v-if="showAnswer">
      <h2 class="fade-in">{{message}}</h2>
      <button @click="newGame">Nuevo Juego</button>
   </div>
  </div>
</template>

<script>
import { defineAsyncComponent, defineComponent, onMounted, ref } from "vue";
import getPokemonOptions from "../helpers/getPokemonOptions";

export default defineComponent({
  name: "PokemonPage",
  components: {
    PokemonPicture: defineAsyncComponent(() =>
      import("@/components/PokemonPicture.vue")
    ),
    PokemonOptions: defineAsyncComponent(() =>
      import("@/components/PokemonOptions.vue")
    ),
  },
  setup() {
    const pokemonArr = ref([]);
    const pokemon = ref(null);
    const showPokemon = ref(false);
    const showAnswer = ref(false);
    const message = ref('')

    const mixPokemonArr = async () => {
      pokemonArr.value = await getPokemonOptions();

      const rndInt = Math.floor(Math.random() * 4)
      pokemon.value = pokemonArr.value.pokemons[ rndInt ]
    };

    const checkAnswer = (selectedId) => {
      showPokemon.value = true;
      showAnswer.value = true;

      if (selectedId === pokemon.value.id) {
        message.value = `Es correcto, ${pokemon.value.name}`
      } else {
        message.value = `Oops, era, ${pokemon.value.name}`
      }
    }

    const newGame = () => {
      showPokemon.value = false
      showAnswer.value = false
      pokemonArr.value = []
      pokemon.value = null
      mixPokemonArr()
    }

    onMounted(() => {
      mixPokemonArr()
    })

    return {
      newGame,
      message,
      pokemon,
      showAnswer,
      pokemonArr,
      mixPokemonArr,
      showPokemon,
      checkAnswer
    };
  },
});
</script>
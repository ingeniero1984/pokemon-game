<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>¿Quién es este Pokemon?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemonArr.pokemons" @selected="checkAnswer" />

    <div v-if="showAnswer">
      <button type="button" class="btn btn-outline-success" @click="newGame">Nuevo Juego</button>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent, defineComponent, onMounted, ref } from "vue";
import getPokemonOptions from "../helpers/getPokemonOptions";

import { showSwalSuccess, showSwalError } from "@/utils/sweetalert2-utils";

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
    const message = ref("");

    const mixPokemonArr = async () => {
      pokemonArr.value = await getPokemonOptions();

      const rndInt = Math.floor(Math.random() * 4);
      pokemon.value = pokemonArr.value.pokemons[rndInt];
    };

    const checkAnswer = (selectedId) => {
      showPokemon.value = true;
      showAnswer.value = true;

      if (selectedId === pokemon.value.id) {
        message.value = `Su nombre es, ${pokemon.value.name}`;
        showSwalSuccess(message.value)
      } else {
        message.value = `Oops, intenta nuevamente`;
        showPokemon.value = false;
        showSwalError(message.value)
      }
    };

    const newGame = () => {
      showPokemon.value = false;
      showAnswer.value = false;
      pokemonArr.value = [];
      pokemon.value = null;
      mixPokemonArr();
    };

    onMounted(() => {
      mixPokemonArr();
    });

    return {
      newGame,
      message,
      pokemon,
      showAnswer,
      pokemonArr,
      mixPokemonArr,
      showPokemon,
      checkAnswer,
    };
  },
});
</script>
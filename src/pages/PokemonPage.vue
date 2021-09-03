<template>
  <h1>¿Quién es este Pokemon?</h1>
  <!-- TODO: imagenes-->
  <PokemonPicture />
  <!-- TODO: opciones-->
  <PokemonOptions />
</template>

<script>
import { defineAsyncComponent, defineComponent } from "@vue/runtime-core";

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
});
</script>
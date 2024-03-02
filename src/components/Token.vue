<template>
    <div class="formulario">
    <h1>Token</h1>
    <label for="">Semilla:</label>
    <input v-model="semilla" type="text" />
    <label for="">Tiempo Vigencia:</label>
    <input v-model="tiempo" type="text" />
    <label for="">Token:</label>
    <input v-model="token" type="text" />
    <button @click="generar">Generar</button>
  </div>
</template>

<script>
import {
    obtenerTokenFachada
} from "../helpers/clienteToken";
export default {
      data() {
    return {
      semilla : null,
      tiempo : null,
      token : null
    };
      },
      methods: {},
  async generar() {
    const body = {
        jwtSemilla: this.semilla,
        jwtExpirationMs: this.tiempo,
      };
    const data = await obtenerTokenFachada(body);
    console.log(data);
    this.token = data.token;
  },

}
</script>

<style>

</style>
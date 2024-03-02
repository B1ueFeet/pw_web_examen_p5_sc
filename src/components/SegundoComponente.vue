<template>
  <div class="tabla">
    <tr v-for="estudiante in estudiantes" :key="estudiante.id">
      <td>{{ estudiante.id }}</td>
      <td>{{ estudiante.nombre }}</td>
      <td>{{ estudiante.edad }}</td>
      <td>{{ estudiante.cedula }}</td>
    </tr>
  </div>
</template>

<script>
import {
  consultarEstudianteFacade,
  insertarFacade,
} from "../helpers/clienteEstudiante.js";
export default {
  data() {
    return {
      estudiantes: [],
    };
  },
  methods: {},
  async consultarPorId() {
    const data = await consultarEstudianteFacade();
    console.log(data);
    this.estudiantes = data;
  },
};
</script>

<style>
</style>
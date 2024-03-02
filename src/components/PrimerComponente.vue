<template>
  <div class="formulario">
    <h1>Estudiante</h1>
    <label for="">Token:</label>
    <input v-model="token" type="text" />
    <label for="">Nombre:</label>
    <input v-model="nombre" type="text" />
    <label for="">Apellido:</label>
    <input v-model="apellido" type="text" />
    <label for="">Cedula:</label>
    <input v-model="cedula" type="text" />
    <button @click="insertar">Guardar</button>
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
      id: null,
      nombre: null,
      apellido: null,
      cedula: null,
    };
  },
   methods: {
    },
    async consultarPorId() {
      const data = await consultarEstudianteFacade();
      console.log(data);
    },
    async insertar() {
      const estBody = {
        nombre: this.nombre,
        apellido: this.apellido,
        cedula: this.cedula,
      };
      await insertarFacade(estBody);
    },
};

</script>

<style>
</style>
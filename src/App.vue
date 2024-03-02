<template>
  <img alt="Vue logo" src="./assets/logo.png">
<h1>Universidad central del Ecuador</h1>
<h2>Facultad de Ingenieria Ciencias Fisicas y Matematica</h2>
<NavBar/>
  <router-view/>
<footer>Todos los derechos reservados &#174;</footer>

</template>

<script>
import EstudiantePaginaVue from './pages/GuardarEstudiante.vue'
import NavBar from './components/NavBar.vue'
export default {
  name: 'App',
  components: {
    EstudiantePaginaVue,
    NavBar
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

img{
  width: 200px;
  height: 200px;
}

footer{
  position:fixed;
   left:0px;
   bottom:0px;
   height:30px;
   width:20%;
}
</style>
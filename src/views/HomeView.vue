<template>
  <main>
    <h3>Introduce tu nombre de usuario</h3>
    <h4>¿Tu eres?: {{ username }}</h4>
    <input placeholder="Username" v-model="username" />
    <br />
    <button @click="iniciar">Iniciar sesión</button>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref()
const router = useRouter()

function iniciar() {
  router.push({ name: 'about' })
}
</script>

<style scoped>
main {
  margin-top: 6rem;
}
input {
  font-family: inherit;
  border: 0;
  border-bottom: 2px solid gray;
  outline: 0;
  font-size: 1.3rem;
  color: white;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
}

button {
  margin-top: 20px;
  border: 0;
  color: #fff;
  cursor: pointer;
  font: inherit;
  padding: 0.7em 1em;
  position: relative;
  transition: filter var(--motion-duration);
  background: purple;
  border-radius: 15px;
}
</style>

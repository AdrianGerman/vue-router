<template>
  <main>
    <h3>Introduce tu nombre de usuario</h3>
    <h4>¿Tu eres?: {{ username }}</h4>
    <input placeholder="username" v-model="username" />
  </main>
</template>

<script>
export default {
  data() {
    return {
      username: ''
    }
  }
}
</script>

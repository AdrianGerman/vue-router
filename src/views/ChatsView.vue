<template>
  <div>
    <aside>
      <div v-for="chat in chats" :key="chat.id">
        <router-link :to="`/chats/${chat.id}`"> {{ chat.name }}</router-link>
      </div>
    </aside>
    <article>
      <router-view />
    </article>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const chats = ref()
const route = useRoute()

watch(
  () => route.params,
  (val) => {
    console.log('update params', val)
    chats.value = [
      { id: 1, name: 'Jack' },
      { id: 2, name: 'German' },
      { id: 3, name: 'Adrian' }
    ]
  },
  {
    immediate: true
  }
)
</script>

<style scoped>
* {
  margin-top: 30px;
}

a {
  text-decoration: none;
  color: aliceblue;
  background: rgb(13, 17, 23);
  padding: 5px;
  border-radius: 10px;
}
</style>

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

<script>
export default {
  data() {
    return {
      chats: []
    }
  },
  created() {
    this.$watch(
      () => this.$route.params,
      (val) => {
        console.log('Update params', val)
        this.chats = [
          { id: 1, name: 'Jack' },
          { id: 2, name: 'Adrian' },
          { id: 3, name: 'German' }
        ]
      },
      { immediate: true }
    )
  }
}
</script>

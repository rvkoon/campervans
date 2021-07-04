<template>
  <main class="xl:pr-4 xl:overflow-y-scroll xl:w-3/4">
    <ul class="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
      <VanCard 
        v-for="campervan in campervansList" 
        :key="campervan.id" 
        :campervan="campervan" 
        :handleSetCurrentCampervan="setCurrentCampervan"
      />
    </ul>
  </main>
</template>

<script>
import VanCard from '../vanCard'

export default {
  name:'VanList',
  components: {VanCard},
  props: ['campervansList', 'setCurrentCampervan'],
  }
</script>

<style lang="scss"></style>
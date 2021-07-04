<template>
    <div class="xl:flex-1 xl:overflow-hidden flex xl:flex-row flex-col gap-4">
      <div class="xl:w-1/4">
        <Filters /> 
      </div>
      <p v-if="!campervansList.length">Chargement...</p>
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
    </div>
</template>

<script>
import VanCard from '../vanCard'
import Filters from '../filters'

export default {
  name:'VanList',
  components: {VanCard, Filters},
  props: ['campervansList', 'setCurrentCampervan'],
  }
</script>

<style lang="scss"></style>
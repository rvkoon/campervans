<template>
    <div class="xl:flex-1 xl:overflow-hidden flex xl:flex-row flex-col gap-4">
      <div class="xl:w-1/4">
        <Filters :filterVansList="filterVansList" :minVansPrice="minVansPrice" :maxVansPrice="maxVansPrice"/> 
      </div>
      <main class="xl:pr-4 xl:overflow-y-scroll xl:w-3/4">
        <ul class="grid gap-4 lg:grid-cols-2 2xl:grid-cols-3">
          <VanCard 
            v-for="campervan in vansList" 
            :key="campervan.id" 
            :campervan="campervan" 
            :handleSetCurrentCampervan="setCurrentCampervan"
          />
        </ul>
      </main>
      {{minVansPrice}}
    </div>
</template>

<script>
  import VanCard from '../vanCard'
  import Filters from '../filters'

  export default {
    name:'VanList',
    components: {VanCard, Filters},
    props: ['campervansList', 'setCurrentCampervan'],
    data: function(){
      return {
        vansList: this.campervansList,
        minVansPrice: Math.min(...this.campervansList.map(el => el.starting_price)),
        maxVansPrice: Math.max(...this.campervansList.map(el => el.starting_price))
      }
    },
    methods: {
      filterVansList({maxPrice = 100, illimitedKm = false, foreignTripping = false}){
        let filteredVansList = this.campervansList
        filteredVansList = filteredVansList.filter(el => el.starting_price <= maxPrice)
        if(illimitedKm){
          filteredVansList = filteredVansList.filter(el => el.illimited_km)
        }
        if(foreignTripping){
          filteredVansList = filteredVansList.filter(el => el.foreign_tripping)
        }
        return this.vansList = filteredVansList
      }
    }
  }
</script>

<style lang="scss"></style>
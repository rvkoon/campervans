<template>
  <div class="container m-auto h-screen max-h-screen flex flex-col p-12 gap-4">
    <PageHeader />
    <div class="xl:flex-1 xl:overflow-hidden flex xl:flex-row flex-col gap-4">
      <div class="xl:w-1/4">
        <Filters /> 
      </div>
      <main class="xl:pr-4 xl:overflow-y-scroll xl:w-3/4">
        <p v-if="!campervansList.length">
          LOADING...
        </p>
        <ul class="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
          <VanCard 
            v-for="campervan in campervansList" 
            :key="campervan.id" 
            :campervan="campervan" 
            :setCurrentCampervan="setCurrentCampervan"
          />
        </ul>
      </main>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PageHeader from '../../common/components/pageHeader'
import Filters from './components/filters'
import VanCard from './components/vanCard'

export default {
  name: "Campervans",
  components: {PageHeader, Filters, VanCard},
  computed: {
    ...mapState({
      campervansList: state => state.campervans.campervansList
    })
  },
  methods: {
    setCurrentCampervan(selectedCampervan){ 
      this.$store.commit('campervans/setCurrentCampervan', selectedCampervan) 
    }
  },
  created () {
    setTimeout(() => {
      this.$store.dispatch('campervans/getCampervansList')
    }, 2000)
  }
};
</script>

<style lang="scss">
  #container{
    height: 100vh;
    max-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr 9fr;
    padding: 4vh;
    gap: 2vh;
    grid-template-areas: 'header header'
                         'filters main';

    .headerArea{
      grid-area: header;
    }

    .filtersArea{
      grid-area: filters;
    }

    .mainArea{
      grid-area: main;
      overflow-y: scroll;
    }
  }
</style>

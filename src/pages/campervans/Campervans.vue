<template>
  <div class="container m-auto h-screen max-h-screen flex flex-col p-12 gap-4">
    <PageHeader />
    <div class="xl:flex-1 xl:overflow-hidden flex xl:flex-row flex-col gap-4">
      <div class="xl:w-1/4">
        <Filters /> 
      </div>
      <p v-if="!campervansList.length">Chargement...</p>
      <VanList :campervansList="campervansList" :setCurrentCampervan="setCurrentCampervan"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PageHeader from '../../common/components/pageHeader'
import Filters from './components/filters'
import VanList from './components/vanList'

export default {
  name: "Campervans",
  components: {PageHeader, Filters, VanList},
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

<style lang="scss"></style>

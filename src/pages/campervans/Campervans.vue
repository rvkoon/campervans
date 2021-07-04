<template>
  <div class="container m-auto h-screen max-h-screen flex flex-col p-12 gap-4">
    <PageHeader />
    <div v-if="!campervansList.length" class="text-center">
      <p v-if="!fetchCampervansListError">Chargement...</p>
      <p v-else class="text-red-500 font-bold">ERROR FETCHING CAMPERVANS</p>
    </div>
    <VanList v-else-if="!currentCampervan && campervansList.length" :campervansList="campervansList" :setCurrentCampervan="setCurrentCampervan"/>
    <CurrentCampervan v-else :currentCampervan='currentCampervan' :setCurrentCampervan="setCurrentCampervan" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PageHeader from '../../common/components/pageHeader'
import VanList from './components/vanList'
import CurrentCampervan from './components/currentCampervan'

export default {
  name: "Campervans",
  components: {PageHeader, VanList, CurrentCampervan},
  computed: {
    ...mapState({
      campervansList: state => state.campervans.campervansList,
      currentCampervan: state => state.campervans.currentCampervan,
      fetchCampervansListError: state => state.campervans.fetchCampervansListError
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

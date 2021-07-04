<template>
  <div class="m-auto h-screen max-h-screen flex flex-col p-12 gap-4">
    <PageHeader />
    <VanList v-if="!currentCampervan" :campervansList="campervansList" :setCurrentCampervan="setCurrentCampervan"/>
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
      currentCampervan: state => state.campervans.currentCampervan
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

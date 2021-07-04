<template>
  <button
    class="h-96 bg-white shadow-sm rounded-md border-2 border-transparent hover:border-blue-300 overflow-hidden cursor-pointer"
    @click="setCurrentCampervan"
  >
    <img :src="thumbnail" alt="Image of a campervan" class="h-2/4 w-full object-cover" @error="setImageFBOnError"/>
    <section class="p-6 flex flex-col h-2/4 text-left">
      <div class="flex justify-between mb-2">
        <p class="font-bold lg:text-md text-base">{{campervan.title}}</p>
        <p class="text-base">{{`${campervan.starting_price}${currency}/j`}}</p>
      </div>
      <p class="text-base">{{campervan.vehicle_location_city}}</p>
      <div class="flex-1"></div>
      <div class="flex justify-between">
        <p class="font-base text-base">{{`${campervan.vehicle_seats} places - ${campervan.vehicle_beds} couchages`}}</p>
        <p class="text-base font-bold text-yellow-400">{{`${campervan.review_average}/5`}}</p>
      </div>
    </section>
  </button>
</template>

<script>
import currencyToSymbol from "../../../../common/services/currenciesToSymbols"
import vanImage from '../../../../common/images/campervan.svg'

export default {
  name: "VanCard",
  props: ['campervan', 'handleSetCurrentCampervan'],
  data: function(){
    return {
      thumbnail: this.campervan.pictures[0].url
    }
  },
  computed: {
    currency(){
      return currencyToSymbol(this.campervan.currency_used)
    }
  },
  methods: {
    setImageFBOnError() {
      this.thumbnail = vanImage
    },
    setCurrentCampervan(){
      this.handleSetCurrentCampervan(this.campervan)
    }
  }

}
</script>

<style lang="scss"></style>
<template>
  <article class="xl:flex-1 xl:overflow-hidden flex xl:flex-row flex-col gap-4">
    <main class="flex flex-col gap-12 w-4/6">
      <img
        :src="vanImage"
        @error="setImageFBOnError"
        class="w-full h-3/5 object-cover rounded-md"
        alt="Image of a campervan"
      >

      <section class="flex flex-grow">
        <img
          :src="owerPicture"
          @error="setOwnerFBOnError"
          class="w-30 h-30 object-cover rounded-md mr-4"
          alt="Owner of a campervan"
        >
        <div class="flex flex-col pb-6">
          <p class="font-bold lg:text-md text-3xl">{{currentCampervan.title}}</p>
          <p class="text-base mb-2">{{currentCampervan.vehicle_location_city}}</p>
          <div class="flex-grow"></div>
          <p class="text-base">
            <span class="font-bold text-yellow-400">
              {{`${currentCampervan.review_average}/5`}}&nbsp;&nbsp;&nbsp;
            </span>
            <span class="text-sm">
              ({{`${currentCampervan.review_count} reviews`}})
            </span>
          </p>
        </div>
      </section>

      <section class="flex justify-between items-center w-full h-24">
        <div 
          v-for="option in vanOptions" :key="option.id"
          class="flex w-2/12 h-full flex-col text-center bg-gray-200 p-2 rounded-xl"
        >
          <img :src="option.img" alt="picto" class="w-8 h-8 m-auto mb-4">
          <p class="text-sm">{{option.text}}</p>
        </div>
      </section>

    </main>

    <aside class="flex-grow flex flex-col gap-4">
      <button
        @click='handleSetCurrentCampervan'
        class="text-base border-2 border-gray-400 hover:border-gray-700 px-8 py-2 rounded-md mb-4 self-start"
      >
        Back
      </button>
      <section class="w-full bg-white rounded-md p-6">
        <div class="flex justify-between mb-2">
          <p class="font-bold lg:text-md text-base">Starting at</p>
          <p class="font-bold text-base">{{`${currentCampervan.starting_price}${currency}/j`}}</p>
        </div>
      </section>
      <section class="w-full bg-white rounded-md p-6 flex-grow">
        <p>Bla bla reinsurance</p>
      </section>
    </aside>
  </article>
</template>

<script>
  import currencyToSymbol from "../../../../common/services/currenciesToSymbols"
  import fallbackVanImage from '../../../../common/images/campervan.svg'
  import kilometers from '../../../../common/images/kilometer.svg'
  import bed from '../../../../common/images/bed.svg'
  import seat from '../../../../common/images/seat.svg'
  import world from '../../../../common/images/world.svg'

  export default {
    name:"CurrentCampervan",
    props: ['currentCampervan','setCurrentCampervan'],
      data: function(){
        return {
          vanImage: this.currentCampervan.pictures[0].url,
          owerPicture: this.currentCampervan.vehicle_owner_picture_url,
          vanOptions: [
            {
              id: this.currentCampervan.id,
              img: seat,
              text: `${this.currentCampervan.vehicle_seats} seats`
            },
            {
              id: this.currentCampervan.id,
              img: bed,
              text: `${this.currentCampervan.vehicle_beds} beds`
            },
            {
              id: this.currentCampervan.id,
              img: kilometers,
              text: this.currentCampervan.illimited_km ? 'Illimited kilometers' : 'Limited kilometers'
            },
            {
              id: this.currentCampervan.id,
              img: world,
              text: this.currentCampervan.foreign_tripping ? 'Can cross frontiers' : 'Cannot cross frontiers'
            }
          ]
        }
      },
    computed: {
      currency(){
        return currencyToSymbol(this.currentCampervan.currency_used)
      }
    },
    methods: {
      handleSetCurrentCampervan(){
        this.setCurrentCampervan(null)
      },
      setImageFBOnError() {
        this.vanImage = fallbackVanImage
      },
      setOwnerFBOnError() {
        this.owerPicture = fallbackVanImage
      },
    }
  }
</script>

<style lang="scss"></style>
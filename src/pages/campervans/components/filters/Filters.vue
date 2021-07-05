<template>
  <div class="h-full justify-center shadow-sm bg-white px-12 py-12 rounded-md">

    <h4 class="text-4xl font-bold mb-8">Filters</h4>
    <hr class="mb-8">

    <form @submit="handleFiltersSubmit">

      <div class="mb-8">
        <label
          class="text-lg font-bold"
          for="maxPrice"
        >
          Max price per day
        </label>
        <input name="maxPrice" class="mr-4 w-full" type="range" :min="minVansPrice" :max="maxVansPrice" v-model="maxPrice">
        <p>{{maxPrice}} € / Day</p>
      </div>

      <div class="mb-8">
        <input class="w-5 h-5" name="illimitedKm" type="checkbox" v-model="illimitedKm">
        <label
          class="text-lg font-bold"
          for="illimitedKm"
        >
          Illimited kilometers
        </label>
      </div>

      <div class="mb-8">
        <input class="w-5 h-5" name="foreignTripping" type="checkbox" v-model="foreignTripping">
        <label
          class="text-lg font-bold"
          for="foreignTripping"
        >
          Foreign tripping Allowed
        </label>
      </div>
      <button type="submit" class="px-6 py-2 border-2 border-grey-200 hover:border-green-400 w-full text-base rounded-md">Apply</button>
    </form>

  </div>
</template>

<script>
export default {
  name: "Filters",
  props: ['filterVansList', 'minVansPrice', 'maxVansPrice'],
  data: function(){
    return {
      maxPrice: this.maxVansPrice,
      illimitedKm: false,
      foreignTripping: false
    }
  },
  methods: {
    handleFiltersSubmit(e){
      e.preventDefault();
      this.filterVansList({
        maxPrice: this.maxPrice,
        illimitedKm: this.illimitedKm,
        foreignTripping: this.foreignTripping
      })
    }
  }
}
</script>


<style lang="scss">

</style>
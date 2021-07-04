<template>
  <header class="flex items-center shadow-sm bg-white px-16 py-12 rounded-md">
    <img :src="vanImage" alt="Image of an old Volkswagen van" class="object-contain h-16 mr-10">
    <h2 class="text-4xl font-bold text-black-900">My Campervans</h2>
  </header>
</template>

<script>
import vanImage from "../../images/campervan.svg"

export default {
  name: "PageHeader",
  data: function(){
    return {
      vanImage
    }
  }
}

</script>

<style lang="scss">
</style>

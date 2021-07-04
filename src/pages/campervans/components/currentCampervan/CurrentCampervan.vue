<template>
  <div>
    CURRENT CAMPERVAN
    <button @click='handleSetCurrentCampervan'>Back</button>
  </div>
</template>

<script>
  export default {
    name:"CurrentCampervan",
    props: ['currentCampervan','setCurrentCampervan'],
    methods: {
      handleSetCurrentCampervan(){
        this.setCurrentCampervan(null)
      }
    }
  }
</script>

<style lang="scss"></style>
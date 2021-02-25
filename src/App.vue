<template>
  <div>
    <div >
      <NavBar/>
    </div>
    <router-view/>
  </div>
</template>

<script>

import NavBar from '@/components/Navbar.vue'

export default {
  name:'App',
    components: {
    NavBar
  },

}
</script>

<style lang="scss">

</style>

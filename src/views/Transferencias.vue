<template>
    <div>
        <h1 class="text-center">Transferencias</h1>
        <div>
  <b-nav tabs align="center">
      <b-nav-item href="#"><router-link to="/transaccion">Transacción</router-link></b-nav-item>
      <b-nav-item href="#"><router-link to="/cartola">Cartola</router-link></b-nav-item>
      <router-view></router-view>
  </b-nav>
</div>
    </div>
</template>

<script>
    export default {
        name: 'Transferencias',

    }
</script>

<style>

</style>
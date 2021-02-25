<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
          <b-container>
            <b-navbar-brand href="#"><router-link to="/">BCD</router-link></b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav class="ml-auto">
                <b-nav-item href="#"><router-link to="/">Login</router-link></b-nav-item>
                <b-nav-item href="#"><router-link to="/home">Home</router-link></b-nav-item>
                <b-nav-item href="#"><router-link to="/transferencias">Transferencias</router-link></b-nav-item>   
              </b-navbar-nav>
            </b-collapse>
          </b-container>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name:'Navbar',
    }
</script>

<style>

</style>
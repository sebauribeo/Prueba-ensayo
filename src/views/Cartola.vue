<template>
    <div>
        <Transferencias/>
        <b-container>
        <h1 class="text-center">Cartola transferencias</h1>  
        <b-calendar block locale="en-US" class="mt-3"></b-calendar>        
        <b-button block variant="success" class="mt-3">Buscar</b-button>
        
        <div>
          <b-table striped hover :items="datosCartola" class="text-center mt-3"></b-table>
        </div>

        </b-container>
    </div>
</template>

<script>
import Transferencias from './Transferencias.vue'
import axios from "axios";


    export default {
        name: 'Cartola',
        components: {
            Transferencias,
        },
        data() {
            return {
              value: '',
              context: null,
              datosCartola: []
            }
        },
        mounted () {

          axios.get('cartola_transf.json')
            .then(response => {
              this.datosCartola = response.data.transferencias;
              console.log(this.datosCartola)
            })
            .catch(error => {
              console.log(error)
            })
        },
  
       


    }
</script>

<style>

</style>
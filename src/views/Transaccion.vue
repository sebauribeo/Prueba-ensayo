<template>
    <div>
        <Transferencias/>
        <b-container>
        <h1 class="text-center mt-3">Nueva transacción</h1>
        <h2 class="text-center m-2">Cuenta de origen</h2>
          <div>
              <b-form-select v-model="selected" :options="options"></b-form-select>
          <div class="mt-3">Tipo de cuenta: <strong>{{ selected }}</strong></div></div>
        <h2 class="text-center">Cuenta de destino</h2>  
          <div>
            Banco:<b-form-select :options="bancos" value-field="id" text-field="nombre" disabled-field="notEnabled" ></b-form-select>
            N° cuenta:<b-form-input></b-form-input>
            RUT:<b-form-input></b-form-input>
            Nombre:<b-form-input></b-form-input>
            Monto:<b-form-input></b-form-input>
            Email:<b-form-input></b-form-input>
            Mensaje<b-form-textarea
              id="textarea"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
            <b-button variant="success" class="col-12 my-5" >Transferir</b-button>
          </div>
        </b-container>
    </div>
</template>

<script>
import Transferencias from './Transferencias.vue'
import axios from "axios";

    export default {
        name: 'Transaccion',
          data() {
            return {
              selected: null,
              options: [
                { value: 'Cuenta corriente', text: 'Cuenta corriente' },
                { value: 'Linea de credito', text: 'Linea de credito' },
                { value: 'Targeta de credito', text: 'Targeta de credito' }
              ],
              bancos:[]
      }
    },
        components: {
            Transferencias,
        },
        mounted () {

          axios.get('bancos.json')
            .then(response => {
              this.bancos = response.data.bancos;
              console.log(this.bancos)
            })
            .catch(error => {
              console.log(error)
            })
        },
    }
</script>

<style>

</style>
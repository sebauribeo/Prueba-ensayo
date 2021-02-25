<template>
  <div class="container">
     <div class="mt-5">
      <b-row>
        <b-col cols="12" sm="12" md="12" lg="12" xl="12" >
          <b-card
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: auto;"
            class="mb-2 text-center"
          >
            <b-card-text><strong>{{usuario.nombre}} {{usuario.apellido}}</strong></b-card-text>
            <b-card-text>{{usuario.mensaje}}</b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </div>
    <div>
      <b-row>
        <b-col cols="12" sm="12" md="6" lg="6" xl="6" v-for="(item, index) in grafico" :key="index">
            <b-card
    :title="item.nombre"
    tag="article"
    style="max-width: auto;"
    class="mb-2 text-center"
  > 
    <b-card-text> Utilizado: <strong>{{item.utilizado}}</strong></b-card-text>
    <b-card-text> Disponible: <strong>{{item.disponible}}</strong></b-card-text>

  </b-card>

        </b-col>
      </b-row>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Home',
  data (){
    return {
      usuario: [],
      grafico: [],
    }
  },
  mounted() {
    axios.get('dashboard.json')
    .then(response => {
      this.grafico = response.data.cupos;
      console.log(this.grafico)
    })
    .catch(error => {
      console.log(error)
    }),
    axios.get('dashboard.json')
    .then(response => {
      this.usuario = response.data.usuario;
      console.log(this.usuario)
    })
    .catch(error => {
      console.log(error)
    })
  },
   
 
 
  

}
</script>

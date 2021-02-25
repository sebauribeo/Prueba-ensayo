<template>
    <div>
        <h2 class="text-center text-white">Ingresa a tu sesion.</h2>
            <div>
                <b-card style="max-width: 20rem;" class="card text-center mx-auto mt-4">
                    <b-avatar></b-avatar>
                    <b-form @submit.prevent="login" v-if="showFormReg">
                        <b-form-group id="input-group-2" label="Correo Electrónico:" label-for="input-2">
                            <b-form-input id="input-2" v-model="form.email" type="email" placeholder="Ingresa tu correo electrónico" required ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-3" label="Password:" label-for="input-3">
                            <b-form-input v-model="form.password"  id="feedback-user" type="password"></b-form-input>
                                <b-form-invalid-feedback >
                                    Ingresa entre 5 y 10 caracteres.
                                </b-form-invalid-feedback>
                                <b-form-valid-feedback >
                                    ¡Bien hecho!.
                                </b-form-valid-feedback>
                        </b-form-group>
                        <b-button type="submit" variant="success">Login</b-button>
                    </b-form>
                </b-card>
            </div>
            <div class="container mt-5">
                <b-row>
                    <b-col cols="12" sm="12" md="12" lg="4" xl="4" v-for="(item, index) in promocion" :key="index">
                        <b-card
                        :title="item.titulo"
                        :img-src="item.imagen"
                        :img-alt="item.imagen"
                        img-top
                        tag="article"
                        style="max-width: auto; height: 200px;"
                        class="mb-2"
                        >
                        <b-card-text>{{item.descripcion}}</b-card-text>
                        </b-card>
                    </b-col>
                </b-row>

            </div>
    </div>
</template>

<script>
import axios from "axios";

    export default {
        name:'Login',
        data() {
           return {
               form: {
                   email: '',
                   password: '',
               },
               showFormReg: true,
               promocion: [],
           }
        },
        mounted () {

          axios.get('promociones.json')
            .then(response => {
              this.promocion = response.data.promocion;
              console.log(this.promocion)
            })
            .catch(error => {
              console.log(error)
            })
        },         

    }
</script>

<style>

</style>
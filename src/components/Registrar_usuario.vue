<template>
    <div id="Registrar_usuario">
        <h2>¡Que bien que decidas hacer parte de nuestra comunidad!</h2> 
        <h3> Solo te resta diligenciar los siguientes datos y hacer clic en el botón</h3>
        <h3>Nombre de usuario:</h3>
        <input type="text" v-model="user"/><br/>
        <h3>Nombre completo:</h3>
        <input type="text" style="width:30vw" v-model="name"/><br/>
        <h3>Contraseña:</h3>
        <input type="text" v-model="password"/><br/>
        <button v-on:click="crearUsuario">Crear usuario</button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "Registrar_usuario",
    data: function(){
        return{
            user: this.user,
            name: this.name,
            password: this.password
        }
    },
    methods:{
        crearUsuario: function(){
            var datosDelRegistro = {
                user: this.user,
                name: this.name, 
                password: this.password
            }

            axios.post("https://quebrados-api.herokuapp.com/user/register", datosDelRegistro)
            .then(response =>{
                alert(response.data.respuesta)
                this.$router.push({name: "autenticar_usuario"})
            })
            .catch((error) =>{
                alert("no fue posible la creación por problemas en el servidor")
            })
        }
    }

}
</script>

<style>
#Registrar_usuario input{
    height: 40%;
    position: relative;
    left: 30px;
    bottom: 10px;
    font-size: 100%;
}

#Registrar_usuario h3{
    position: relative;
    left: 20px;
}
#Registrar_usuario button{
    height: 30%;
    position: relative;
    left: 30px;
    top: 10px;
    font-size: 100%;
}
</style>
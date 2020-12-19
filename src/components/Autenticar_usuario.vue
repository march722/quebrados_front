<template>
    <div id="Autenticar_usuario">
        <h3>Usuario:</h3>
        <input type="text" placeholder="Nombre de usuario" v-model="user"/><br />
        <h3>Contraseña:</h3>
        <input type="text" placeholder="Contraseña" v-model="password"/><br />
        <button v-on:click="autenticar"> Iniciar sesión </button>
        <div>
            <h4>¿No te has registrado aún?</h4>
            <button v-on:click="irACrearUsuario">Crear una cuenta</button>
        </div>

    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Autenticar_usuario",
    data: function(){
        return{
            user:this.user,
            password:this.password
        }
        
    },
    methods:{
        /*usar axios y hacer método get_user en capa lógica. Posteriormente se comparan las contraseñas
      con un condicional en main.py; Si son iguales, el isAuth se valida como true, desaparece la pantalla de login, 
      aparece el dashboard del usuario en cuestión y quedan disponibles los botones para cada una de las acciones.
      */
        autenticar: function(){
            var datosDeIngreso = {
                user: this.user,
                password: this.password
            }

            axios.post("https://quebrados-api.herokuapp.com/user/login", datosDeIngreso)
            .then(response => {

                var datosRespuesta = response.data

                if(datosRespuesta.respuesta==true){
                    alert("Autenticado correctamente")
                    localStorage.setItem("current_user", this.user)
                    this.$router.push({name: "dashboard"});
                }
                else{
                    alert("Usuario o contraseña incorrecta")
                }

            })
            .catch((error) => {
                alert("No fue posible validar los datos de ingreso");
            })
        },
        irACrearUsuario: function(){
            this.$router.push({name: "registrar_usuario"})
        }
    }
}
</script>

<style>
#Autenticar_usuario{
    text-align: center;
}

#Autenticar_usuario div{
    text-align: center;
    position: relative;
    top: 20px; 
}

#Autenticar_usuario div h4{
    text-align: center;
    position: relative;
    left: 25px;
}
#Autenticar_usuario div button{
    
    position: relative;
    bottom: 15px;
}

#Autenticar_usuario h3{
    position: relative;
    left: 25px;
}
#Autenticar_usuario{
    text-align: center;
}
#Autenticar_usuario button{
    height: 30%;
    position: relative;
    left: 25px;
}
#Autenticar_usuario input{
    height: 35%;
    position: relative;
    left: 30px;
    bottom: 10px;
    font-size: 100%;
}
</style>
<template>
    <div id="Registro_mov">
        <div id="navegacion">
            <nav>
                <button v-on:click="irADashboard"><strong> Dashboard </strong></button>
                <button v-on:click="irARegistro"> <strong>Registrar movimientos</strong></button>
                <button v-on:click="irAConsulta"><strong> Ver movimientos </strong></button>
                <button v-on:click="cerrarSesion"><strong> Cerrar sesión </strong></button>
            </nav>
        </div>
        <div id="content">
            <h2 id="usuario">{{user}}</h2>
            <h2>¡Registra tus movimientos! </h2>
            <h3>Por favor indica si es ingreso o egreso:</h3>
            <select v-model="tipo">
                <option value="ingreso" selected>Ingreso</option>
                <option value="egreso" >Egreso</option>
            </select>
            <h3>Descripción:</h3>
            <input type="text" style="width:30vw" v-model="desc"/><br/>
            <h3>Valor:</h3>
            <input type="text" v-model="valor"/><br/>
            <button v-on:click="guardarRegistro">Guardar registro</button>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Registro_mov",
    data: function(){
        return{
            user: localStorage.getItem('current_user')
        }
    },
    methods:{
        irARegistro: function(){
            if(this.$route.name != "registro_mov"){
            this.$router.push({name: "registro_mov"});
            }    
        }, 
        irADashboard: function(){
            if(this.$route.name != "dashboard"){
            this.$router.push({name: "dashboard"});
            }    
        }, 
        irAConsulta: function(){
            if(this.$route.name != "consultar_mov"){
            this.$router.push({name: "consultar_mov"});
            }    
        },
        guardarRegistro: function(){
            
            var datosDelRegistro = {
                user: this.user, 
                category: this.tipo, 
                concept: this.desc, 
                value: this.valor}

            axios.post("https://quebrados-api.herokuapp.com/register/create", datosDelRegistro)
            .then(response => {
                alert("Registro guardado correctamente");
            })
            .catch((error) => {
                alert("No se pudo realizar el registro");
            })
            this.$router.push({name: "registro_mov"});
        },
        cerrarSesion: function(){
            this.$router.push({name: "autenticar_usuario"});
            localStorage.setItem('current_user', null)
        }
    }
}
</script>

<style>
#content{
    text-align: center;
}

#content input{
    height: 40%;
    font-size: 100%;
}

#content select{
    height: 40%;
    font-size: 100%;
}

#usuario{
    color:#063286;
}

#content button{
    height: 30%;
    font-size: 100%;
    position: relative;
    top: 2vh;
}
#navegacion{
    background: rgb(232, 240, 246) ;
    text-align: center;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
}

#navegacion nav button{
    font-size: 100%;
    color:#181717;
    background: rgb(232, 240, 246);
    border: 1px solid rgb(232, 240, 246);
    border-radius: 5px;
    padding: 10px 20px;
}

#navegacion nav button:hover{
  background: #181717;
  color: rgb(232, 240, 246);
  border: solid ;
  height: 45%;
  border-top-width: thin;
  border-bottom-width: thin;
  border-right-width: thin;
  border-left-width: thin;
}
</style>
<template>
    <div id="Dashboard">
        <div id="navegacion">
            <nav>
                <button v-on:click="irADashboard"><strong> Dashboard </strong></button>
                <button v-on:click="irARegistro"> <strong>Registrar movimientos</strong></button>
                <button v-on:click="irAConsulta"><strong> Ver movimientos </strong></button>
                <button v-on:click="cerrarSesion"><strong> Cerrar sesión </strong></button>
            </nav>
        </div>
        <div id="content">
            <h2>Hola <span id="usuario"> {{user}} </span></h2>
            <h2>Tu balance es de ${{netoUsuario}}</h2>
            <h1 v-if="netoUsuario>0" id="positivo">No tienes deudas en el momento</h1>
            <h1 v-if="netoUsuario<0" id="negativo">Cuida de tu presupuesto! </h1>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "Dashboard",
    data: function(){
        return{
            user: localStorage.getItem('current_user'),
            netoUsuario: 0,
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
        cerrarSesion: function(){
            this.$router.push({name: "autenticar_usuario"});
            localStorage.setItem('current_user', null)
        }
    },

    created: function(){
        let mivariable=this;
        axios.get("https://quebrados-api.herokuapp.com/user/dashboard/" + this.user )
        .then(response =>{
            mivariable.netoUsuario=response.data.total
        })
        .catch((error)=>{
            alert("error al acceder a la DB")
        })
    }
}
</script>

<style>
#usuario{
    color:#063286;
    
}

#Dashboard h2{
    text-align: center;
}

#positivo{
    color: #063286;
    text-align: center;
}

#negativo{
    color:red; 
    text-align: center;
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
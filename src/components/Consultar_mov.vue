<template>
    <div id="Consultar_mov">
        <div id="navegacion">
            <nav>
                <button v-on:click="irADashboard"><strong> Dashboard </strong></button>
                <button v-on:click="irARegistro"> <strong>Registrar movimientos</strong></button>
                <button v-on:click="irAConsulta"><strong> Ver movimientos </strong></button>
                <button v-on:click="cerrarSesion"><strong> Cerrar sesión </strong></button>
            </nav>
        </div>
        <div>
        <h2>Estos son los registros financieros que tienes hasta el momento:</h2>
        <table border="5">
            <tr>
                <th>ID Reg</th>
                <!--<th >Usuario</th>-->
                <th >Tipo</th>
                <th >Descripción</th>
                <th >Valor</th>
                <th >Fecha</th>
            </tr>
            <tr v-for="registro in registrosGuardados" :key="registro.id_register">
                <td >{{registro.id_register}}</td>
                <!--<td >{{registro.user}}</td>-->
                <td >{{registro.category}}</td>
                <td >{{registro.concept}}</td>
                <td >{{registro.value}}</td>
                <td >{{registro.fecha}}</td>
            </tr>
        </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "Consultar_mov",
    data: function(){
        return{
            user: localStorage.getItem('current_user'),
            registrosGuardados: []
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
        let mivariable = this;
        axios.get("https://quebrados-api.herokuapp.com/register/find/"+this.user)
        .then(response =>{
            mivariable.registrosGuardados=response.data
        })
        .catch((error)=>{
            alert("No se pudo obtener la información de la base de datos")
        })
    }
}
</script>

<style>
#Consultar_mov{      
    text-align: center;
}
#Consultar_mov table{      
    margin: auto;
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
table, th, td {
    margin: 10px;
    padding: 5px;
}
</style>
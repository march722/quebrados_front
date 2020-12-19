<template>
  <div id="app">
    <div class="header">
      <h1>Quebrados.com</h1>
    </div>
    <div class="main-component">
      <router-view></router-view>
    </div>
    <div class="footer">
      <h2>G2M2 Equipo 10</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',

  components: {},

  beforeCreate: function(){
    localStorage.setItem("current_user", null)
    this.$router.push({name: "autenticar_usuario"});
  }
}
</script>

<style>
body{
  margin: 0 0 0 0;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.header{
  margin: 0%;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  background-color:#063286;
  color:#E5E7E9 ;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.header h1{
  width: 30%;
  text-align: center;
  font-size: 70px;
  justify-content: space-between;
  text-align: center;
  position: relative;
  left:32%;
  bottom: 7vh;
}
.header h2{
  font-size: 23px;
}

.main-component{
  background-image: url('https://www.eluniverso.com/sites/default/files/styles/powgallery_1280/public/fotos/2020/09/finanzas.jpg?itok=bDXv3wTe');
  background-size: 100%;
  background-repeat: no-repeat;
  height: 100vh;
  margin: 0%;
  padding: 0%;
  background-color: #FDFEFE;
}
.footer{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 5vh;
  min-height: 100px;
  background-color: #060606 ;
  color: #E5E7E9;
}
.footer h2{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
import vueRouter from 'vue-router'
import Registro_mov from './components/Registro_mov'
import Consultar_mov from './components/Consultar_mov'
import Autenticar_usuario from './components/Autenticar_usuario'
import Dashboard from './components/Dashboard'
import Registrar_usuario from './components/Registrar_usuario'
import App from './App'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: "root",
            component: App
        },
        {
            path: '/register/create',
            name: "registro_mov",
            component: Registro_mov
        },
        {
            path: '/register/find/:user',
            name: "consultar_mov",
            component: Consultar_mov
        },
        {
            path: '/user/login',
            name: "autenticar_usuario",
            component: Autenticar_usuario
        },
        {
            path: '/user/dashboard/:user',
            name: "dashboard",
            component: Dashboard
        },
        {
            path: '/user/register',
            name: "registrar_usuario",
            component: Registrar_usuario
        }
    ]
})
export default router
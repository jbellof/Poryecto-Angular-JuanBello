import { MenuOption } from "../types/MenuOption.type"

const menu: Array<MenuOption> = [
    {
        icono: "bi-house",
        titulo: "Inicio",
        ruta: ['/home']
    },
    {
        icono: "bi-search",
        titulo: "Buscar",
        ruta: ['/search']
    },
    {
        icono: "bi-compass",
        titulo: "Explorar",
        ruta: ['/explore']
    },
    {
        icono: "bi-film",
        titulo: "Reels",
        ruta: ['/reels']
    },
    {
        icono: "bi-envelope",
        titulo: "Mensajes",
        ruta: ['/messages']
    },
    {
        icono: "bi-heart",
        titulo: "Notificaciones",
        ruta: ['/notifications']
    },
    {
        icono: "bi-plus-square",
        titulo: "Crear",
        ruta: ['/new']
    },
    {
        icono: "bi-person-bounding-box",
        titulo: "Perfil",
        ruta: ['/profile']
    },
    {
        icono: "bi-person-bounding-box",
        titulo: "Login",
        ruta: ['/login']
    },
];

export default menu
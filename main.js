import Router from "./pages/services/router";
const app = document.querySelector('#app');
Router.Get('/inicio', window.location);
const url = new URL(window.location);
const params = new URLSearchParams(url);
// console.log(params.get('movie'));
// console.log(params.get('categoria'))
const template = `
<h1>NOMINA</h1>
<a href="/pages/inicio/index.html">Inicio</a>
<a href="/pages/empleados/index.html">Empleados</a>
<a href="/pages/ajustes/index.html">Ajustes</a>
`;

app.innerHTML = template
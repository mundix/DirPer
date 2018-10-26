import Vue from 'vue'
import App from './App.vue'

// Directiva Global , como definirla
Vue.directive('decorar',{
  //segundo argumento es un objeto, ponemos el gancho "bind"
  //el => element
  // binding => valores o modificadores que enviemos
  //vnode => algo que vue js usa y no se va a tocar
  bind(el,binding,vnode) {
    el.style.fontFamily = 'time new roman';
    el.style.fontWeight = 'bold';
    el.style.fontSize = '24px';

  }
})
//Esta directiva sera llamada dentro del span , o dentro del elemeto que querrams.

new Vue({
  el: '#app',
  render: h => h(App)
})

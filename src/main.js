import Vue from 'vue'
import App from './App.vue'

// Directiva Global , como definirla
Vue.directive('decorar',{
  //segundo argumento es un objeto, ponemos el gancho "bind"
  //el => element
  // binding => valores o modificadores que enviemos
  //vnode => algo que vue js usa y no se va a tocar
  bind(el,binding,vnode) {
    //la info que se envia esta dentro de binding
    // el.style.fontFamily = 'time new roman';
    // el.style.fontFamily = binding.vale;
    // el.style.fontWeight = 'bold';
    el.style.fontSize = '24px';

    //Verifica si existe
    if(binding.modifiers['negrilla'])
    {
      el.style.fontWeight = 'bold';
    }

    if(binding.modifiers['italico'])
    {
      el.style.fontStyle = 'italic';
    }

  }
})
//Esta directiva sera llamada dentro del span , o dentro del elemeto que querrams.
// ahora queremos pasarle el el tipo de letras que queremos usar

new Vue({
  el: '#app',
  render: h => h(App)
})

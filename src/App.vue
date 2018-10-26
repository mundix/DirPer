<template>
  <div class="container">
    <div class="jumbotron">

      <!-- PAra pasar multiples valores ademas del helvetica lo ponemos como un objeto {} -->
    <span v-decorar:pequeno.italico.negrilla="{familia: 'helvetica',color:'red'}">Aprende Vue Js 2 Facilmente</span>
    <hr>
    <span v-decorar-local:grande.bold.italico="{familia: 'helvetica',color:'green'}">Aprende Angular 2 facilmente</span>
      <!-- <span v-decorar>Aprende Vue Js 2 Facilmente</span> -->
      <!-- v-decorar es la directiva  -->

      <!-- Ahora vamos a pasar el tipo de letras a nuestra directiva -->
      <!-- <span v-decorar="'Helvetica'">Aprende Vue Js 2 Facilmente</span> -->

      <!-- Queremos que el texxto cambie y sea en negrita -->
      <!-- <span v-decorar.italico.negrilla="'Helvetica'">Aprende Vue Js 2 Facilmente</span> -->
      <!-- Si no quiero la negrilla pongo v-decorar simplemente  -->

      <!-- Con : se pasan el argumentos dentro de bindings.arg == 'grande ' -->
      <!-- <span v-decorar:grande.italico.negrilla="'Helvetica'">Aprende Vue Js 2 Facilmente</span> -->
    </div>
  </div>
</template>

<script>
// vAmos a crear una directiva dentro del span,
// como podemos crearlas y que vamos hacer dentro de ellas
// Hay dos formas , globarl y local
//en main.js de manera global se define la directiva
export default {
  //vamos a craar directiva local
  directives: {
    'decorar-local': {
      //pasamos lo miso que tenemos en la directiva global, solo pasamos el bind (el,binding,vnode)
      bind(el,binding,vnode) {
        el.style.fontSize = '24px';
        el.style.fontFamilty = binding.value.familia;
        el.style.color = binding.value.color;

        if(binding.arg == 'grande')
        {
          el.style.fontSize = '50px';
        }
        if(binding.arg == 'pequeno')
        {
          el.style.fontSize = '10px';
        }
        if(binding.modifiers['negrilla'])
        {
          el.style.fontWeight = 'bold';
        }
        if(binding.modifiers['italico'])
        {
          el.style.fontStyle = 'italic';
        }
      }
    }
  }
}
</script>

<style>

</style>

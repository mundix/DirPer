<template>
  <div class="container">
    <div class="jumbotron">
      <!-- <span v-decorar>Aprende Vue Js 2 Facilmente</span> -->
      <!-- v-decorar es la directiva  -->

      <!-- Ahora vamos a pasar el tipo de letras a nuestra directiva -->
      <!-- <span v-decorar="'Helvetica'">Aprende Vue Js 2 Facilmente</span> -->

      <!-- Queremos que el texxto cambie y sea en negrita -->
      <span v-decorar.negrilla="'Helvetica'">Aprende Vue Js 2 Facilmente</span>
      <!-- Si no quiero la negrilla pongo v-decorar simplemente  -->
    </div>
  </div>
</template>

<script>
// vAmos a crear una directiva dentro del span,
// como podemos crearlas y que vamos hacer dentro de ellas
// Hay dos formas , globarl y local
//en main.js de manera global se define la directiva
export default {

}
</script>

<style>

</style>

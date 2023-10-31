<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.bg10
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Iniciativa comunitaria
    .row.justify-content-center.align-items-start(data-aos="flip-down")          
      .col-lg-4.my-3  
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/26.png', alt='')
      .col-lg-8.my-3
        p(data-aos="fade-down") #[martk.t1 Son propuestas de orden colectivo o comunitario que presentan las familias participantes de Mi Familia Rural y tienen como propósito aportar al desarrollo del territorio o de la comunidad, buscando potenciar la generación de factores protectores para el desarrollo de las niñas, niños, adolescentes y sus familias (ICBF,2023). ]
        .bg11.p-4
          p(data-aos="fade-down").mb-0 Son propuestas de orden colectivo o comunitario que presentan las familias participantes de Mi Familia Rural y tienen como propósito aportar al desarrollo del territorio o de la comunidad, buscando potenciar la generación de factores protectores para el desarrollo de las niñas, niños, adolescentes y sus familias (ICBF,2023).         
        
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

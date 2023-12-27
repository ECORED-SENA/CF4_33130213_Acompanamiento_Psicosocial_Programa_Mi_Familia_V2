<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg1.align-items-center.py-4.pb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-start.mb-4.p-3.py-2(data-aos="flip-down")          
          .col-lg-auto.my-3  
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/2.svg', alt='')
          .col.my-3
            p(data-aos="fade-down") En este apartado invitamos al profesional a ampliar su mirada en relación con las familias y comunidades, por lo que se desarrollan los enfoques que son la manera de ver las realidades y en consecuencia, de abordar las situaciones relativas a ellas, con los cuales logrará comprender las diversidades de sus dinámicas, los procesos por los que atraviesa y la complejidad de las relaciones en las que participa. Para ello se desarrollarán los enfoques de capacidades, de derechos; se abordarán los enfoques diferenciales y el enfoque de curso de vida como orientadores del acompañamiento familiar.

            p(data-aos="fade-down").mb-0 El siguiente video presenta, de forma genérica, lo que se desarrollará en este componente formativo.  

        .row.justify-content-center.align-items-center 
          .col-lg-12(data-aos="fade-left")     
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/dXbOV942YCs?si=jvdlp6BlK49-8C3S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 
            figcaption Video. Acompañamiento psicosocial 
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

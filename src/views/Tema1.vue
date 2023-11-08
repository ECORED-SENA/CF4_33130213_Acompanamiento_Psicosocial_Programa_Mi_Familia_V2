<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Acompañamiento psicosocial

    .row.justify-content-center.align-items-start.mb-4(data-aos="flip-down")          
      .col-lg-2.my-3  
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/3.svg', alt='')
      .col.my-3
        p(data-aos="fade-down").mb-0 Se desarrolla principalmente a través de visitas en domicilio o su equivalente no presencial (en caso que la situación lo requiera). Inicia con un proceso de diagnóstico, a partir de la aplicación de instrumentos, que permiten a la familia y al profesional construir metas y objetivos del acompañamiento, en respuesta a las necesidades, intereses, expectativas y/o situaciones emergentes en las familias. Luego, con base en ello, se definen las temáticas a abordar, según la realidad familiar. 

    p(data-aos="fade-down").mb-5 La siguiente figura presenta en qué consiste la primera visita en domicilio o su equivalente no presencial, la cual se ha denominado “Zarpando a la aventura”, asumiendo la metáfora de un viaje.       

    .titulo-sexto.color-acento-contenido(data-aos="fade-left")
      h5 Figura 1.
      span Zarpando a la aventura 
    img.img-a.img-t.mb-5(data-aos="zoom-in")(src='@/assets/curso/temas/4.svg', alt='Proceso de la primera visita "Zarpando a la aventura" explicada en tres facetas.')

    p(data-aos="fade-down").mb-0 Ahora bien, las #[b.tr familias que pasan por un proceso de reunificación y reintegro familiar] y que son priorizadas por la Dirección de Protección en el marco de la articulación con la Dirección de Familias y Comunidades, serán atendidas del mismo modo que una familia priorizada territorialmente de acuerdo con el manual operativo de la modalidad y tendrá las mismas formas de atención, es decir, visitas en domicilio, encuentros familiares y comunitarios y se realizará un proceso de acompañamiento en gestión de redes para movilizar sus autonomía, tanto en lo rural como en lo urbano.    

    .row.bg2.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center(data-aos="flip-down")
          .col-lg-10
            .row.justify-content-center.align-items-center(data-aos="flip-down") 
              .col.my-3
                p(data-aos="fade-down").mb-0 Se recomienda consultar la cartilla de reunificación familiar, construida en articulación con la Direcciones de Protección y Familias y Comunidades, así como la Guía de articulación entre las dos direcciones, para las familias que pasan por un proceso de reunificación y reintegro familiar.                      
              .col-lg-auto.my-3  
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/5.svg', alt='')
           
    p(data-aos="fade-down").mb-5 En la atención de #[b.tr familias con PcD], por su parte, se podrán abordar elementos propios del sistema de cuidado y protección al interior de la familia o abordar estrategias de protección frente a los sistemas externos. A continuación se exponen algunas temáticas de ejemplo a trabajar. 

    .row.justify-content-center.align-items-center(data-aos="flip-down")          
      .col-lg-9
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Ejemplos de temáticas
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/7.svg', alt='Se presentan cuatro temáticas como ejemplo para abordar con familias con PcD.')              
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

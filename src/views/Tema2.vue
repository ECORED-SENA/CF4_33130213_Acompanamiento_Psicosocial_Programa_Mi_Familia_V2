<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Visitas en domicilio
    p(data-aos="fade-down").mb-5 La visita en domicilio – VD es una forma de atención psicosocial de la modalidad Mi Familia para el abordaje y acercamiento a la familia en su propio entorno. De acuerdo con el Lineamiento Técnico de la modalidad, las visitas en domicilio permiten observar y comprender las interacciones cotidianas al interior del sistema y entre los subsistemas familiares e identificar recursos y potencialidades, a fin de lograr el reconocimiento, resignificación, resolución y abordaje de situaciones que obstaculizan o facilitan el desarrollo integral del grupo familiar y de cada uno de sus integrantes. Algunos de estos aspectos en este proceso son:

    ImagenInfografica.color-acento-botones.mb-5(data-aos="fade-left")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/8.svg', alt='Texto que describa la imagen')

      .tarjeta.color-acento-botones.p-3(x="25%" y="25%" numero="+")
        p.mb-0 Esta forma de intervención permite la identificación de dificultades y factores de vulnerabilidad que se relacionan con conflictos o situaciones de crisis en el sistema familiar.
      .tarjeta.color-acento-botones.p-3(x="25%" y="56.5%" numero="+")
        p.mb-0 La visita en domicilio sucede en el hogar, donde surgen las relaciones afectivas, emocionales, sociales y se producen actitudes, aptitudes, prácticas, imaginarios, costumbres y hábitos por parte de los integrantes de la familia.  
      .tarjeta.color-acento-botones.p-3(x="56.7%" y="6.7%" numero="+")
        p.mb-0 Fomenta con la familia un cambio de perspectiva y una visión de caminos posibles para su historia.  
      .tarjeta.color-acento-botones.p-3(x="75%" y="48.5%" numero="+")
        p.mb-0 Promueve la participación y responsabilidad frente al desarrollo de sus integrantes.    
      .tarjeta.color-acento-botones.p-3(x="55.6%" y="85.2%" numero="+")
        p.mb-0 Es un espacio para planear, democratizar, desarrollar y hacer el balance del plan familiar.   

    p(data-aos="fade-down") La VD involucra aspectos importantes como la observación, la indagación y la conversación, a la vez que facilita el desarrollo de acciones que pueden llevar a cambios significativos en el escenario real del hogar.

    .row.justify-content-center.align-items-center 
      .col-lg-8.my-3
        .bg3(data-aos="flip-down").p-4.mb-4
          p(data-aos="fade-down").mb-0 Se recomienda consultar la cartilla de reunificación familiar, construida en articulación con la Direcciones de Protección y Familias y Comunidades, así como la Guía de articulación entre las dos direcciones, para las familias que pasan por un proceso de reunificación y reintegro familiar. 
        p(data-aos="fade-down") Cada visita tiene una duración de 45 a 60 minutos y se programará de manera concertada con la familia, procurando que en esta participe el mayor número de integrantes. La duración de la visita en domicilio no debe ser inferior a 45 minutos, garantizando un tiempo óptimo para la generación de conversaciones con la familia. Para el caso de la familia con PcD se debe promover que esta persona, no solo esté presente, sino que participe en la visita.                               
      .col-lg-4.my-3  
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/9.png', alt='')       

    Separador 
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.1  Etapas para el desarrollo de las visitas en domicilio

    .row.justify-content-center.align-items-center.bg4.px-3.mb-5(data-aos="flip-down") 
      .col-lg-auto.my-3  
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/10.svg', alt='')      
      .col.my-3
        p(data-aos="fade-down").mb-0 Para el adecuado desarrollo de las VD se proponen los siguientes momentos: Preparación, Implementación y Reporte. A continuación, se presentan los detalles para cada una de estas etapas.

    .row.mb-4(data-aos="zoom-in-right")      
      .col-auto
        .bg5.p-2.px-3
          h4.mb-0 Preparación                    

    p(data-aos="fade-down") La preparación corresponde a las acciones previas al encuentro con las familias que realizan los profesionales de acompañamiento familiar con la orientación de las UAT. Esta etapa incluye la lectura, análisis del material de apoyo y el alistamiento de los recursos para el desarrollo de las actividades que se proponen. 

    .row.justify-content-center      
      .col-lg-4.my-3
        .bg6.p-4.h-100(data-aos="fade-right")
          img.mb-4.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/11.svg', alt='')      
          p.mb-0 Se espera que el PAF, concerte con la familia el día y la hora de realización de la visita, teniendo en cuenta sus rutinas y dinámicas, garantizando la participación del mayor número de sus integrantes.
      .col-lg-4.my-3
        .bg6.p-4.h-100(data-aos="fade-down")
          img.mb-4.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/12.svg', alt='')      
          p.mb-0 Acordar o precisar con los integrantes de la familia, los objetivos específicos al inicio de cada VD. 
      .col-lg-4.my-3
        .bg6.p-4.h-100(data-aos="fade-left")
          img.mb-4.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/13.svg', alt='')      
          p.mb-0 Se incentivará la participación de las PcD en las actividades a realizar y el material de apoyo utilizado deberá contar con ajustes razonables pertinentes.  
      .col-lg-4.my-3
        .bg6.p-4.h-100(data-aos="fade-right")
          img.mb-4.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/14.svg', alt='')      
          p.mb-0 Retomar previamente el tema central a abordar de acuerdo con el plan familiar, procurar realizar conexiones con otros temas previos o necesarios de acuerdo con la realidad de la familia. 
      .col-lg-4.my-3
        .bg6.p-4.h-100(data-aos="fade-down")
          img.mb-4.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/15.svg', alt='')      
          p.mb-0 Se espera que en el momento inicial de cada VD se retomen aprendizajes y compromisos que se acordaron en la visita anterior.  
      .col-lg-4.my-3
        .bg6.p-4.h-100(data-aos="fade-left")
          img.mb-4.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/16.svg', alt='')      
          p.mb-0 El profesional de acompañamiento analizará la situación de la familia antes de realizar la VD, pues alguna situación emergente puede indicar la necesidad de priorizar un énfasis diferente al que se haya programado.  

    p(data-aos="fade-down").mt-4 A partir de las consideraciones planteadas desde el enfoque diferencial, debe tenerse en cuenta ajustes razonables para cualquier condición diferencial que lo requiera, para garantizar la participación de todos los integrantes de la familia en los procesos de acompañamiento desde la modalidad Mi Familia
    p(data-aos="fade-down") En el siguiente video amplía el proceso de preparación de las visitas.     
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/3DV9VfhFa_g?si=8BPiUr1lU_4fpyB8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Proceso de preparación
    p(data-aos="fade-down") Es importante en el acompañamiento entender a la familia como un sujeto que cuenta con un bagaje de experiencias y de concepciones y que podemos ayudar a potenciar o a reconstruir, por ello las visitas no se conciben como una transferencia de información o como el escenario de implementación de una técnica de intervención, es un espacio de coconstrucción entre el profesional y la familia.        

    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-down") 
      .col-lg-auto.my-3  
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/17.svg', alt='')      
      .col.my-3
        p(data-aos="fade-down").mb-0 Los métodos que parten de las experiencias previas de la familia, como metodología experiencial, contemplan la reflexión y análisis de las prácticas cotidianas, de las consecuencias de estas en la vida familiar o en el desarrollo de los niños, niñas o adolescentes y sus familias y finalmente una verbalización de los objetivos personales y familiares de cambio. De acuerdo con esta consideración, los resultados esperados de la visita en domicilio “#[mark.t1 no se consigue a través de charlas o discursos basados en el «deber ser», sino mediante procedimientos que generen reflexión y análisis personal”. Rodrigo, Máiquez, & Martín (2010, pág. 22)]. A continuación, se desarrolla los momentos que conforma la visita.  
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.my-3.d-none.d-lg-block  
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/18.png', alt='')      
      .col-lg-8.my-3
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg7")(data-aos="fade-down")
          div(titulo="Inicio de la visita") 
            p En el momento de desarrollo de la VD el profesional de acompañamiento inicia presentando a la familia el propósito de la visita, si se trata de una visita de caracterización y diagnóstico de la familia, de construcción y definición del plan familiar o de desarrollo de las sesiones alrededor de temáticas acordadas con las familias. 

            p Es importante indagar de manera muy general si la familia y los integrantes que participan han tenido una experiencia previa con la temática o el proceso a desarrollar y definir de manera conjunta el objetivo de la visita. En este punto es importante que el PAF tenga una actitud de apertura y evite hacer juicios de valor sobre lo que manifiesta la familia.
          div(titulo="Reflexión y análisis")
            p Posteriormente, el profesional de acompañamiento psicosocial puede promover con las familias la reflexión e identificación de formas y perspectivas distintas de interpretar y retomar en la práctica los asuntos tratados a partir de cada tema, lo cual se puede lograr con preguntas relacionadas sobre la propia vivencia de los padres, madres o cuidadores durante su infancia o adolescencia y los significados construidos en el transcurso de la vida, motivando un ejercicio de ponerse en el lugar de otros y reflexionar sobre cómo se pueden estar sintiendo. En ese sentido, se sugiere el uso de herramientas pedagógicas que incentiven la reflexión, por ejemplo, cuentos, historias o canciones que encierren situaciones que puedan usarse como metáfora y que propicien la conversación desde diferentes formas de comprender y abordar una misma situación.

            p En esta parte motivamos una reflexión sobre las distintas perspectivas y diferentes significados o creencias que pueden existir frente a una misma situación. Para esto, los materiales pedagógicos y metodológicas sugeridos por la modalidad, proponen actividades, juegos y otras estrategias didácticas que tienen como fin promover la reflexión sobre las dinámicas familiares para identificar escenarios de aprendizaje y transformación (ajustables a cada situación familiar).          
          div(titulo="Ejercicio autónomo")
            p Es necesario en la visita en domicilio generar un ambiente de confianza que permita a los integrantes de la familia expresar lo que piensan, como actúan, identifiquen las consecuencias positivas y negativas, las ventajas y desventajas que se derivan de sus formas de relacionamiento y dinámicas familiares y formas de afrontamiento de situaciones de su interés.

            p Así mismo, es pertinente que el profesional de acompañamiento familiar motive y promueva el ejercicio autónomo de las familias de manera permanente, este ejercicio es una posibilidad de acción dentro de la intervención, dado que de lo que se trata es que las familias fortalezcan su capacidad de agencia entre otras capacidades y el ejercicio autónomo y autoreflexivo son acciones que posibilitarán este empoderamiento.          
          div(titulo="Siguiente visita") En la siguiente visita, el momento de desarrollo se sugiere iniciar con una reflexión sobre el ejercicio autónomo propuesto en la sesión anterior, el cual pudo quedar registrado por la familia en el Plan Familiar, motivando a los integrantes de la familia a expresar cómo se sintieron con el ejercicio y lo que les permitió descubrir o redescubrir como familia.
          div(titulo="Cierre y reflexión final") La reflexión final debe partir de lo expresado por los participantes durante la sesión, retomando las inquietudes, sensaciones y emociones que suscitaron malestar o bienestar, las preocupaciones, consensos, disensos, entre otros.          

    p(data-aos="fade-down") El reto del profesional de acompañamiento es mantener durante la VD y durante todo el proceso un ambiente participativo, respetuoso de la diversidad, con equilibrio de poderes, que facilite reflexión e introspección y aporte al fortalecimiento de capacidades individuales, a la generación de dinámicas de trabajo colaborativo y a la incorporación de comprensiones y prácticas familiares inclusivas y garantista de derechos para sus integrantes. Se recomienda apoyar el desarrollo de las visitas con el uso de preguntas generativas y reflexivas, las cuales posibilitan la construcción de narrativas de cambio y de movilización en las familias. 

    .row.my-4(data-aos="zoom-in-right")      
      .col-auto
        .bg5.p-2.px-3
          h4.mb-0 Desarrollo del acompañamiento no presencial  

    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-down") 
      .col-lg-7.my-3
        p(data-aos="fade-down") El lineamiento técnico de la modalidad Mi familia contempla el acompañamiento no presencial como una de sus formas de intervención. Esta forma de intervención permite desarrollar el acompañamiento psicosocial familiar 

        .bloque-texto-d.color-secundario.p-3.mb-4(data-aos="fade-down")
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p “a través de llamadas o videollamadas, complementadas con el envío de información y recursos a las familias a través de mensajes de texto, WhatsApp, correo electrónico, entre otros” 
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 (ICBF, 2022).

        p(data-aos="fade-down") El desarrollo no presencial es una alternativa para los momentos o los territorios donde estén vigentes medidas de aislamiento en respuesta a emergencias sanitarias o cuando se presenten situaciones que limiten o imposibiliten el contacto presencial con las familias. La sustitución total o parcial de las visitas en domicilio por acompañamiento no presencial debe ser justificado por el operador y aprobado por la supervisión del contrato.  

        .bg8.p-4
          p(data-aos="fade-down").mb-0 El acompañamiento y las temáticas acordadas con las familias deben ser abordadas a través de protocolos que permitan su desarrollo de manera no presencial. Tales protocolos deben aprovechar los recursos ya desarrollados en las metodologías propuestas por Mi Familia, en especial las infografías y las actividades sugeridas. Los materiales metodológicos de la modalidad constituyen el apoyo de referencia para llevar a cabo dicho acompañamiento.                      
      .col-lg-5.my-3  
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/19.png', alt='')      
          
    p(data-aos="fade-down") Posterior a la realización de la visita, el PAF debe diligenciar los formatos e instrumentos incluidos en el esquema de monitoreo y seguimiento de la modalidad y puestos a disposición del operador por parte de la Dirección de Familias y Comunidades del ICBF.

</template>

<script>
export default {
  name: 'Tema2',
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

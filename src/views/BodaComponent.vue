<template>
  <div style="display: contents;" v-if="templ === 'template1'">
  <!-- Header / Home-->
  <header class="w3-display-container w3-wide bgimg w3-grayscale-min" id="home">
  <div class="w3-display-middle w3-text-white w3-center">
      <h1 class="w3-jumbo">{{novia}} &amp; {{novio}}</h1>
      <h2>{{texto}}</h2>
      <h2><b>{{fecha}}</b></h2>
  </div>
  </header>
  <!-- Navbar (sticky bottom) -->
  <div class="w3-bottom w3-hide-small">
      <div class="w3-bar w3-white w3-center w3-padding w3-opacity-min w3-hover-opacity-off">
          <a href="#home" style="width:25%" class="w3-bar-item w3-button">Inicio</a>
          <a href="#us" style="width:25%" class="w3-bar-item w3-button">{{novia}} &amp; {{novio}}</a>
          <a href="#wedding" style="width:25%" class="w3-bar-item w3-button">Boda</a>
          <a href="#rsvp" style="width:25%" class="w3-bar-item w3-button w3-hover-black">Reserva</a>
      </div>
  </div>
<!-- About / Jane And John -->
<div class="w3-container w3-padding-64 w3-pale-red w3-grayscale-min" id="us">
<div class="w3-content">
  <h1 class="w3-center w3-text-grey"><b>{{novia}} &amp; {{novio}}</b></h1>
  <img class="w3-round w3-grayscale-min" src="@/assets/img/wedding_couple2.jpg" style="width:100%;margin:32px 0">
  <p><i>You all know us. And we all know you. We are getting married lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat.</i>
  </p><br>
  <p class="w3-center"><a href="#wedding" class="w3-button w3-black w3-round w3-padding-large w3-large">Wedding Details</a></p>
</div>
</div>

<!-- Background photo -->
<div class="w3-display-container bgimg2">
<div class="w3-display-middle w3-text-white w3-center">
  <h1 class="w3-jumbo">Estas Invitado</h1><br>
  <h2>Su presencia y compañía siempre será nuestro mejor regalo. Sin embargo, si desean obsequiarnos algo más, pueden hacerlo de manera monetaria.</h2>
</div>
</div>

<!-- Wedding information -->
<div class="w3-container w3-padding-64 w3-pale-red w3-grayscale-min w3-center" id="wedding">
<div class="w3-content">
  <h1 class="w3-text-grey"><b>LA BODA</b></h1>
  <img class="w3-round-large w3-grayscale-min" src="@/assets/img/wedding_location.jpg" style="width:100%;margin:64px 0">
  <div class="w3-row">
    <div class="w3-half">
      <h2>Cuando</h2>
      <p>Ceremonia - 2:00pm</p>
      <p>Recepcion &amp; Cena - 5:00pm</p>
    </div>
    <div class="w3-half">
      <h2>Donde</h2>
      <p>{{direccion}}</p>
      <a href="https://maps.app.goo.gl/wmi7rnbxwmCYpzzL8">Ubicacion</a>
    </div>
  </div>
</div>
</div>

<!-- RSVP section -->
<div class="w3-container w3-padding-64 w3-pale-red w3-center w3-wide" id="rsvp">
<h1>Esperamos nos puedas acompañar!</h1>
<p class="w3-large">Por favor responde antes de Agosto, 2024</p>
<p class="w3-xlarge">
  <button onclick="document.getElementById('id01').style.display='block'" class="w3-button w3-round w3-red w3-opacity w3-hover-opacity-off" style="padding:8px 60px">RSVP</button>
</p>
</div>

<!-- RSVP modal -->
<div id="id01" class="w3-modal" style="display: none;">
<div class="w3-modal-content w3-card-4 w3-animate-zoom" style="padding:32px;max-width:600px">
  <div class="w3-container w3-white w3-center">
    <h1 class="w3-wide">CAN YOU COME?</h1>
    <p>We really hope you can make it.</p>
    <form>
      <input class="w3-input w3-border" type="text" placeholder="Name(s)" name="name">
    </form>
    <p><i>Sincerely, John &amp; Jane</i></p>
    <div class="w3-row">
      <div class="w3-half">
        <button onclick="document.getElementById('id01').style.display='none'" type="button" class="w3-button w3-block w3-green">Going</button>
      </div>
      <div class="w3-half">
        <button onclick="document.getElementById('id01').style.display='none'" type="button" class="w3-button w3-block w3-red">Can't come</button>
      </div>
    </div>
  </div>
</div>
</div>

<!-- Footer -->
<footer class="w3-center w3-black w3-padding-16">
<p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" class="w3-hover-text-green">w3.css</a></p>
</footer>
<div class="w3-hide-small" style="margin-bottom:32px">&nbsp;</div>        
</div>

<!--Template 2-->

  <div class="cssbody" style="display: contents;" v-else-if="templ === 'template2'">
    <!--
    <div class="w3-container w3-center">
    <h1>¡Bienvenido!</h1>
    <p>Esperando los datos de la boda...</p>
    </div>
  -->
    <header class="header">
      <h1 class="heading">
        {{novio}} & {{novia}}
        <span class="heading-subtext"> are getting married!</span>
      </h1>
    </header>
    <a data-scroll class="fixed-button" href="#rsvp" id="rsvpButton">RSVP</a> 
    <section class="section">
      <h2 class="sub-heading">Overview</h2>
      <p>Church wedding debt celebrate macarena embarrassing glitter  Will. Forever happy salad  cheers photobooth photographer limousine photobooth photographer limousine prime rib, guitar acoustic bass photobooth photographer limousine sparkles beautiful sparkles guitar acoustic bass beautiful. Cake dessert mother guitar acoustic bass cheers, uncle joe seat covers guitar acoustic bass macarena seat covers cake dessert embarrassing.
      </p>
    </section>
    <section class="section">
      <h2 class="sub-heading">The Details</h2>
      <div class="details">
        <i class="fas fa-calendar-check"></i>
        <h3 class="details-heading">When</h3>
        <p>January 1, 2020</p>
        <a title="Add to Calendar" rel="noopener" href="#" target="_blank">Add to Calendar</a>
      </div>
      <div class="details">
        <i class="fas fa-map-marked-alt"></i>
        <h3 class="details-heading">Location</h3>
        <p><a rel="noopener" href="#">Grand Venue Place</a>, City, State</p>
        <img class="resort-image" src="@/assets/img/resort.jpeg" alt="Resort" />
      </div>
      <div class="details">
        <i class="fas fa-suitcase"></i>
        <h3 class="details-heading">Lodging</h3>
        <p>DJ Jazzy Nupitals guitar acoustic bass embarrassing first aisle guitar acoustic bass cheers glitter . Macarena fish aisle aisle wedding, forever happy salad  drunk groomsman overpriced florist embarrassing coworkers tuxedo aisle guitar acoustic bass champagne bouquet. Ring wedding beautiful tuxedo fish toast, veil Bryna aisle centerpieces. Cheers embarrassing bouquet bouquet Bryna overpriced florist DJ Jazzy Nupitals Bryna macarena. DJ Jazzy Nupitals prime rib centerpieces centerpieces cake dessert, cake dessert tuxedo aisle seat covers aisle.</p>
        <p>Church Will chicken unity sparkles Bryna cake dessert, centerpieces aisle Will debt guitar acoustic bass glitter . Magic sparkles father bridesmaid  champagne bouquet wedding mother. Magic first dancing fish chicken champagne debt mother guitar acoustic bass.</p>
      </div>
      <div class="details">
        <i class="fas fa-plane-departure"></i>
        <h3 class="details-heading">Flights</h3>
        <p>Ring wedding beautiful tuxedo fish toast, veil Bryna aisle centerpieces. Cheers embarrassing bouquet bouquet Bryna overpriced florist DJ Jazzy Nupitals Bryna macarena.</p>
        <p>Magic sparkles father bridesmaid  champagne bouquet wedding mother. Magic first dancing fish chicken champagne debt mother guitar acoustic bass.</p>
      </div>
      <div class="details">
        <i class="fas fa-asterisk"></i>
        <h3 class="details-heading">Other Notes</h3>
        <p>Cake dessert mother guitar acoustic bass cheers, uncle joe seat covers guitar acoustic bass macarena seat covers cake dessert embarrassing.</p>
        <p>Also, your presence is the only present we desire. No gift required.</p>
      </div>
      <div class="details">
        <i class="fas fa-reply"></i>
        <h3 class="details-heading" id="rsvp">RSVP</h3>
        <p>[Embed your RSVP form here]</p>
        <!-- Include Embedded link of Google Form here in place of # -->
        <!-- <iframe title="RSVP" src="" style="width:100%;" height="960" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> -->
      </div>
    </section>
  </div>
</template>

<script>

import axios from 'axios';
export default {
  data() {
    return {
    novia: '',
    novio: '',
    texto: '',
    direccion: '',
    fecha: '',
    names:'',
    templ:null
    };
  },
  mounted() {     
  // Accediendo al parámetro 'names' de la ruta
  this.names = this.$route.params.names;
  console.log('Names:', this.names);
  this.fetchData();
  },
  components:{

  },
  methods: {
    async fetchData() {
    try {
      console.log(`https://mywedding-backend.onrender.com/boda/${this.names}`);
      const response = await axios.get(`https://mywedding-backend.onrender.com/boda/${this.names}`); 
    //  const data = response.data;
      const data = response;
      this.novio = data.data.nombreNovio;
      this.novia = data.data.nombreNovia;
      this.texto = data.texto;
      this.direccion = data.direccion;
      this.fecha = data.fecha;
      this.templ = data.data.template;
      console.log(this.templ);

      //console.log(data.novio);
      console.log('Data:', data.data);
      
      /*
      if (data.template === 'template1') {
          this.template = 1;  
        } else {
          this.template = 2;
        }
        */
      } catch (error) {
        if (error.response.status === 404) {
          this.$router.push({ name: 'error404' }); 
        } else {
          console.error('Error:', error);
        }
      }
    }
  }
};
</script>

<style>
  body,h1,h2{font-family: "Raleway", sans-serif}
  body, html {height: 100%}
  p {line-height: 2}
  .bgimg, .bgimg2 {
  min-height: 100%;
  background-position: center;
  background-size: cover;
  }
  .bgimg {background-image: url("@/assets/img/wedding_couple.jpg")}
  .bgimg2 {background-image: url("@/assets/img/flowers.jpg")}


/*Template Dos*/
*, *:before, *:after {
    box-sizing: unset !important;
}
*{
    font-family: 'Quicksand', sans-serif;
    font-size: 16px;
    color: #222;
}
.cssbody{
    margin: 0;
    height: 100vh;
    text-align: center;
}
.header{
    background-image: url("@/assets/img/hero.jpeg");
    background-repeat: no-repeat;
    background-position: 50% 60%;
    background-attachment: scroll;
    background-size: cover;
    height: 40vh;
    margin: 0;
    padding-top: 60vh;
}
.heading {
    color: #ffffff;
    display: block;
    font-family: 'Caveat', cursive;
    font-size: 6em;
    font-weight: normal;
    text-shadow: 0 0 10px #000;
}
.heading-subtext{
    color: #fff;
    display: block;
    font-family: 'Caveat', cursive;
    font-size: .6em;
}
.fixed-button{
    background: rgba(20,20,20,.5);
    border-radius: 1em;
    bottom: 1em;
    color: white;
    font-weight: bold;
    padding: 1em;
    position: fixed;
    right: 1em;
    text-decoration: none;
    z-index: 9999;
}
.fixed-button::after{
    content: "\25BE";
    display: block;
    font-size: 28px;
    line-height: 0;
    margin-bottom: 6px;
    margin-top: 10px;
    text-align: center;
}
.fixed-button:active,
.fixed-button:hover{
    background: rgba(20,20,20,.9);
}
.section{
    margin: 0 auto;
    max-width: 600px;
    padding: 1em 2.4em;
}
.sub-heading{
    font-family: 'Caveat', cursive;
    font-size: 3em;
    margin-top: 2em;
}
.details{
    margin: 0 auto 8em;
}
.details-heading{
    font-weight: bold;
    text-transform: uppercase;
}
.fas {
    font-size: 3em;
    opacity: .8;
}
.resort-image{
    width: 100%
}

@media only screen and (max-width: 600px) {
    .heading {
        font-size: 4em;
    }
  }
/*Template Dos*/
</style>
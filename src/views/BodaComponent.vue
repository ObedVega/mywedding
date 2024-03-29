<template>

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
      //  names:''
        };
    },
    mounted() {
          this.fetchData();
    // Accediendo al parámetro 'names' de la ruta
    const names = this.$route.params.names;
  //  const [novia, novio] = names.split('y');
  //  this.novia = novia.trim();
  //  this.novio = novio.trim();
    console.log('Names:', names);
  //  console.log('Novio:', this.novio);
    },
    methods: {
    async fetchData() {
      try {
        const response = await axios.get(`https://mywedding-backend.onrender.com/boda/${names}`); 
      //  const data = response.data;
        const data = response;
       // this.novio = data.novio;
       // this.novia = data.novia;
       // this.texto = data.texto;
       // this.direccion = data.direccion;
       // this.fecha = data.fecha;
        this.novio = 'David';
        this.novia = 'Ana';
        this.texto = 'Estan por casarse';
        this.direccion = 'Blvrd Federico Benítez López 12429, Fraccionamiento, 22104 Tijuana, B.C.';
        this.fecha = '17.07.2017';


       console.log('Data:', data);
      } catch (error) {
        console.error('Error fetching data:', error);
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

</style>
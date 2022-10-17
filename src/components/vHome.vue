<template>

<div class="container-fluid">
  <div class="row">
    <div class="col"><vNavbar /></div>
  </div>
  <!-- separator line
  <hr class="bg-danger border-2 border-top border-dark"> -->

  <div class="row">
    <div class="col-2"><vSidebar /></div>
    <div class="col-9"><vMain /></div>
  </div>
</div>

<div class="container-fluid fixed-bottom">
  <vFooter />
</div>



</template>
<script>
import "bootstrap/dist/css/bootstrap.min.css";

  import vNavbar from './vNavbar.vue'
  import vSidebar from './vSidebar.vue'
  import vMain from './vMain.vue'
  import vFooter from './vFooter.vue'

  export default {

    components: {
    vNavbar, vSidebar, vMain, vFooter
},

    // mounted(){
    //   //toggle sidebar
    //   $("#menu-toggle").click(function(e) {
    //     e.preventDefault();
    //     $("#wrapper").toggleClass("toggled");
    //   });
    // },
    
  }

  
  </script>

  <style>
/* hr {
  margin: 0.2rem 0;
  color: inherit;
  background-color: currentColor;
  border: 0;
  opacity: 0.25;
} */
</style>
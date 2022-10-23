<template>
<div class="container-fluid shadow p-1 mb-3 bg-body rounded">
  <!-- <div class="container-fluid shadow p-1 mb-3 bg-dark rounded"> -->
    <nav class="navbar navbar-expand-lg navbar-light">

    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <div> Balance: {{ssBalance}}
      </div>
      <ul class="navbar-nav ms-md-auto gap-2">

        <li>
            <button class="btn btn-outline-secondary" type="button">Home</button>
        </li>
        <li>
            <button class="btn btn-outline-secondary" type="button">About</button>
        </li>
        <li>
            <button class="btn btn-outline-secondary" type="button">Contact</button>
        </li>
        <li>
            <div class="btn-group" role="group">
    <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Profile
    </button>
    <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
      <li><a class="dropdown-item" href="#">Setting</a></li>
      <li><a class="dropdown-item" href="#">Logout</a></li>
    </ul>
  </div>
        </li>
        <li>
           
        </li>
      </ul>
    </div>

</nav>
</div>    
</template>

<script>

export default {
    name: "vNavbar",

    computed: {
      userInfo (){
                return sessionStorage.getItem('userInfo')
            },
      ssBalance () {
        return sessionStorage.getItem('ssBalance')
      }
        }
}




// sessionStorage.getItem('userInfo');
// console.log('userInfo')
</script>

<style>

.navbar-brand {
  background-image: url("../assets/Plogo.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 48px;
  height: 48px;
  /* logo position */
  padding: 48px; 

}

.navbar-nav .nav-item:hover {
  background-color: rgba(180, 190, 203, 0.4);
}
</style>
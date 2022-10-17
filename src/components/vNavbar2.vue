<template>
    <!-- <div class="container-fluid ">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
    
        <a class="navbar-brand" href="#"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
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
    </div>     -->
    <nav class="navbar navbar-dark sticky-top flex-md-nowrap p-0">
        <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company name</a>
        <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
        <ul class="navbar-nav px-3">
            <li class="nav-item text-nowrap">
                <a class="nav-link" href="#">Sign out</a>
            </li>
        </ul>
    </nav>
    </template>
    
    <script>
    
    export default {
        name: "vNavbar"
    }
    
    </script>
    
    <style>
    
    .navbar-brand {
      background-image: url("../assets/Plogo.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      width: 48px;
      height: 48px;
    }
    
    .navbar-nav .nav-item:hover {
      background-color: rgba(180, 190, 203, 0.4);
    }
    </style>
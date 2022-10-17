<template>


    <div class="sidebar-heading fw-bold bg-light text-center h5">DASHBOARD</div>
        <div class="container bg-dark">
       <div class="row">
          <div class="col-md-12 bg-light">
    
             <button type="button" class="btn btn-labeled btn-success">
             <span class="btn-label"><i class="bi bi-collection"></i></span>Collection</button>
             <button type="button" class="btn btn-labeled btn-danger">
             <span class="btn-label"><i class="bi bi-collection-fill"></i></span>Withdraw</button>
             <button type="button" class="btn btn-labeled btn-warning">
             <span class="btn-label"><i class="bi bi-collection-fill"></i></span>Terms</button>
             <button type="button" class="btn btn-labeled btn-primary">
             <span class="btn-label"><i class="bi bi-collection-fill"></i></span>Policy</button>
             <button type="button" class="btn btn-labeled btn-default">
             <span class="btn-label"><i class="bi bi-collection-fill"></i></span>Support</button>
             
          </div>
       </div>
    </div>
        </template>
    
    <script>
    export default {
        name: 'vSidebar'
    }
    </script>
    
    <style>
    /* .sidebar-nav {
      background-color: rgba(180, 190, 203, 0.4);
    } */
    
    
    .btn-label {
        position: relative;
        left: -12px;
        display: inline-block;
        padding: 6px 12px;
        /* background: rgba(0, 0, 0, 0.15); */
        border-radius: 3px 0 0 3px;
    
    }
    
    .btn-labeled {
        padding-top: 0;
        padding-bottom: 0;
    }
    
    .btn {
        margin-bottom: 10px;
      width: 100%;
    }
    
    
    </style>
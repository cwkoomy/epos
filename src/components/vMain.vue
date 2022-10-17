<template>
  
  <table class="table table-striped shadow p-1 mb-3 bg-body rounded">
  <thead>
    <tr>
      <th scope="col"># ID</th>
      <th scope="col">Merchant Name</th>
      <th scope="col">Amount</th>
      <th scope="col">Transaction ID</th>
      <th scope="col">Date/Time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>1500 epos</td>
      <td>25638452</td>
      <td>09-07-2022 18:53:30</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>2000 epos</td>
      <td>68954266</td>
      <td>07-07-2022 17:33:39</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry the Bird</td>
      <td>950 epos</td>
      <td>58954637</td>
      <td>05-07-2022 14:13:54</td>
    </tr>
  </tbody>
</table>
  </template>
  
  <script>
  
  import "bootstrap/dist/css/bootstrap.min.css";
  import axios from 'axios';
  
      export default {
        name: 'vMain',
  
      methods: {
        SubmitLogin () {
         var vLoginID = document.getElementById("floatingLoginID").value;
         var vLoginPassword = document.getElementById("floatingLoginPassword").value;
      axios
        .get('http://118.107.242.54:8018/wsMerchant/Service1.asmx/Login', {
          headers: {
                'Content-Type': 'application/json',
              },
          params: {
            LoginID: vLoginID,
            LoginPassword: vLoginPassword
          },
        })
        .then((res) => {
          if (res.data.RECORDS[0].ReturnCode === '1') {
                sessionStorage.setItem(
                  'userInfo',
                  JSON.stringify(res.data.Merchant)
                )
                console.log(res)
                console.log('Success');
                this.$router.push('/')
              } else {
                  console.log('Error');
                  this.$router.push('/Login')
              }
          })
    },
  
        //user login button click event
        user_login()
        {
          this.userlogin = true,
          this.userregister = false
        },
        //user register button click event
         user_register()
        {
          this.userlogin = false,
          this.userregister = true
        }
      },
        data: function() {
    return {
      userlogin:true,
      userregister:false
    }
  
  }  
  }
  
  </script>
  
  <style>
  
  body, html {
    height: 100%;
  }
  
  .bg { 
    /* The image used */
    background-image: url("../assets/eposbg.jpg");
  
    /* Full height */
    height: 100%; 
  
    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  
        .card-header:first-child {
    border-radius: calc(1rem - 1px) calc(1rem - 1px) 0 0;
  }
  .card-header {
    position: relative;
    padding: 2rem 2rem;
    border-bottom: none;
    background-color: white;
    box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%);
    z-index: 2;
  }
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: none;
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
    border-radius: 1rem;
  }
  .bg-gray-100 {
    background-color: #f8f9fa !important;
  }
  body{
    font-family: 'Poppins'!important;
  }
  .text-primary {
    color: #4650dd !important;
  }
  h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6 {
   
    font-weight: 700;
    line-height: 1.2;
  }
  .text-muted {
    color: #6c757d !important;
  }
  .lead {
    font-size: 1.125rem;
    font-weight: 300;
  }
  .text-sm {
    font-size: .7875rem !important;
  }
  h3, .h3 {
    font-size: 1.575rem;
  }
  .page-holder {
    display: flex;
    overflow-x: hidden;
    width: 100%;
    min-height: calc(100vh - 72px);
   
    flex-wrap: wrap;
  }
  a {
    color: #4650dd!important;
    text-decoration: underline!important;
    cursor: pointer;
  }
  
  </style>
<template>
  
  <div class="page-holder bg align-items-center py-4 bg-gray-100 vh-100">
      <div class="container">
          <!-- logo -->
        <div class="row align-items-center">
          <div class="col-lg-6 px-lg-4 col-xl-5 text-center text-primary"><img class="img-fluid mb-4" width="300" src="../assets/Plogo.png" alt="" style="transform: rotate(10deg)">
            <h1 class="mb-4">Ergopos.io <br class="d-none d-lg-inline">Bring Business to ERGO</h1>
            <p class="lead text-muted">Payment solution, a hardware POS terminal with software where combine the blockchain and real business world.</p>
          </div>
          <!-- login -->
          <div class=" col-lg-6 px-lg-4 ms-xl-auto"  v-if="userlogin">
            <div class="card">
              <div class="card-header px-lg-5">
                <div class="card-heading text-primary">ErgoPOS Login</div>
              </div>
              <div class="card-body p-lg-5">
                <h3 class="mb-4">Hi, welcome back!</h3>
                <p class="text-muted text-sm mb-5">ErgoPOS admin dashboard login.</p>
                <form id="loginForm" action="index.html">
                  <div class="form-floating mb-3">
                    <input class="form-control" id="floatingLoginID" type="text" placeholder="Login ID" required>
                    <label for="floatingLoginID">Login ID</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input class="form-control" id="floatingLoginPassword" type="password" placeholder="Password" required>
                    <label for="floatingLoginPassword">Password</label>
                  </div>
                  <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" name="remember" id="remember">
                    <label class="form-check-label" for="remember">Remember me</label>
                  </div>
                  <button class="btn btn-primary" type="button" @click="SubmitLogin()">Submit</button>
                </form>
              </div>
              <div class="card-footer px-lg-5 py-lg-4">
                <div class="text-sm text-muted">Don't have an account? <a @click="user_register()">Register</a>.</div>
              </div>
            </div>
          </div>
          <!-- register -->
           <div class="col-lg-6 px-lg-4" v-if="userregister">
            <div class="card">
              <div class="card-header px-lg-5">
                <div class="card-heading text-primary">ErgoPOS Register</div>
              </div>
              <div class="card-body p-lg-5">
                <h3 class="mb-4">Get started with ErgoPOS</h3>
                <p class="text-muted text-sm mb-5">...</p>
                <form action="index.html">
                  <div class="form-floating mb-3">
                    <input class="form-control" id="floatingRegLoginID" type="email" placeholder="name@example.com" required>
                    <label for="floatingRegLoginID">User ID</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input class="form-control" id="floatingRegEmail" type="email" placeholder="name@example.com" required>
                    <label for="floatingRegEmail">Email address</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input class="form-control" id="floatingRegPassword" type="password" placeholder="Password" required>
                    <label for="floatingRegPassword">Password</label>
                  </div>
                  <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" name="agree" id="agree">
                    <label class="form-check-label" for="agree">I agree with the <a href="#">Terms & Conditions</a>.</label>
                  </div>
                  <div class="form-group">
                    <button class="btn btn-primary" id="regidter" type="button" name="registerSubmit">Register</button>
                  </div>
                </form>
              </div>
              <div class="card-footer px-lg-5 py-lg-4">
                <div class="text-sm text-muted">Already have an account? <a @click="user_login()">Login</a>.</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div> 

</template>

<script>

import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

    export default {
      name: 'vLogin',

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
              sessionStorage.setItem(
                'ssBalance',
                JSON.stringify(res.data.Merchant[0].EPOSBalance)
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
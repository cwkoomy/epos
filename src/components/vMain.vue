<template>
<div class="container-fluid">
    <h4>Select Transaction Date</h4>
    <div class="row">
        <div class="col-lg-3 col-sm-6">
            <label for="startDate">Start</label>
            <input id="startDate" class="form-control" type="date" value ="2022-01-01"/>
            <span id="startDateSelected"></span>
        </div>
        <div class="col-lg-3 col-sm-6">
            <label for="endDate">End</label>
            <input id="endDate" class="form-control" type="date" value ="2022-10-23"/>
            <span id="endDateSelected"></span>
        </div>
        <div class="col-lg-3 col-sm-6">
            <br>
            <button type="button" class="btn btn-primary" @click="DateSearch()">Search</button>
        </div>
    </div>
</div>
<hr class="bg-danger border-2 border-top border-dark">

  <table class="table table-striped shadow p-1 mb-3 bg-body rounded">
  <thead>
    <tr>
      <th scope="col"># ID</th>
      <th scope="col">Merchant ID</th>
      <th scope="col">Trx Amount</th>
      <th scope="col">Trx Category</th>
      <th scope="col">Date/Time</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="dtdetail of dtdetails" :key="dtdetail.ID">
      <!-- <th scope="row" >1</th> -->
      <th scope="row" >{{dtdetail.ID}}</th>
      <td>{{dtdetail.MerchantID}}</td>
      <td>{{dtdetail.TxAmount +'.00'}}</td>
      <td>{{dtdetail.TxCategory}}</td>
      <td>{{dtdetail.CreatedDateTime}}</td>
    </tr>
    <!-- <tr>
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
    </tr> -->
  </tbody>
</table>
  </template>
  
  <script>

  import axios from 'axios';
  
  export default {
      name: 'vDatePicker',

      data() {
        return {
          dtdetails:[]
        };
      },
  
      mounted() {
        this.DateSearch();
      },

      methods: {
          DateSearch () {
         var vstartDateSelected = document.getElementById("startDate").value;
         var vendDateSelected = document.getElementById("endDate").value;
      //    console.log(vendDateSelected) datepicker format 2022-10-23, api format 10-23-2022
      axios
        .get('http://118.107.242.54:8018/wsMerchant/Service1.asmx/TxMaster', {
          headers: {
                'Content-Type': 'application/json',
              },
          params: {
              DateFrom: vstartDateSelected,
              DateTo: vendDateSelected
          },
        })
        .then((res) => {
          if (res.data.RECORDS[0].ReturnCode === '1') {

                console.log(res)
                this.dtdetails = res.data.TxMaster;

                console.log('Success');
              } else {
                  console.log('Error');
              }
          })
    },
      },

  }
  
  
  </script>
  
  <style>

  </style>
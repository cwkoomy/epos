<template>
<div class="container-fluid">
    <h4>Select Transaction Date</h4>
    <div class="row">
        <div class="col-lg-3 col-sm-6">
            <label for="startDate">Start</label>
            <input id="startDate" class="form-control" type="date" />
            <span id="startDateSelected"></span>
        </div>
        <div class="col-lg-3 col-sm-6">
            <label for="endDate">End</label>
            <input id="endDate" class="form-control" type="date" />
            <span id="endDateSelected"></span>
        </div>
        <div class="col-lg-3 col-sm-6">
            <br>
            <button type="button" class="btn btn-primary" @click="DateSearch()">Search</button>
        </div>
    </div>
</div>
<hr class="bg-danger border-2 border-top border-dark">
  </template>

  <script>

import axios from 'axios';

export default {


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
              sessionStorage.setItem(
                'ssTxMaster',
                JSON.stringify(res.data.TxMaster)
              )
              console.log(res)
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
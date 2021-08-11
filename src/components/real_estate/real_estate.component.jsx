import React from 'react';

import realEstateModule from './real_estate.module.css'; 

import axios from "axios";

const options = {
  method: "GET",
  url: "https://zillow-com1.p.rapidapi.com/property",
  params: { zpid: "2080998890" },
  headers: {
    "x-rapidapi-key": "b519a2b20amsh014be75ec062cdap1aaac1jsn918f03506c38",
    "x-rapidapi-host": "zillow-com1.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });



const RealEstate = () => (
  <div className={realEstateModule.real_estate}>
    <h1>Real Estates</h1>
    <p>Location is very important in real estate investments. From personal experience, I believe
    that New York real estate is uniquely strong due to its population density among other 
    factors. Maryland, on the other hand, offers better bargain per square foot of real estate.</p>
  </div>
);

export default RealEstate; 

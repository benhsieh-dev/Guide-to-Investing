import React, {useEffect, useState} from 'react';

import './real_estate.css'; 

// fetch(
//   "https://real-estate-usa.p.rapidapi.com/api/v1/properties?postal_code=94105&offset=0&limit=200",
//   {
//     method: "GET",
//     headers: {
//       "x-rapidapi-key": "b519a2b20amsh014be75ec062cdap1aaac1jsn918f03506c38",
//       "x-rapidapi-host": "real-estate-usa.p.rapidapi.com",
//     },
//   }
// )
//   .then(response => response.json())
//   .then((response) => {
//     console.log(response);
//     console.log(response.properties);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

import axios from "axios";

const options = {
  method: "GET",
  url: "https://real-estate-usa.p.rapidapi.com/api/v1/schools",
  params: { lat: "35.129431", lon: "-117.937021" },
  headers: {
    "x-rapidapi-key": "b519a2b20amsh014be75ec062cdap1aaac1jsn918f03506c38",
    "x-rapidapi-host": "real-estate-usa.p.rapidapi.com",
  },
};

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

export default () => {

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // fetch(
    //   "https://real-estate-usa.p.rapidapi.com/api/v1/properties?postal_code=94105&offset=0&limit=200",
    //   {
    //     method: "GET",
    //     headers: {
    //       "x-rapidapi-key":
    //         "b519a2b20amsh014be75ec062cdap1aaac1jsn918f03506c38",
    //       "x-rapidapi-host": "real-estate-usa.p.rapidapi.com",
    //     },
    //   }
    // )
    //   .then((response) => response.json())
    //   .then((response) => {
    //     console.log(response);
    //     console.log(response.properties);
    //   })
    //   .then(response => setProperties(response.properties))
    //   .catch((err) => {
    //     console.error(err);
    //   });
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .then((response) => setProperties(response.data.schools))
      .catch(function (error) {
        console.error(error);
      });
  }, [])

  return (
  <div className="real_estate">
    <h1>Real Estates</h1>
    <p>Location is very important in real estate investments. From personal experience, I believe
    that New York real estate is uniquely strong due to its population density among other 
    factors. Maryland, on the other hand, offers better bargain per square foot of real estate.</p>
    {properties}
  </div>
  )
}



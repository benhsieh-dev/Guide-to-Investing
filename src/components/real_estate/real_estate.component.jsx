// import React, {useEffect, useState} from 'react';
// import React, {useEffect} from "react";
import React from "react";

import './real_estate.css'; 

// real estate api
// import axios from "axios";

// const options = {
//   method: "GET",
//   url: "https://real-estate12.p.rapidapi.com/listings/sale",
//   params: {
//     state: "CA",
//     city: "Los Angeles",
//     page: "1",
//     sort: "relevant",
//     type: "single-family,multi-family",
//   },
//   headers: {
//     "x-rapidapi-key": `${process.env.REACT_APP_REAL_ESTATE_KEY}`,
//     "x-rapidapi-host": "real-estate12.p.rapidapi.com",
//   },
// };

export default () => {
  // const [properties, setProperties] = useState([]);

  // useEffect(() => {
  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       console.log(response.data);
  //       // console.log(response.data.properties);
  //       setProperties(response.data.properties);
  //       // console.log(`these are the ${properties}`);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // }, [])

  return (
    <div className="real_estate">
      <h1>Real Estates</h1>
      <p>
        Location is very important in real estate investments. From personal
        experience, I believe that New York real estate is uniquely strong due
        to its population density among other factors. Maryland, on the other
        hand, offers better bargain per square foot of real estate.
      </p>
      <div>
     {/*   <ul>
          {properties.map((property, idx) => (
            <div key={idx}>
              <li>{property.permalink}</li>
            </div>
          ))}
          </ul> */}
      </div>
    </div>
  );
}


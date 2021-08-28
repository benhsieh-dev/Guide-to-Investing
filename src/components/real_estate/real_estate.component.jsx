import React, {useEffect, useState} from 'react';
// import React, {useEffect} from "react";
// import React from "react";

import './real_estate.css'; 


// import axios from "axios";


// real estate api
import axios from "axios";

const options = {
  method: "GET",
  url: "https://real-estate12.p.rapidapi.com/listings/sale",
  params: {
    state: "CA",
    city: "Los Angeles",
    page: "1",
    sort: "relevant",
    type: "single-family,multi-family",
  },
  headers: {
    // "x-rapidapi-key": "b519a2b20amsh014be75ec062cdap1aaac1jsn918f03506c38",
    "x-rapidapi-key": `${process.env.REACT_APP_REAL_ESTATE_KEY}`,
    "x-rapidapi-host": "real-estate12.p.rapidapi.com",
  },
};

export default () => {
  const [properties, setProperties] = useState([]);
  // const options = {
  //   method: "GET",
  //   url: "https://real-estate-usa.p.rapidapi.com/api/v1/properties",
  //   params: { postal_code: "60611", offset: "0", limit: "200" },
  //   headers: {
  //     "x-rapidapi-key": "b519a2b20amsh014be75ec062cdap1aaac1jsn918f03506c38",
  //     "x-rapidapi-host": "real-estate-usa.p.rapidapi.com",
  //   },
  // };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.properties);
        setProperties(response.data.properties);
        // console.log(`these are the ${properties}`);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [])

  // useEffect(() => {
  //   axios
  //     .request(options)
  //     .then((response) => {
  //       console.log(response.data.properties);
  //       setProperties(response.data.properties);
  //       // console.log(`these are the ${properties}`);
  //     })
  //     .catch((error) => console.error(error)
  //     );
  // }, [options, properties]);

  // useEffect(() => {
  //   fetch(
  //     "https://real-estate-usa.p.rapidapi.com/api/v1/properties?postal_code=60611&offset=0&limit=200",
  //     {
  //       method: "GET",
    //     headers: {
    //       "x-rapidapi-key":
    //         // "b519a2b20amsh014be75ec062cdap1aaac1jsn918f03506c38",
    //       `${process.env.REACT_APP_REAL_ESTATE_USA_KEY}`,
    //       "x-rapidapi-host": "real-estate-usa.p.rapidapi.com",
    //     },
    //   }
    // )
      // .then(console.log(process.env))
  //     .then((response) => response.json())
  //     .then((response) => {
  //       // console.log(response);
  //       console.log(response.properties);
  //       setProperties(response.properties);
  //     })
  //     .catch((err) => {
  //       console.error(err);
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
        {/* <ul>
          {properties === undefined ? properties.map((property, idx) => (
            <div key={idx}>
              <li>{property.permalink}</li>
            </div>
          )) : <div></div>}
          </ul> */}
        <ul>
          {properties.map((property, idx) => (
            <div key={idx}>
              <li>{property.permalink}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}



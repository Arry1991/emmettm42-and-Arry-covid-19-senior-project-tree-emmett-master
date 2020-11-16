

import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { Table } from 'reactstrap';


import "./businessmain.css";

const BusinessMain = (props) => {
  const [businessData, setBusinessData] = useState({
    name: "Joes's Pizzeria",
    type: "Restaurant",
    email: "joe@joespizza.com",
    businessemail: "contact@joespizza.com",
    phone: "5167554688",
    address: "100 Pizza St",
    zip: "11501",
    description: "The best pizza are on this side of Pizza St",
  });

  var checkins = [
    {
      firstName: "Joe",
      lastName: "Jonas",
      email: "jobro@gmail.com",
      date: "11/1/2020",
      temp: "101.9",
    },
    {
      firstName: "Bob",
      lastName: "Roberts",
      email: "bobrob@yahoo.com",
      date: "11/1/2020",
      temp: "98.6",
    },
    {
      firstName: "Kathy",
      lastName: "Bates",
      email: "kb@hotmail.com",
      date: "11/1/2020",
      temp: "99.0",
    },
  ];

  return (

    // Arry made changes in here
    <div>
      <section>
      

        <h1>{businessData.name}</h1>
        <h2>{businessData.description}</h2>
        <h3>Recent Check-ins</h3>
        <div class={"t1"}>
          <Table bordered>
            <thead>
              <tr>
              <th>No.</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Date</th>
                <th>Temperature</th>
              </tr>
            </thead>

            <tbody>
              <tr>
              <th scope="row">1</th>
                <td>{checkins[0].firstName}</td>
                <td>{checkins[0].lastName}</td>
                <td>{checkins[0].email}</td>
                <td>{checkins[0].date}</td>
                <td>{checkins[0].temp}</td>
              </tr>

              <tr>
              <th scope="row">2</th>
                <td>{checkins[1].firstName}</td>
                <td>{checkins[1].lastName}</td>
                <td>{checkins[1].email}</td>
                <td>{checkins[1].date}</td>
                <td>{checkins[1].temp}</td>
              </tr>

              <tr>
              <th scope="row">3</th>
                <td>{checkins[2].firstName}</td>
                <td>{checkins[2].lastName}</td>
                <td>{checkins[2].email}</td>
                <td>{checkins[2].date}</td>
                <td>{checkins[2].temp}</td>
              </tr>

              <tr>
              <th scope="row">3</th>
                <td>{checkins[0].firstName}</td>
                <td>{checkins[0].lastName}</td>
                <td>{checkins[0].email}</td>
                <td>{checkins[0].date}</td>
                <td>{checkins[0].temp}</td>
              </tr>

              <tr>
              <th scope="row">4</th>
                <td>{checkins[1].firstName}</td>
                <td>{checkins[1].lastName}</td>
                <td>{checkins[1].email}</td>
                <td>{checkins[1].date}</td>
                <td>{checkins[1].temp}</td>
              </tr>

              <tr>
              <th scope="row">6</th>
                <td>{checkins[2].firstName}</td>
                <td>{checkins[2].lastName}</td>
                <td>{checkins[2].email}</td>
                <td>{checkins[2].date}</td>
                <td>{checkins[2].temp}</td>
              </tr>
            </tbody>
          </Table>
          
        </div>
        <aside>
        <Table bordered>
                    <thead>
                    <th><h1>Contact Us</h1></th>
                    </thead>
                    <dl>
                        <td><dt>Address</dt>
                        <dd>{businessData.address}</dd>
                        <dd>{businessData.zip}</dd></td>
                        <td><dt>Phone</dt>
                        <dd>{businessData.phone}</dd></td>
                        <td><dt>Contact Email</dt>
                        <dd>{businessData.email}</dd></td>
                        <td><dt>Owner Email</dt>
                        <dd>{businessData.businessemail}</dd></td>
                    </dl>
                    <Link to="/BusinessInfo">Edit Information</Link> 
                    </Table>
                     
        </aside>
      </section>
    </div>
  );
};

export default BusinessMain;

import React from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css



export default function ContactCard(props) {

  const handle = () => {
    alert('Contact deleted Successfully');
    props.clickHandler(id);
  };

  const submit = () => {
    confirmAlert({
      title: 'Confirm to Delete',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => handle()
        },
        {
          label: 'No',
          onClick: () => alert('Cancel Successfull')
        }
      ]
    });
  };

  // console.log(props);
  const { id, name, email } = props.contact;

  const dashboardData = {
    component: "Dashboard page",
    content: "Data is sent from profile component",
    timestamp: Date.now(),
  };
  return (
    <>
      {/* <div className="col-md-4 mb-3 mb-3">
        <img src={user} alt="User" className="ui avatar image" />
        <div className="content">
          <Link to={{ pathname: `contact/${id}`}} state={{data: props.contact}}>
            <div className="header">{name}</div>
            <div>{email}</div>
          </Link>
        </div>
        <i
          className="trash alternate outline icon red"
          onClick={submit}
        ></i>
      </div> */}
      <div className="card mb-3" style={{width: "18rem"}}>
        <img src={user} className="card-img-top mx-auto" alt="User" style={{width: "50%"}} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{email}</p>
          <Link to={{ pathname: `contact/${id}`}} state={{data: props.contact}} >
            <button type="button" className="btn btn-primary pull-right">Details</button>
          </Link>
        </div>
      </div>
    </>
  );
}

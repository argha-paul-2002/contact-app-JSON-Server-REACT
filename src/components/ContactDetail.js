import React from 'react'
import user from "../images/user.png"
import { Link, useLocation  } from 'react-router-dom';
import { useState } from "react";


export default function ContactDetail(props) {
    const location = useLocation();

    //local -- to access fetched Data from another
    const [value, setValue] = useState({id:'',name:'',email:''})

    //Fetch all the data
    React.useEffect(() => {
        // console.log(location.state.data);
        // const propsData = location.state;
        if(location.state){
            let _state = location.state.data
            //Set fetch data to local constant
            setValue(_state)
        }

    }, [location])
    
  return (
    <div className="container mx-auto">

        <div className="card mb-3 mx-auto" style={{width: "18rem"}}>
            <img src={user} className="card-img-top mx-auto" alt="User" style={{width: "50%"}} />
            <div className="card-body">
            <h5 className="card-title">{value.name}</h5>
            <p className="card-text">{value.email}</p>
            </div>
      </div>
        <div className="mx-auto container text-center" >
            <Link to="/">
                <button className="btn btn-primary pull-right">Back to contact List</button>
            </Link>
        </div>

    </div>
  );
}

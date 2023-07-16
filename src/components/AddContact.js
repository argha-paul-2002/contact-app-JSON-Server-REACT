import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

export class AddContact extends Component {
  state = {
    id: uuidv4(),
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are mandatory");
      return;
    }
    this.props.addContactHandler(this.state);
    alert("Contact Saved Successfully");
    this.setState({ name: "", email: "" });
    // console.log(this.props);
  };

  render() {
    return (
      <div>
        

        <form onSubmit={this.add}>
          <p className="h2 bold">Add Contact</p>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="first-name"
              placeholder="First Name"
              value={this.state.name}
              onChange={(e) => {
                this.setState({
                  name: e.target.value,
                  id: uuidv4(),
                });
              }}
            />
            
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputPassword1"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            
          </div>
          
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <div className="container text-center mt-4">
          <Link to="/">
            <button className="btn btn-primary">All Contacts</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default AddContact;

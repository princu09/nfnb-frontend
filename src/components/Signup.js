import React, { useState } from "react";
import { useHistory } from "react-router-dom";


const Signup = (props) => {

  const host = "http://localhost:3001";

  let history = useHistory();

  const [credentials, setCredentials] = useState({ name: "" , email: "", password: ""});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name , email , password} = credentials;
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name , email , password
      }),
    });
    const json = await response.json();
    if (json.success) {
      // redirect
      localStorage.setItem("token", json.authtoken);
      history.push("/");
      props.showAlert("Account Created Successfully" , "success");
    } else {
      props.showAlert("Invalid Details" , "danger");
    }
  };

  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container col-md-6 my-5">
        <h3 className="mb-4">Welcome to NFG</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              // value={credentials.email}
              onChange={onchange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              // value={credentials.email}
              onChange={onchange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              // value={credentials.password}
              onChange={onchange}
              minLength={5}
              required
            />
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;

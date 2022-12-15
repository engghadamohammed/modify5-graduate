import React, { useState, useRef, useEffect, useContext } from "react";
import AuthContext from "../../Contex/Authprovider";
import axios from "axios";
import "./Register.css";


import App2 from "../../../src/App2";

function Signin() {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  // const [select, setSelect] = useState("");
  const [errMes, setErrMes] = useState("");
  const [success, setSuccess] = useState("");
  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMes("");
  }, [name, mail, password, age, phone]);

  const handelsubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "localhost:3000/user/signUp",
        JSON.stringify({ name, mail, password, age, phone}),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ name, mail, password, age, phone,roles, accessToken });
      setName("");
      setMail("");
      setPassword("");
      setAge("");
      setPhone("");
      

      setSuccess(true);
    } catch (error) {
      if (!error?.response) {
        setErrMes("No service Response");
      } else if (error.response?.status === 400) {
        setErrMes("Try Agine");
      } else if (error.response?.status === 401) {
        setErrMes("Unauthorized");
      } else {
        setErrMes("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <App2 />
        </section>
      ) : (
        <section  >
          <div
            id="error"
            ref={errRef}
            className={errMes ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMes}
          </div>

          <div className="container ">
            <form className="login-form ">
              <div className="row">
                <div className="mb-3 col-lg-6">
                  <label htmlFor="exampleInputName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    autoComplete="off"
                    ref={userRef}
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="mb-3 col-lg-6">
                  <label htmlFor="exampleInputage" class="form-label">
                    Age
                  </label>
                  <input
                    type="numbre"
                    className="form-control"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-3 ">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  required
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="row">
                <div className="mb-3 col-lg-6">
                  <label htmlFor="exampleInputphone" class="form-label ">
                    Phone
                  </label>
                  <input
                    type="phone"
                    className="form-control"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                {/* <div className="mb-3 col-lg-6">
                  <label className="form-label  ">Level</label>
                  <select
                    className="form-select"
                    value={select}
                    onChange={(e) => setSelect(e.target.value)}
                  >
                    <option value="one">One</option>
                    <option value="two">Two</option>
                  </select>
                </div> */}
              </div>

              <div className="text-center">
                {" "}
                <button
                  type="submit"
                  onClick={handelsubmit}
                  className=" send  
            "
                >
                  Sand
                </button>
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
}

export default Signin;

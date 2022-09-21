import React, { Component } from "react";
import swal from "sweetalert";
import PatientServiceMethods from "../service/PatientServiceMethods";
import Base from "./Base";
import Footer from "./Footer";

class PatientSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      dob: "",
      gender: "",
      bloodGroup: "",
      mobileNumber: "",
      area: "",
      city: "",
      state: "",
      message: null,
    };
    this.signUp = this.signUp.bind(this);
  }

  validatePassword() {
    let password = document.getElementById("pwd").value;
    var regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{5,}$/;

    if (regexPassword.test(password) === true) {
      document.getElementById("passwordVr").innerHTML = "";
      return true;
    } else {
      document.getElementById("passwordVr").innerHTML =
        "password must be alphanumeric and should contains at least a special character with length 5";
    }
  }

  validateEmail() {
    let email = document.getElementById("email").value;

    var regexEmail = /\S+@\S+\.\S+/;
    if (regexEmail.test(email) === true) {
      document.getElementById("emailVr").innerHTML = "";
      return true;
    } else {
      document.getElementById("emailVr").innerHTML =
        "email format should be 'abc@gmail.com'";
    }
  }
  removeWarnings() {
    // document.getElementById("passwordVr").innerHTML = "";
    // document.getElementById("emailVr").innerHTML = "";
    // document.getElementById("mobileNumberVr").innerHTML = "";
    // document.getElementById("UnameVr").innerHTML = "";
    // document.getElementById("FNameVr").innerHTML = "";
    // document.getElementById("LNameVr").innerHTML = "";
  }

  validateMobileNumber() {
    let number = document.getElementById("mobileNumber").value;
    if (/^\d{10}$/.test(number)) {
      document.getElementById("mobileNumberVr").innerHTML = "";
    } else {
      document.getElementById("mobileNumberVr").innerHTML =
        "Phone number must be 10 digits.";

      return false;
    }
  }

  validateUname() {
    let Uname = document.getElementById("Username").value;

    if (Uname !== "") {
      document.getElementById("UnameVr").innerHTML = "";
      return true;
    } else {
      document.getElementById("UnameVr").innerHTML =
        "Username Can not be empty ";
    }
  }

  validateFname() {
    let Fname = document.getElementById("firstName").value;
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (Fname !== "") {
      if (format.test(Fname) == false) {
        document.getElementById("FNameVr").innerHTML = "";
        return true;
      } else {
        document.getElementById("FNameVr").innerHTML =
          "Firstname can not contain special Characters";
      }
    } else {
      document.getElementById("FNameVr").innerHTML =
        "Firstname Can not be empty";
    }
  }

  validateLname() {
    let Lname = document.getElementById("lastName").value;
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (Lname !== "") {
      if (format.test(Lname) == false) {
        document.getElementById("LNameVr").innerHTML = "";
        return true;
      } else {
        document.getElementById("LNameVr").innerHTML =
          "Lastname can not contain special Characters";
      }
    } else {
      document.getElementById("LNameVr").innerHTML =
        "Lastname Can not be empty";
    }
  }

  validateArea() {
    let Area = document.getElementById("area").value;

    if (Area !== "") {
      document.getElementById("AreaVr").innerHTML = "";
      return true;
    } else {
      document.getElementById("AreaVr").innerHTML = "Area Can not be empty";
    }
  }

  validateCity() {
    let Area = document.getElementById("city").value;

    if (Area !== "") {
      document.getElementById("CityVr").innerHTML = "";
      return true;
    } else {
      document.getElementById("CityVr").innerHTML = "Please enter your city";
    }
  }

  validateState() {
    let State = document.getElementById("state").value;

    if (State !== "") {
      document.getElementById("StateVr").innerHTML = "";
      return true;
    } else {
      document.getElementById("StateVr").innerHTML = "Please enter your State";
    }
  }

  signUp = (p) => {
    p.preventDefault();
    let patient = {
      username: this.state.username,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      dob: this.state.dob,
      gender: this.state.gender,
      bloodGroup: this.state.bloodGroup,
      mobileNumber: this.state.mobileNumber,
      area: this.state.area,
      city: this.state.city,
      state: this.state.state,
    };

    PatientServiceMethods.addPatient(patient)
      .then((res) => {
        console.log(res.data);
        this.setState({ message: "Welcome" + res.data.username });
        console.log(this.state.message);
        swal("success", this.state.message, "success");
        this.props.history.push("/");
      })
      .catch((error) => {
        console.error("in err ", error.response.data);
        swal("error", "Sorry empty fields are not allowed", "error");
      });
  };

  onChange = (p) => this.setState({ [p.target.name]: p.target.value });

  handleBloodGroupChange = (e) => {
    this.setState({ bloodGroup: e.target.value });
  };

  render() {
    return (
      <Base>
        <div
          className="container-fluid overflow-hidden mb-5 patientBack"
          style={{ minHeight: "100vh" }}
        >
          <div className="row my-3">
            <div className="col-sm-8">
              <h2 className="fw-bold offset-6">
                Please Fill Registration Form
              </h2>
            </div>

            <div className="col-sm-4">
              <button
                className="btn btn-danger text-uppercase offset-3"
                onClick={() => {
                  this.props.history.push("./");
                }}>
                Go Back
              </button>
            </div>
          </div>

          <div className="row justify-content-center">
            {" "}
            <form
              className="mb-5 shadow p-2 text-light col-8"
              style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
            >
              <div className="form-group row mt-3 justify-content-center">
                <label htmlFor="username" className="col-2 col-form-label">
                  Username
                </label>
                <div className="col-5">
                  <input
                    type="text"
                    id="Username"
                    className="form-control"
                    placeholder="Enter a unique username"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChange}
                    onBlur={this.validateUname}
                    onFocus={this.removeWarnings}
                    required
                  />
                  <span style={{ color: "red" }} id="UnameVr"></span>
                </div>
              </div>
              <div className="form-group row my-3 justify-content-center">
                <label htmlFor="firstName" className="col-2 col-form-label">
                  First Name
                </label>
                <div className="col-5">
                  <input
                    type="text"
                    id="firstName"
                    className="form-control"
                    placeholder="Enter your first name"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.onChange}
                    onBlur={this.validateFname}
                    onFocus={this.removeWarnings}
                    required
                  />
                  <span style={{ color: "red" }} id="FNameVr"></span>
                </div>
              </div>
              <div className="form-group row my-3 justify-content-center">
                <label htmlFor="lastName" className="col-2 col-form-label">
                  Last Name
                </label>
                <div className="col-5">
                  <input
                    type="text"
                    id="lastName"
                    className="form-control"
                    placeholder="Enter your last name"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.onChange}
                    onBlur={this.validateLname}
                    onFocus={this.removeWarnings}
                    required
                  />
                  <span style={{ color: "red" }} id="LNameVr"></span>
                </div>
              </div>
              <div className="form-group row my-3 justify-content-center">
                <label htmlFor="email" className="col-2 col-form-label">
                  Email
                </label>
                <div className="col-5">
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="e.g. abc@xyz.com"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    required
                    onFocus={this.removeWarnings}
                    onBlur={this.validateEmail}
                  />
                  <span style={{ color: "red" }} id="emailVr"></span>
                </div>
              </div>

              <div className="form-group row my-3 justify-content-center">
                <label htmlFor="dob" className="col-2 col-form-label">
                  Date of Birth
                </label>
                <div className="col-5">
                  <input
                    type="date"
                    id="dob"
                    className="form-control"
                    name="dob"
                    value={this.state.dob}
                    onChange={this.onChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group row my-3 justify-content-center">
                <label htmlFor="pwd" className="col-2 col-form-label">
                  Password
                </label>
                <div className="col-5">
                  <input
                    type="password"
                    id="pwd"
                    className="form-control"
                    placeholder="Enter Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    onBlur={this.validatePassword}
                    onFocus={this.removeWarnings}
                    required
                  />
                  <span style={{ color: "red" }} id="passwordVr"></span>
                </div>
              </div>
              <div className="form-group row my-3 justify-content-center">
                <label className="col-2 col-form-label">Gender</label>
                <div className="col-5 d-flex justify-content-between">
                  <div>
                    <input
                      type="radio"
                      id="gender"
                      name="gender"
                      value="MALE"
                      onChange={this.onChange}
                    />{" "}
                    Male
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="gender"
                      name="gender"
                      value="FEMALE"
                      onChange={this.onChange}
                    />{" "}
                    Female
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="gender"
                      name="gender"
                      value="OTHER"
                      onChange={this.onChange}
                    />{" "}
                    Other
                  </div>
                </div>
              </div>
              <div className="form-group row my-3 justify-content-center">
                <label className="col-2 col-form-label">Blood Group</label>
                <div className="col-5 d-flex justify-content-between">
                  <select
                    value={this.state.bloodGroup}
                    onChange={this.handleBloodGroupChange}
                    style={{ width: "7vw", height: "7vh" }}
                  >
                    <option value="" disabled>
                      --select--
                    </option>
                    <option value="A_POSITIVE">A+</option>
                    <option value="A_NEGATIVE">A-</option>
                    <option value="B_POSITIVE">B+</option>
                    <option value="B_NEGATIVE">B-</option>
                    <option value="O_POSITIVE">O+</option>
                    <option value="O_NEGATIVE">O-</option>
                    <option value="AB_POSITIVE">AB+</option>
                    <option value="AB_NEGATIVE">AB-</option>
                  </select>
                </div>
              </div>
              <div className="form-group row my-3 justify-content-center">
                <label htmlFor="mobileNumber" className="col-2 col-form-label">
                  Mobile
                </label>
                <div className="col-5">
                  <input
                    type="number"
                    id="mobileNumber"
                    className="form-control"
                    placeholder="Enter your mobile number"
                    name="mobileNumber"
                    value={this.state.mobileNumber}
                    onChange={this.onChange}
                    pattern="[0-9]{10}"
                    onBlur={this.validateMobileNumber}
                    onFocus={this.removeWarnings}
                    required
                  />
                  <span id="mobileNumberVr" style={{ color: "red" }}></span>
                </div>
              </div>

              <div className="form-group row mt-3 justify-content-center">
                <label htmlFor="area" className="col-2 col-form-label">
                  Area
                </label>
                <div className="col-5">
                  <input
                    type="text"
                    id="area"
                    className="form-control"
                    placeholder="Enter a Area"
                    name="area"
                    value={this.state.area}
                    onChange={this.onChange}
                    onBlur={this.validateArea}
                    required
                  />
                  <span id="AreaVr" style={{ color: "red" }}></span>
                </div>
              </div>

              <div className="form-group row mt-3 justify-content-center">
                <label htmlFor="city" className="col-2 col-form-label">
                  City
                </label>
                <div className="col-5">
                  <input
                    type="text"
                    id="city"
                    className="form-control"
                    placeholder="Enter a city "
                    name="city"
                    value={this.state.city}
                    onChange={this.onChange}
                    onBlur={this.validateCity}
                    required
                  />
                  <span id="CityVr" style={{ color: "red" }}></span>
                </div>
              </div>

              <div className="form-group row mt-3 justify-content-center">
                <label htmlFor="state" className="col-2 col-form-label">
                  State
                </label>
                <div className="col-5">
                  <input
                    type="text"
                    id="state"
                    className="form-control"
                    placeholder="Enter a state"
                    name="state"
                    value={this.state.state}
                    onChange={this.onChange}
                    onBlur={this.validateState}
                    required
                  />
                  <span id="StateVr" style={{ color: "red" }}></span>
                </div>
              </div>
              <div className="form-group row justify-content-center">
                <div className="offset-9">
                  <button
                    className="btn btn-lg btn-primary text-uppercase mt-3"
                    onClick={this.signUp}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Footer></Footer>
        </Base>
    );
  }
}

export default PatientSignUp;

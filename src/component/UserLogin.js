import React, { Component } from "react";
import UserLoginAPI from "../service/UserLoginAPI";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";
import Base from "./Base";
import Footer from "./Footer";

class UserLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            message: null,
        };

        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    login = (e) => {
        if (this.state.password == "" || this.state.email == "") {
            //alert("Password cannot be null");
            swal("error", "username or password can not be empty", "error");
            this.props.history.push("/userLogin");
            return false;
        }
        e.preventDefault();
        let user = {
            email: this.state.email,
            password: this.state.password,
        };

        UserLoginAPI.userLogin(user)
            .then((response) => {
                console.log(response.data);
                this.setState({ message: "Login successful." });
                console.log(this.state.message);
                if (response.data.userType === "patient") {
                    sessionStorage.setItem("patient", JSON.stringify(response.data));
                    sessionStorage.setItem("dashboard", "patient");

                    this.props.history.push("/patientDashboard");
                } else if (response.data.userType === "doctor") {
                    sessionStorage.setItem("doctor", JSON.stringify(response.data));
                    sessionStorage.setItem("dashboard", "doctor");

                    this.props.history.push("/doctorDashboard");
                } else {
                    sessionStorage.setItem("admin", JSON.stringify(response.data));
                    sessionStorage.setItem("dashboard", "admin");
                    this.props.history.push("/adminDashboard");
                }
            })
            .catch((error) => {
                console.error("in err ", error.response.data);
                //err.response.data => DTO on the server side : ErrorResponse
                //alert(error.response.data.message);
                swal("error", error.response.data.message, "error");
                this.props.history.push("/userLogin");
            });
    };

    validateEmail() {
        let email = document.getElementById("email").value;
        let emailRegex = /\S+@\S+\.\S+/;
        if (emailRegex.test(email) === true || email == "") {
            return true;
        } else {
            document.getElementById("emailVR").innerHTML =
                "Email format should be abc@xyz.com";
            return false;
        }
    }

    validatePassword() {
        let password = document.getElementById("password").value;
        var regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{5,}$/;

        if (regexPassword.test(password) === true) {
            document.getElementById("passwordVR").innerHTML = "";
            return true;
        } else {
            document.getElementById("passwordVR").innerHTML =
                "password must be alphanumeric and should contains at least a special character with length 5";
        }
    }

    removeAlert() {
        document.getElementById("emailVR").innerHTML = "";
        document.getElementById("passwordVR").innerHTML = "";
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (

            <Base>


                <div
                    className="container-fluid loginBack"
                    style={{ backgroundColor: "rgba(0, 0, 0,0.8)", height: "100vh" }}
                >
                    <div
                        className=" d-flex flex-col justify-content-center align-items-center"
                        style={{ height: "80vh" }}
                    >
                        <form
                            className="container  shadow pt-2 border-dark rounded"
                            style={{ width: "30vw", backgroundColor: "rgba(0,0,0,0.8)" }}
                        >
                            <h2 className="text-center text-light mb-4">
                                Login to your Account
                            </h2>
                            <div className="form-group">
                                <input
                                    id="email"
                                    type="email"
                                    className="form-control text-center mt-3"
                                    placeholder="Email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    onBlur={this.validateEmail}
                                    onFocus={this.removeAlert}
                                    required
                                />
                                <span style={{ color: "red" }} id="emailVR"></span>
                            </div>
                            <div className="form-group my-3">
                                <input
                                    type="password"
                                    id="password"
                                    className="form-control text-center"
                                    name="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                    onBlur={this.validatePassword}
                                    onFocus={this.removeAlert}
                                    required
                                />
                                <span style={{ color: "red" }} id="passwordVR"></span>
                            </div>
                            <div className="row my-3 justify-content-center align-items-center">
                                <div className="col-sm-6">
                                    <button
                                        className="btn btn-success text-uppercase mb-3 offset-8 "
                                        onClick={this.login}
                                    >
                                        LOGIN
                                    </button>
                                </div>
                                <div className="col-sm-6 mt-3 ">

                                    <NavLink to="/email-for-forgot-password">
                                        <h6>Forgot Password?</h6>
                                    </NavLink>

                                </div>
                            </div>
                        </form>
                        <span id="span"></span>
                    </div>
                </div>
                <Footer></Footer>
            </Base>
        );
    }
}

export default UserLogin;

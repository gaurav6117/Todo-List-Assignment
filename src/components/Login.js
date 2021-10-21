import React, { Component } from 'react'
import { Link } from "react-router-dom";
export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { email: "", password: "", credentials: [{ email: "abc@gmail.com", password: "aaaaaaaa" }] }
    }

    handler = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    submit = (e) => {
        e.preventDefault();
        this.state.credentials.forEach(element => {
            if (element.email === this.state.email && element.password === this.state.password) {
                this.props.history.push('../home');
            }
        });
    }
    render() {
        return (
            <section className="ftco-section">
                <div className="container">
                    {/* right side-: sign-up side  */}
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-lg-10">
                            <div className="wrap d-md-flex">
                                <div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                                    <div className="text w-100">
                                        <h2>Welcome to login</h2>
                                        <p>Don't have an account?</p>
                                        <Link to="/registration" className="btn btn-white btn-outline-white">Sign Up</Link>
                                    </div>
                                </div>
                                {/* left side-: Login side  */}
                                <div className="login-wrap p-4 p-lg-5">
                                    <div className="d-flex">
                                        <div className="w-100">
                                            <h3 className="mb-4">Sign In</h3>
                                        </div>
                                    </div>
                                    <form action="/vendor/loginrequest/" method="POST" className="signin-form">
                                        <div className="form-group mb-3">
                                            <label className="label" for="loginusername">Username</label>
                                            <input type="text" id="loginusername" placeholder="abc@gmail.com" onChange={this.handler} name="email" className="form-control"
                                                required />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label className="label" for="loginpassword">Password</label>
                                            <input type="password" id="loginpassword" onChange={this.handler} name="password" className="form-control"
                                                placeholder="Password" required />
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" onClick={this.submit} className="form-control btn btn-primary submit px-3">Sign In</button>
                                        </div>
                                        <div className="form-group d-md-flex">
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Login

import React, { Component } from 'react';
import axios from 'axios';
import "./style.css";
import Links from "../Links";

export default class Contact extends Component {

    state = {
        name: "",
        email: "",
        message: "",
        sent: false
    }

    //handle input
    handleName = (e) => {
        this.setState({
            name: e.target.value
        });
    };

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    };

    handleMessage = (e) => {
        this.setState({
            message: e.target.value
        });
    };

    //end of handle input
    formSubmit = (e) => {
        e.preventDefault();

        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }

        axios.post('/api/form', data)
            .then(res => {
                this.setState({
                    sent: true,
                }, this.resetForm())
            })
            .catch(() => {
                console.log("message not sent");
            })
    }

    //Resetting the initial data
    resetForm = () => {
        this.setState({
            name: "",
            email: "",
            message: ""
        })
        setTimeout(() => {
            this.setState({
                sent: false,
            })
        }, 3000)
    }

    render() {
        return (
            <div className="cont-bg-img">
                {/* <div className="container col-lg-4 col-md-8 col-sm-12" >
                    <header className="card-header">
                        Contact
                </header>
                    <Container className="card-body">
                        <p className="cont">Email: kaelynrieffer@gmail.com </p>
                        <p className="cont">Phone: 520-907-4678 </p>
                    </Container> */}
                {/* </div> */}

                <section className="container-fluid">
                    <form className="row mb-5" onSubmit={this.formSubmit}>
                        <div className="col col-lg-6 form-area mx-auto formContact">
                            <div className="form-group mx-auto groupContact  w-70">
                                <input type="text"
                                    name="name"
                                    className="form-control contact"
                                    id="nameInput"
                                    placeholder="Name"
                                    title="Please enter your Name"
                                    value={this.state.name}
                                    onChange={this.handleName}
                                    required
                                />
                                <input type="email"
                                    name="email"
                                    className="form-control contact"
                                    id="emailAddressInput"
                                    placeholder="Email"
                                    title="Please enter your email address"
                                    value={this.state.email}
                                    onChange={this.handleEmail}
                                    required
                                />
                                <textarea className="form-control contact"
                                    name='message'
                                    id="messageTextAreaInput"
                                    placeholder="Message"
                                    rows="5"
                                    value={this.state.message}
                                    onChange={this.handleMessage}
                                    required
                                ></textarea>
                                <button type="submit" className="btn contact-button float-right mt-4">Submit</button>
                            </div>
                        </div>
                    </form>
                </section >



                <div>
                    <Links />
                </div>

            </div>

        );
    }
}
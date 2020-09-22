import React, { Component } from 'react';
import axios from 'axios';
import "./style.css";
import Container from "../Container";

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
                <form className="row hero-image-contact" onSubmit={this.formSubmit}>
                    <div className="col form-area formContact">
                        <div className="form-group mx-auto groupContact w-75">
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





                <Container >

                    <section className="container link col-lg-4 col-md-8 col-sm-8 mx-auto">
                        <div >

                            <h3> Links </h3>
                            <a className="container" type="submit" href="https://github.com/Krieffer21/">
                                <button className="cont-btn">Github</button> </a>

                            <a className="container" type="submit" href="https://www.linkedin.com/in/kaelyn-rieffer-b41a811a2/"><button className="cont-btn">LinkedIn</button> </a>

                            <a className="container" type="submit" href="https://docs.google.com/document/d/1eRAWQx83EC40dg7i9n2EdPf5q38tbL7Lx2Y2ExZxBAQ/export?format=pdf"> <button className="cont-btn">Resume</button></a>
                        </div>
                    </section>
                </Container>
            </div>

        );
    }
}
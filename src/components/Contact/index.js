import React, { Component } from 'react';
import "./style.css";
import Links from "../Links";
import Container from "../Container";

function contact() {
    return (
        <div className="cont-bg-img">
            <Container className="cont-links mt-5 ">
                <div className="container col-lg-4 col-md-8 col-sm-12" >
                    <header className="card-header">
                        Contact
                        </header>
                    <Container className="card-body">
                        <div className="cardbod">
                            <a href="mailto:kaelynrieffer@gmail.com">
                                <p className="cont">Email: kaelynrieffer@gmail.com </p>
                            </a>
                            <p className="cont">Phone: 520-907-4678 </p>
                        </div>
                        <Links />
                    </Container>
                </div>
            </Container>
            {/* <section className="container-fluid">
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
                </section > */}
        </div>
    );
}

export default contact;
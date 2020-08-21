import React from "react";
import "./style.css";

function Contact() {
    return (
        <div className="container" >
        <header className="card-header">
            Contact
            <p className="cont">Email: kaelynrieffer@gmail.com ~ Phone: 520-907-4678 </p>
        </header>
        <article className="form-group">
            <form>
                <label>Name</label>
                <input type="text" className="form-control"/>

                <label>Email address</label>
                <input type="email" className="form-control"/>

                <label>Message</label>
                <textarea className="form-control"></textarea>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </article>
    </div>

    );
}

export default Contact;
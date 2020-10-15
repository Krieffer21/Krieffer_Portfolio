import React, { Component } from 'react';
import "./style.css";
import Container from "../Container";
import { Text } from "react-native";

function res() {
    return (
        <div>
            <Container className="resume mb-5">
                <div className="card ">
                    <Text alt="resume"
                        src="https://drive.google.com/uc?export=view&id=1Jbrtu_gvTW0gIjwjuQRr94QCUog8jfYiOVZR58SvmW8">
                    </Text>
                </div>
            </Container>
        </div>
    );
}

export default res;

import React from "react";
import logo from "../assets/linkedin.svg"
import logo2 from "../assets/Mail.png"
export default function Socials(){
    return (
        <div className="button-area">
            <button className="email"><img src={logo2} alt="" />Email</button>
            <button className="linkedin"> <img src={logo} alt="" />LinkedIn</button>
        </div>
    )
}
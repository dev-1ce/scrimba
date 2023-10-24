import React from "react";
import Socials from  "./buttons"
import twitter from "../assets/Twitter.svg"
import facebook from "../assets/Facebook.svg"
import instagram from "../assets/Instagram.png"
import github from "../assets/GitHub.svg"
export default function data(){
    return (
        <div className="main">
            <h1>Laura Smith</h1>
            <h3>Frontend Engineer</h3>
            <h4>laurasmith.website</h4>
            <Socials/>
            <div  className="text">
                <h2>About</h2>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h2>Interests</h2>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                
            </div>
            <footer>
                    <a href=""><img src={twitter} alt="" /></a>
                    <a href=""><img src={facebook} alt="" /></a>
                    <a href=""><img src={instagram} alt="" /></a>
                    <a href=""><img src={github} alt="" /></a>
                </footer>
        </div>

    )
}
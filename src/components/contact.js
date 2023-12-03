import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import emailjs from '@emailjs/browser';
import styles from "../styles/contact.module.css";
import Head from "next/head";
import checkIco from "@/assets/icons/check.svg";

function Contact() {
  useEffect(() => {
    const emailSent = sessionStorage.getItem("sentcontactform2");
    if (emailSent === "yes"){
        document.querySelector(".contactforminner1").classList.add("displaynone");
        document.querySelector(".contactforminner3").classList.remove("displaynone");
    } 
  }, []);

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function restrictToNumbers(event) {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]+/g, '');
  }

  function removeErrorState(){
    let notselected = document.querySelectorAll(".notselected");

    for (let i = 0; i < notselected.length; i++) {
        notselected[i].classList.remove("notselected");
    }
  }


  function checkContactForm(){
    let voorAchterNaam = document.querySelector("#voorachternaamform").value.trim();
    let email = document.querySelector("#emailform").value.trim();
    let numberform = document.querySelector("#numberform").value.trim();
    let message = document.querySelector("#messageform").value.trim();
    let antwoord = document.querySelector("#antwoordform").value.trim();

    if ( voorAchterNaam === '' || !isValidEmail(email) || numberform === '' || message === '') {

        alert('Check if the required fields are filled in and if the email address is valid.');
   

        if (voorAchterNaam === ""){
            document.querySelector("#voorachternaamform").classList.add("notselected") 
        }

        if (!isValidEmail(email)){
            document.querySelector("#emailform").classList.add("notselected") 
        }

        if (numberform === ""){
            document.querySelector("#numberform").classList.add("notselected") 
        }

        if (message === "") {
            document.querySelector("#messageform").classList.add("notselected");
        }

        if (antwoord === "") {
            document.querySelector("#antwoordform").classList.add("notselected");
        }

    } else if (parseInt(antwoord) !== 3) {

        alert('The answer to the mathematical question is incorrect. Please try again.');
  
        if (antwoord !== 4) {
            document.querySelector("#antwoordform").classList.add("notselected");
        }
        
    } else {

        const emailData = {
            voorachternaam: voorAchterNaam,
            emailadress: email,
            telefoonnummer: numberform,
            bericht: message,
        }

        emailjs.send("service_cv1mvrk","template_idziqai", emailData, "wBQbq5sBFeIIQxacO");

        document.querySelector(".contactforminner1").classList.add("displaynone");
        document.querySelector(".contactforminner2").classList.remove("displaynone");

        sessionStorage.setItem("sentcontactform2", "yes");

        setTimeout(() => {
            document.querySelector(".contactforminner3").classList.remove("displaynone");
            document.querySelector(".contactforminner2").classList.add("displaynone");
        }, 1000);

    }
}

  return (
      <div className={styles.contact} id="contact">
        <div>
            <h2>Contact</h2>
            <div>
                <div className="contactforminner1">
                    <section>
                        <input type="text" placeholder="Name" id="voorachternaamform" onClick={removeErrorState}></input>
                        <input type="email" placeholder="E-Mail" id="emailform" onClick={removeErrorState}></input>
                        <input type="text" placeholder="Phone Number" id="numberform" onChange={restrictToNumbers} onClick={removeErrorState}></input>
                    </section>

                    <section>
                        <textarea placeholder="Message" id="messageform" onClick={removeErrorState}></textarea>
                    </section>

                    <section>
                        <input placeholder="What is 2 + 1?" type="text" id="antwoordform" onChange={restrictToNumbers} onClick={removeErrorState} />
                    </section>

                    <section>
                        <button onClick={checkContactForm} id="contactfrombtn">Send</button>
                    </section>
                </div>
                <div className="contactforminner2 displaynone">
                    <div class="loadingio-spinner-spinner-nnvlnihgqe8">
                        <div class="ldio-3kxj25bh4eh">
                            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        </div>
                    </div>
                </div>
                <div className="contactforminner3 displaynone">
                    <p><Image src={checkIco} alt="Succes Icoon"/> <span id="contactformsuccesp1">Message has been successfully sent.</span></p>
                    <p id="contactformsuccesp2">Thank you for your message, we will respond as soon as possible. Please keep an eye on your email.</p>
                </div>
            </div>

        </div>  
      </div>
  );
}

export default Contact
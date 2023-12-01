import { useEffect, useState, useRef } from "react";
import { Translate } from "../components/translate"; 
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/header.module.css";
import Logo from "../assets/Logo.svg";
import MailIco from "../assets/icons/mail.svg";
import PhoneIco from "../assets/icons/phone.svg";
import hamburgerIco from "../assets/icons/hamburger.svg";
import closeIco from "../assets/icons/close.svg";
import WhatsAppIco from "../assets/icons/whatsapp.svg";
import sessionstorage from "sessionstorage";

function Header() {


    useEffect(() => {
    });

    return(      
        <header className={styles.header}>  
        </header>
    )
  }
  
  export default Header;
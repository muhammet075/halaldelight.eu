import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/header.module.css";
import Logo from "../assets/logo/halaldelight-logo.svg";
import hamburgerIco from "../assets/icons/hamburgermenu.svg";
import closeIco from "../assets/icons/close.svg";
import Snoep1 from "../assets/img/Sour-Bears.png";

function Header() {

    useEffect(() => {
        var prevScrollpos = window.pageYOffset;

        var headerDiv = document.querySelector("#halaldelightheader");
        var headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;
        
        window.onscroll = function() {
          var currentScrollPos = window.pageYOffset;
        
          if (prevScrollpos > currentScrollPos  || currentScrollPos < headerBottom){  
              headerDiv.classList.add("fadeinheader");
              headerDiv.classList.remove("fadeoutheader");
          } else {
            headerDiv.classList.remove("fadeinheader");
            headerDiv.classList.add("fadeoutheader");          
        }
          prevScrollpos = currentScrollPos;
        }


        function adjustHeaderMenuDisplay() {
            var headerDiv = document.querySelector("#halaldelightheader");
        
            if (window.scrollY >= 150) {
                headerDiv.classList.remove("stickyheader");
            } else {
                headerDiv.classList.add("stickyheader");
            }
        }
        
        window.addEventListener('scroll', adjustHeaderMenuDisplay);
        window.addEventListener('load', adjustHeaderMenuDisplay);
        window.addEventListener('resize', adjustHeaderMenuDisplay);
        
          
    }, []);


    function openHamburger(){
        document.querySelector(".nav").style.display = "flex";
        document.querySelector(".nav").classList.remove("displaynonehamburger");
        document.querySelector(".hamburgermenu").classList.remove("closehamburger");

        setTimeout(() => {
            document.querySelector(".hamburgermenu").classList.add("openhamburger");
        }, 300);
    }

    function closeHamburger(){

        document.querySelector(".hamburgermenu").classList.add("closehamburger");
        document.querySelector(".hamburgermenu").classList.remove("openhamburger");
        
        setTimeout(() => {
            document.querySelector(".nav").classList.add("displaynonehamburger");
            document.querySelector("#halaldelightheader").classList.add("fadeoutheader");
            document.querySelector("#halaldelightheader").classList.remove("fadeinheader");
        }, 300);
    }

    return(      
        <header className={styles.header + " fadeinheader stickyheader"} id="halaldelightheader">  
            <div>
                <section>
                    <Link href="/"><Image src={Logo} alt="Logo of Halal Delight"/></Link>
                </section>

                <nav className="nav">
                    <ul className="hamburgermenu">
                        <li><Link onClick={closeHamburger} href="/#stores">Stores</Link></li>
                        <li><Link onClick={closeHamburger} href="/#about">About us</Link></li>
                        <li><Link onClick={closeHamburger} href="/#products">Products</Link></li>
                        <li><Link onClick={closeHamburger} href="/#contact">Contact</Link></li>
                    </ul>
                    <div onClick={closeHamburger}>
                        <Image src={closeIco} alt="Close icon"/>
                    </div>
                </nav>

                <button onClick={openHamburger}><Image src={hamburgerIco} alt="Hamburger menu icon"/></button>
            </div>
        </header>
    )
}
  
export default Header;
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/footer.module.css";
import textLogo from "../assets/logo/halaldelight-text-logo.svg";
import starIco from "../assets/icons/star.svg";
import instagramIco from "../assets/icons/instagram.svg";
import facebookIco from "../assets/icons/facebook.svg";
import tiktokIco from "../assets/icons/tiktok.svg";



function Footer() {

    useEffect(() => {
    }, []);

    function hideHeader(){
        setTimeout(() => {
            document.querySelector("#halaldelightheader").classList.add("fadeoutheader");
            document.querySelector("#halaldelightheader").classList.remove("fadeinheader");
        }, 25);
    }

    return (
        <footer className={styles.footer} id="footer">  
            <div>
                <ul>
                    <li><Link href="/"><Image src={textLogo} alt="Logo of Halal Delight"/></Link></li>
                    <li>KVK: 91341167</li>
                    <li>VAT: NL004883756B73</li>
                </ul>

                <ul>
                    <li><h2>Our Company</h2></li>
                    <li><Link onClick={hideHeader} href="/#stores">Stores</Link></li>
                    <li><Link onClick={hideHeader} href="/#about">About us</Link></li>
                    <li><Link onClick={hideHeader} href="/#products">Products</Link></li>
                    <li><Link onClick={hideHeader} href="/#contact">Contact</Link></li>
                </ul>

                <ul>
                    <li><h2>Our Stores</h2></li>
                    <li><Link target="_blank" href="https://halaldelight.nl/">The Netherlands</Link></li>
                    <li><Link target="_blank" href="https://halaldelight.de/">Germany</Link></li>
                    <li><Link target="_blank" href="https://halaldelight.be/">Belgium</Link></li>
                    <li><Link target="_blank" href="https://halaldelight.fr/">France</Link></li>
                </ul>

                <ul>
                    <li><h2>Socials</h2></li>
                    <li><Link target="_blank" href="https://halaldelight.nl/"><Image src={starIco} alt="Star of Trustpilot"/> Trustpilot</Link></li>
                    <li><Link target="_blank" href="https://halaldelight.nl/"><Image src={instagramIco} alt="Logo of Instagram"/> Instagram</Link></li>
                    <li><Link target="_blank" href="https://halaldelight.nl/"><Image src={tiktokIco} alt="Logo of TikTok"/> TikTok</Link></li>
                    <li><Link target="_blank" href="https://halaldelight.nl/"><Image src={facebookIco} alt="Logo of Facebook"/> Facebook</Link></li>
                </ul>
            </div>
            <div>
                <section>
                    <p>&copy; Copyright 2023 - 2024</p>
                    <span>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                        <Link href="/terms-conditions">Terms & Conditions</Link>
                    </span>
                </section>
            </div>
        </footer>
    )
  }

  export default Footer;
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/about.module.css";
import Cartoon from "../assets/img/halaldelight-cartoon.svg";
import Certificaat from "../assets/icons/certificaat.png";
import EuropeMap from "../assets/img/countries.png";



function About() {

    useEffect(() => {
    }, []);

    return (
        <div className={styles.about} id="about">  
            <div>
                <section>
                    <h2>About us</h2>
                    <h3>Your Trusted Source for Halal Sweets and Treats Across Europe</h3>
                    <p>Welcome to Halal Delight, a 2023-founded Dutch company dedicated to introducing the finest halal sweets and treats to discerning palates across Europe. Our specialized focus on importing and distributing these delectable confections via e-commerce ensures that you can enjoy the authentic flavors of Türkiye in the comfort of your home. With a commitment to halal standards and the exclusion of haram E-numbers, Halal Delight guarantees not just a sweet experience but a culturally rich and genuine one.</p>
                    <Image src={EuropeMap} alt="Europe map with Halal Delight stores"/>
                    <p>At Halal Delight, we take pride in revolutionizing your snacking experience by offering a curated selection of premium halal sweets and treats. Founded in 2023, our company specializes in the import and e-commerce sale of these delectable delights, making them easily accessible to customers across Europe, including the Netherlands, Belgium, Germany, and France. Sourced exclusively from Türkiye, our products not only meet stringent halal standards but are also free from haram E-numbers, ensuring a pure and delightful treat with every bite. Welcome to a world of guilt-free indulgence with Halal Delight.</p>
                    <Image src={Certificaat} alt="Halal and made in Turkiye logo"/>
                </section>
                <section>
                    <Image src={Cartoon} alt="Cartoon of Halal Delgith"/>
                </section>
            </div>
        </div>
    )
  }

  export default About;
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/stores.module.css";
import nlFlag from "../assets/flags/nl.svg";
import beFlag from "../assets/flags/be.svg";
import deFlag from "../assets/flags/de.svg";
import frFlag from "../assets/flags/fr.svg";

function Stores() {


    useEffect(() => {
    });

    return(      
        <div className={styles.stores} id="stores">  
            <div>
                <h2>Select your country</h2>

                <div>
                    <section>
                        <Image src={nlFlag} alt="Flag of the Netherlands"/>
                        <h3>The Netherlands</h3>
                        <Link target="_blank" href="https://halaldelight.nl/">Visit Store</Link>
                    </section>

                    <section>
                        <Image src={deFlag} alt="Flag of Germany"/>
                        <h3>Germany</h3>
                        <Link target="_blank" href="https://halaldelight.de/">Visit Store</Link>
                    </section>

                    <section>
                        <Image src={beFlag} alt="Flag of Belgium"/>
                        <h3>Belgium</h3>
                         <Link target="_blank" href="https://halaldelight.be/">Visit Store</Link>
                    </section>

                    <section>
                        <Image src={frFlag} alt="Flag of France"/>
                        <h3>France</h3>
                        <Link target="_blank" href="https://halaldelight.fr/">Visit Store</Link>
                    </section>
                </div>
            </div>
        </div>
    )
  }
  
  export default Stores;
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/products.module.css";
import snoep1 from "../assets/snoeppotten/AppleCustardHearts.png";
import snoep2 from "../assets/snoeppotten/BlueRaspberryBottles.png";
import snoep3 from "../assets/snoeppotten/ColaBottles.png";
import snoep4 from "../assets/snoeppotten/BlueDolphins.png";
import snoep5 from "../assets/snoeppotten/FizzyCherryBottles.png";
import snoep6 from "../assets/snoeppotten/FizzyColaBottles.png";
import snoep7 from "../assets/snoeppotten/FizzyStrawberryHearts.png";
import snoep8 from "../assets/snoeppotten/FruityHearts.png";
import snoep9 from "../assets/snoeppotten/FruitJellies.png";
import snoep10 from "../assets/snoeppotten/HappyBears.png";
import snoep11 from "../assets/snoeppotten/JellyStrawberry.png";
import snoep12 from "../assets/snoeppotten/JellyRaspberry.png";
import snoep13 from "../assets/snoeppotten/JuicyBerries.png";
import snoep14 from "../assets/snoeppotten/MiniFrogs.png";
import snoep15 from "../assets/snoeppotten/PartyMix.png";
import snoep16 from "../assets/snoeppotten/PeachRings.png";
import snoep17 from "../assets/snoeppotten/SourAppleRings.png";
import snoep18 from "../assets/snoeppotten/BlueRaspberryRings.png";
import snoep19 from "../assets/snoeppotten/SourBears.png";
import snoep20 from "../assets/snoeppotten/TwinCherries.png";
import snoep21 from "../assets/snoeppotten/WatermelonSlice.png";


function Products() {

    useEffect(() => {
    });

    return(      
        <div className={styles.products} id="products">  
            <div>
                <h2>Products</h2>

                <div id="products">
                    <section>
                        <Image src={snoep1} alt="Apple & Custard Hearts"/>
                        <h3>Apple & Custard Hearts</h3>
                    </section>
                    <section>
                        <Image src={snoep2} alt="Blue Raspberry Bottles"/>
                        <h3>Blue Raspberry Bottles</h3>
                    </section>
                    <section>
                        <Image src={snoep3} alt="Cola Bottles"/>
                        <h3>Cola Bottles</h3>
                    </section>
                    <section>
                        <Image src={snoep4} alt="Blue Dolphins"/>
                        <h3>Blue Dolphins</h3>
                    </section>
                    <section>
                        <Image src={snoep5} alt="Fizzy Cherry Bottles"/>
                        <h3>Fizzy Cherry Bottles</h3>
                    </section>
                    <section>
                        <Image src={snoep6} alt="Fizzy Cola Bottles"/>
                        <h3>Fizzy Cola Bottles</h3>
                    </section>
                    <section>
                        <Image src={snoep7} alt="Fizzy Strawberry Hearts"/>
                        <h3>Fizzy Strawberry Hearts</h3>
                    </section>
                    <section>
                        <Image src={snoep8} alt="Fruity Hearts"/>
                        <h3>Fruity Hearts</h3>
                    </section>
                    <section>
                        <Image src={snoep9} alt="Fruit Jellies"/>
                        <h3>Fruit Jellies</h3>
                    </section>
                    <section>
                        <Image src={snoep10} alt="Happy Bears"/>
                        <h3>Happy Bears</h3>
                    </section>
                    <section>
                        <Image src={snoep11} alt="Jelly Strawberry"/>
                        <h3>Jelly Strawberry</h3>
                    </section>
                    <section>
                        <Image src={snoep12} alt="Jelly Raspberry"/>
                        <h3>Jelly Raspberry</h3>
                    </section>
                    <section>
                        <Image src={snoep13} alt="Juicy Berries"/>
                        <h3>Juicy Berries</h3>
                    </section>
                    <section>
                        <Image src={snoep14} alt="Mini Frogs"/>
                        <h3>Mini Frogs</h3>
                    </section>
                    <section>
                        <Image src={snoep15} alt="Party Mix"/>
                        <h3>Party Mix</h3>
                    </section>
                    <section>
                        <Image src={snoep16} alt="Peach Rings"/>
                        <h3>Peach Rings</h3>
                    </section>
                    <section>
                        <Image src={snoep17} alt="Sour Apple Rings"/>
                        <h3>Sour Apple Rings</h3>
                    </section>
                    <section>
                        <Image src={snoep18} alt="Blue Raspberry Rings"/>
                        <h3>Blue Raspberry Rings</h3>
                    </section>
                    <section>
                        <Image src={snoep19} alt="Sour Bears"/>
                        <h3>Sour Bears</h3>
                    </section>
                    <section>
                        <Image src={snoep20} alt="Twin Cherries"/>
                        <h3>Twin Cherries</h3>
                    </section>
                    <section>
                        <Image src={snoep21} alt="Watermelon Slice"/>
                        <h3>Watermelon Slice</h3>
                    </section>
                </div>
            </div>
        </div>
    )
  }
  
  export default Products;
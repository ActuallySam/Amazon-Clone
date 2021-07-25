import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">

            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB28684220_.jpg" alt="" />

                <div className="home_row">
                    <Product 
                        id="123456"
                        title="The lean star" 
                        price={29.99}
                        image="htpps://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" 
                        rating={5} />
                    <Product 
                        id="1372383"
                        title="Mixer"
                        price={49.99}
                        image="htpps://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        rating={5} />
                </div>

                <div className="home_row">
                    <Product 
                        id="4903859"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" 
                        price={199.99}
                        image="htpps://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" 
                        rating={3} />
                    <Product
                        id="9272638"
                        title="New Apple iPad Pro (12.9 inch, Wi-Fi, 128GB) - Silver (4th Generation)" 
                        price={598.99}
                        image="htpps://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg" 
                        rating={4} />
                    <Product
                        id="836482"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric" 
                        price={98.99}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$" 
                        rating={5} />
                </div>

                <div className="home_row">
                    {/* <Product /> */}
                </div>

            </div>
 
        </div>
    );
}

export default Home;

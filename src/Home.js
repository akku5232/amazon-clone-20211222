import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div classname="home">
            <img 
            src="https://m.media-amazon.com/images/I/41QBwIQAaeL._SX3000_.jpg"
            className='home__image'
            alt=""
            />

            {/* Product id,title,price,rating,image */}
            <div className='home__row'>
                <Product
                    id="123123"
                    title = "Lean Startup: How to Apply the Lean Startup Methodology to Innovate, Accelerate, and Create Successful Businesses (Lean Guides with Scrum, Sprint, Kanban, DSDM, XP & Crystal)"
                    price = {11.96}
                    rating= {5}
                    image = "https://m.media-amazon.com/images/I/61H20CIiU9L._AC_UY218_.jpg"
                />
                <Product
                    id="1231s23"
                    title = "Tecno Spark 7T(Jewel Blue, 4GB RAM, 64GB Storage) 6000 mAh Battery| 48 MP AI Dual Rear Camera"
                    price = {94}
                    rating= {4}
                    image = "https://m.media-amazon.com/images/I/81aWyRY67SS._SL1500_.jpg"
                />

            </div>

            <div className='home__row'>
                <Product
                    id="1243123"
                    title = "Samsung Galaxy M52 5G (ICY Blue, 6GB RAM, 128GB Storage).."
                    price = {290}
                    rating= {4}
                    image = "https://images-eu.ssl-images-amazon.com/images/I/41+EgceMbjL._AC_SX184_.jpg"
                />
                <Product
                    id="1323123"
                    title = "Xiaomi 11 Lite NE 5G (Tuscany Coral 6GB RAM 128 GB Storage).."
                    price = {269}
                    rating= {4}
                    image = "https://images-eu.ssl-images-amazon.com/images/I/31sKeCe8SyL._AC_SX184_.jpg"
                />
                 <Product
                    id="15231233"
                    title = "Xiaomi 11 Lite NE 5G (Tuscany Coral 6GB RAM 128 GB Storage).."
                    price = {260}
                    rating= {5}
                    image = "https://images-eu.ssl-images-amazon.com/images/I/414wcW-9+ML._AC_SX184_.jpg"
                />
            </div>

            <div className='home__row'>
                <Product
                    id="1213123"
                    title = "Mi 10i 5G (Midnight Black, 6GB RAM, 128GB Storage) - 108MP Quad Camera | Snapdragon 750G ProcessorMi 10i 5G (Midnight Black, 6GB RAM, 128GB Storage) - 108MP Quad Camera | Snapdragon 750G ProcessorMi 10i 5G (Midnight Black, 6GB RAM, 128G… MIMI"
                    price = {110}
                    rating= {5}
                    image = "https://images-eu.ssl-images-amazon.com/images/I/316crCCchZL._AC_SX184_.jpg"
                />
            </div>
            
        </div>
    )
}

export default Home

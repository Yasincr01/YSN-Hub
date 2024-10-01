import React from 'react'
import Image1 from '../src/assets/img1.png'


const Products = () => {
  return (
    <section id="products">
        <div class="container">
            <h2 className='h2'>Featured Products</h2>
            <div class="product-grid">
                <div class="product-card">
                    <img src={Image1} alt="Earphones"/>
                    <h3>Wireless Earphones</h3>
                    <p>$49.99</p>
                    <button>Add to Cart</button>
                </div>
                <div class="product-card">
                    <img src="https://media.croma.com/image/upload/v1675862185/Croma%20Assets/Communication/Chargers%20and%20Batteries/Images/258517_0_smbjdy.png" alt="Charger"/>
                    <h3>Fast Charger</h3>
                    <p>$29.99</p>
                    <button>Add to Cart</button>
                </div>
                <div class="product-card">
                    <img src="https://mobilizephone.com/wp-content/uploads/2022/08/QBACRY-ip13-BK-111.png" alt="Phone Case"/>
                    <h3>Shockproof Case</h3>
                    <p>$19.99</p>
                    <button>Add to Cart</button>
                </div>
                <div class="product-card">
                    <img src="https://ctgimage1.s3.amazonaws.com/cms/image/218de8df195d16d7f89d9a20889fe65f.png" alt="Screen Protector"/>
                    <h3>Screen Protector</h3>
                    <p>$9.99</p>
                    <button>Add to Cart</button>
                </div>
            </div>
            <div class="product-grid">
                <div class="product-card">
                    <img src="https://www.pngarts.com/files/10/Wireless-Earpods-PNG-Free-Download.png" alt="Earbuds"/>
                    <h3>Wireless Earbuds</h3>
                    <p>$3.99</p>
                    <button>Add to Cart</button>
                </div>
                <div class="product-card">
                    <img src="https://www.pngmart.com/files/7/USB-Pen-Drive-Transparent-Background.png" alt="pendrive"/>
                    <h3>Pen Drive</h3>
                    <p>$4.99</p>
                    <button>Add to Cart</button>
                </div>
                <div class="product-card">
                    <img src="https://www.pngarts.com/files/9/Wireless-Power-Bank-PNG-Image-Background.png" alt="powerbank"/>
                    <h3>Power Bank</h3>
                    <p>$9.99</p>
                    <button>Add to Cart</button>
                </div>
                <div class="product-card">
                    <img src="https://maginnovations.co.uk/media/catalog/product/cache/1/base_image/1200x/17f82f742ffe127f42dca9de82fb58b1/s/a/samsung_multiplug_cable2.png" alt="Screen Protector"/>
                    <h3>4 Way Multi Charger</h3>
                    <p>$9.99</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    </section>
    
  )
}

export default Products
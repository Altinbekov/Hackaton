import React from 'react'
import '../css/Map.css'

const Map = () => {
    return (
        <div className="map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.7849461945602!2d69.5258421761353!3d41.31354177130935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae5774bb568c81%3A0x5a794f7263a1e89a!2zQXN0cnVtIC0g0JjQoiDQkNC60LDQtNC10LzQuNGP!5e0!3m2!1sru!2s!4v1695465554495!5m2!1sru!2s"
                width="1000"
                height="450"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title='map'
            ></iframe>
        </div>
    );
}

export default Map
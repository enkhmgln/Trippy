import React from "react";

// import './Mapstyles.css'
// .Map iframe {
//     margin: 2rem 0;
//     width: 96%;
//     height: 70vh;
// }


// @media screen and (max-width:555px) {
//     .Map iframe {
//         width: 80%;
//         height: 50vh;
//     }
// }   


const Map = () => (
    <div className="m-4 h-full"> 
        <iframe className="w-full h-full" title='unique title sad' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36732.20874889754!2d106.808643193333!3d47.94022955490182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96eddfdd185f21%3A0xe9a2ce249c193a72!2z0YHQvtC00L7QvSDRhdC-0YDQvtC-0LvQvtC7!5e0!3m2!1sen!2smn!4v1675843644499!5m2!1sen!2smn" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
)



export default Map;
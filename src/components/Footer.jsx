import React from "react";

const currentYear = (new Date()).getFullYear()


const Footer = () => {
    return (
<footer className="flex justify-center text-gray-400 text- 2xl p-3 w-full absolute bottom-0">
    <p>Copyright {currentYear}</p>
</footer>


    )
    
}

export default Footer;
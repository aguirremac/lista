import React from "react";

const currentYear = (new Date()).getFullYear()


const Footer = () => {
    return (
<footer className="flex justify-center text-gray-300 text-xs md:text-sm p-3 w-full fixed bottom-0">
    <p>Copyright {currentYear}</p>
</footer>


    )
    
}

export default Footer;
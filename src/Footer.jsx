import React from 'react';
import "./styles.css";

var date = new Date();
var year = date.getFullYear();

function Footer() {
    return (
        <footer>
            <p>Copyright © {year}</p>
        </footer>
    );
}

export default Footer;
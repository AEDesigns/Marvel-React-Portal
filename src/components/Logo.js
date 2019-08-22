import React from 'react';
import Logo from '../assets/avengers.svg'
import '../App.css'

console.log(Logo)

const AvengersLogo = props => {
    return <img src={Logo} class="Avengers-logo App-logo-spin" alt="Avengers Logo" />
}

export default AvengersLogo
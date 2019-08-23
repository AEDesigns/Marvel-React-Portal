import React from 'react';
import Logo from '../assets/avengers.svg'
import '../App.css'


const AvengersLogo = props => {
    return <img src={Logo} class="Avengers-logo ${this.state.loaderimg ? 'App-logo-spin' : ''}" alt="Avengers Logo" />
}

export default AvengersLogo
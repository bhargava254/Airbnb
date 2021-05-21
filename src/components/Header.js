import React from 'react'
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Logo from './../assests/logo.png'
import SearchIcon from '@material-ui/icons/Search';
import Profile from './../assests/noun_profile_1069814.svg'

import {Avatar} from '@material-ui/core'



import './../css/Header.css'
function Header(){
    return(
        <div>
<div className='header'>
    <img src={Logo} />

<div className='header_center'>
    <input type='text' />
    <SearchIcon></SearchIcon>
</div>
<div className='header_right'>
    <p>Become a Host</p>
    <LanguageIcon></LanguageIcon>
    <ExpandMoreIcon></ExpandMoreIcon>
<Avatar/>
</div>
        </div>
        </div>
    )
}
export default Header
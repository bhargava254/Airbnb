import React ,{useState}from 'react';

import './../css/banner.css'
import Ban from './../assests/banner2.jpg'
import Ban1 from './../assests/banner1.jpg'
import {Button} from '@material-ui/core'
import Search from './Search'

function Banner(){

const [showSearch,setShowSearch]=useState(false);

    return(
        <div>
            <div className='banner_flow'>   
<div className='banner'>

    <img src={Ban} />
    {/* <img src={Ban1} /> */}

</div>


    <div className='banner_search'>

{showSearch && <Search />}

        <Button onClick={()=>setShowSearch(!showSearch)}
        className='banner_searchButton'
        id='one'
        variant='outlined'>Search Dates
        </Button>
    </div>
<div className='banner_info'>
    <h1>Get out and stretch your imagination </h1>
    <h5>plan a different kind of  gateway to uncover the hidden goes near you</h5>
<Button varient='outlined'>Explore Near By</Button>
</div>

</div>


        </div>
       
    )
}

export default Banner
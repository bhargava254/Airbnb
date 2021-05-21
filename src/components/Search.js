import React,{useState} from 'react'
import './../css/search.css'
import PeopleIcon from '@material-ui/icons/People';
import {DateRangePicker} from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import {Button} from '@material-ui/core'

function Search(){

const [startDate,setStartDate]=useState(new Date());
const [endDate,setEndDate]=useState(new Date());

const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  };

function handleSelect(ranges){
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
}


    return(
        <div>
            <div className='search'>
                <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
<h2>Number of guests
    <PeopleIcon />
</h2>

{/* <input min={0}
default value={2}
type='number' /> */}
 <Button>Search Airnab</Button>  

            </div>

        </div>
    )
}

export default Search


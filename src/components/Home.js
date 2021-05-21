import React from 'react'
import Banner from './Banner'
import Card from './Card'
 import card1 from './../assests/card1.jpg'
 import card2 from './../assests/card2.jpg'
 import card3 from './../assests/card3.jpg'
 import card4 from './../assests/card4.jpg'
 import card5 from './../assests/card5.jpg'
 import card6 from './../assests/card6.jpg'
//  import One from './../assests/work-3.jpg'
//  import Two from './../assests/work-4.jpg'
//  import Three from './../assests/work-5.jpg'
//  import Four from './../assests/work-3.jpg'
import './../css/card.css'
import './../css/Home.css'
function Home(){
    return(
        <div>
            <h1>home component </h1>
            <Banner />
            <div className='home'>
                 <Card  src={card1}
                 title='This is First card'
                 description='This is Child Card'/> 
                <Card 
                src={card2}
                title='This is Second Card'
                description='This is Child Two'
                />
                <Card 
                src={card3}
                title='This is Third Card'
                description='This is Chil Three'
                
                />
            </div>
            <div className='home'>
                 <Card 
                 src={card4}
                 title='This is Fourth Card'
                 description='This is Child Four'
                 price='$20'
                 /> 
                <Card 
                src={card5}
                title='This is Fiveth Card'
                description='This is Child Fifth'
                />
                <Card 
                src={card6}
                title='This is Sixth Card'
                description='This is Sixth Card'
                />
            </div>
        </div>

    )
}


export default Home
import React from 'react'
import Button from '../button/Button'
import About  from "../About/About";
import ShortProduct  from "../shortProduct/shortProduct";
import Footer from '../footer/footer';

const Home = () => {
  return (<>
  
    <div className='homeSec1'>
       
        <div className="context">
            <h1 className='mainerH1'>Discover the Latest Trends at Urban Bazaar</h1>
            <p>Worner sit amet consectetur adipisicing elit. Placeat adipisci ducimus natus minima possimus. Dolores fugit laudantium ipsam iure aliquid aperiam ducimus ipsa, voluptates delectus modi iste consequatur incidunt neque, dolorem sed deleniti optio? Ipsa esse perspiciatis nostrum delectus ut alias consectetur nobis assumenda eligendi aut reprehenderit modi, earum culpa atque aperiam suscipit temporibus id iusto sint in vitae cupiditate.</p>
            <Button title="Explore More"/>
        </div>
        <img src="src\assets\rnder-removebg-preview.png" alt='screener' className='inimag'/>
    </div>
        <About />
    </>
  )
}

export default Home
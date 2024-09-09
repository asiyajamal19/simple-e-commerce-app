import React from 'react'
import Button from '../button/Button'
import ShortProduct  from "../shortProduct/shortProduct";
import Footer from '../footer/footer';

const About = () => {
  return (
    <>
    <div className=' m-5 ab'>
      <img src="https://png.pngtree.com/png-clipart/20220930/original/pngtree-mobile-shopping-concept-a-man-and-woman-buy-things-in-the-png-image_8644437.png" alt='screener' className='inimag' />
      <div className="context">

        <h1>Urban Bazaar</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio eos voluptatem nisi unde id repellendus at quisquam repellat labore accusantium placeat aliquam dolore facere aspernatur expedita laboriosam, optio laudantium quaerat ipsum fuga dolores totam tempora? Eveniet itaque et, enim officia nihil ipsa labore atque at aut repellendus animi quia. Adipisci?</p>
        <br />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est velit enim perspiciatis libero! Natus, alias soluta. Praesentium modi neque repellat sed illum harum. Placeat ut nam illum expedita quisquam. Excepturi.</p>
        <br />
        <Button title={"Products"} />
      </div>
      
    </div>
    <ShortProduct />
    <Footer />
    </>
  )
}

export default About
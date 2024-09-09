import React from 'react'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Button from '../button/Button'

const ShortProduct = () => {
    return (<>
    <h1 className='text-center'>Featured Collection.</h1>
    <div className='shortProducts mx-4'>
    <Card className='ShortCarder'>
      <Card.Img variant="top" src="https://minimalin-demo.myshopify.com/cdn/shop/collections/collection-banner_31_600x.png?v=1695134414" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button title={"Explore Product"}/>
      </Card.Body>
    </Card>
    <Card className='ShortCarder'>
      <Card.Img variant="top" src="https://minimalin-demo.myshopify.com/cdn/shop/collections/collection-banner-_36_600x.png?v=1708660908" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button title={"Explore Product"}/>
      </Card.Body>
    </Card>
    <Card className='ShortCarder'>
      <Card.Img variant="top" src="https://minimalin-demo.myshopify.com/cdn/shop/files/e1_2_600x.png?v=1719674913" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button title={"Explore Product"}/>
      </Card.Body>
    </Card>
  </div>
  </>
  )
}

export default ShortProduct
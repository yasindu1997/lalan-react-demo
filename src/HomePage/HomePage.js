import React, { useState } from 'react'
import './style.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from '../assets/game.jpg'
import Form from 'react-bootstrap/Form';

function HomePage() {

  //state
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const [data,setData] = useState([]);

  const saveData = ()=>{
    
  }

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <br></br>
      <Form.Control value={email} onChange={(e)=>{setEmail(e.target.value)}} style={{ width: 400,marginBottom:7 }} type="email" placeholder="Enter Email" />
      <Form.Control style={{ width: 400,marginBottom:7 }} type="text" placeholder="Enter Password" />
      <Button variant="warning" onClick={saveData}>Save Data</Button>
    </div>
  )
}

export default HomePage;

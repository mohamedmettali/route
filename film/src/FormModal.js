import React, {useState} from 'react';
import Modal from 'react-modal';
import {  Button,Col,Form,Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import ReactStars from 'react-stars';

function FormModal({addHandler}) {

    const [modalIsOpen, setIsOpen] = useState(false);
    const [image, setimage] = useState('');
    const [rating, setrating] = useState('');
    const [name, setname] = useState('');
    const [date, setdate] = useState('');
    const [type, settype] = useState('');
    const [seasons, setseasons] = useState('');
    const [description, setdescription] = useState('');


    const add =() => {
      const newmovie = {
        image,
        rating,
        name,
        date,
        type,
        seasons,
        description
      }
      addHandler(newmovie)
      closeModal()
    }
  
      function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  
    return (
      <div>
       
             
        <Button  variant="primary" onClick={openModal}>Add Movie</Button>
        <Modal
          isOpen={modalIsOpen}
        
               >
       
       <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Image</Form.Label>
          <Form.Control type="text" placeholder="Enter Image" onChange={(e)=> {setimage(e.target.value)}} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Rating</Form.Label >
          <ReactStars
              count={5}
              onChange={(newRating)=>{setrating(newRating)}}
              size={24}
              color2={'#ffd700'}
             
            />
        </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name"  onChange={(e)=> {setname(e.target.value)}}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Date</Form.Label>
          <Form.Control type="number" placeholder="Date" onChange={(e)=> {setdate(e.target.value)}} />
        </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Type</Form.Label>
          <Form.Control type="text" placeholder="Type" onChange={(e)=> {settype(e.target.value)}}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Seasons</Form.Label>
          <Form.Control type="text" placeholder="Seasons" onChange={(e)=> {setseasons(e.target.value)}} />
        </Form.Group>
      </Row>

      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Description" onChange={(e)=> {setdescription(e.target.value)}} />
        </Form.Group>

     
      </Row>
<div style = {{textAlign:'center'}}>
<button type="button" className="btn btn-success" onClick={add}>Submit</button>
<button onClick={closeModal} type="button" className="btn btn-danger">Exit</button>
</div>
    </Form>
  
        </Modal>
      </div>
    );
  }
  
export default FormModal;

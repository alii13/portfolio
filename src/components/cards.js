import React from 'react'
import { FaRegFolderOpen } from 'react-icons/fa';
import {AiFillGithub} from 'react-icons/ai'
import {FiExternalLink} from 'react-icons/fi'
import { Card,Button } from 'react-bootstrap';
function cards(props) {
  //  console.log(props);
    const title=props.title;
    const description=props.description;
  //  console.log(title);
    return (

        <Card style={{ width: '18rem' }}>
        <header className="d-flex justify-content-end align-items-center" style={{height:"50px"}}>
         <div className="left-header">
         <FaRegFolderOpen  className="react-icons" />
         </div>

         <div className="right-header d-flex justify-content-center  align-items-center">
            <AiFillGithub className="side-icon"/> <FiExternalLink className="side-icon"/>
         </div>


        </header>
    
         <Card.Body>
              
             <Card.Title className="card-title">{title}</Card.Title>
             <Card.Text>
            {description}
             </Card.Text>
             <Button variant="primary">Go somewhere</Button>
         
         </Card.Body>
         <footer>

         </footer>
         </Card>
    )
}

export default cards

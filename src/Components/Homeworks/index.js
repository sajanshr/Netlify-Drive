import React from 'react';
import { Jumbotron, Container} from 'reactstrap';
import NavBar from '../Navbar/Navbar'
import { Table } from 'reactstrap';
// import { Link } from 'react-router-dom' ;

function Homeworks() {
  return (
    <div className="App">
     <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">WELCOME TO BOOTCAMP - Nov 8 EDITION</h1>
          <p className="lead">My Name is Sajan Shrestha and I am student here </p>
          <NavBar />

          <Table dark>
      <thead>
        <tr>
          <th>#</th>

          
          
          

          <th>Type</th>
          <th>Description</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Homework1</td>
          <td> Build a Winysco Website</td>
          <td><a href="https://github.com/sajanshr/Building-Wynsco-HTML"> Link</a> </td>
       
      </tr>
        <tr>
          <th scope="row">2</th>
          <td>Homework 2</td>
          <td>CSS with Code Pen</td>
          <td><a href="https://codepen.io/sajanshr/pen/bGrjLQy"> Link</a> </td>
       
      </tr>

      <tr>
          <th scope="row">3</th>
          <td>Homework 2</td>
          <td>Nav Bar with HTML</td>
          <td><a href="https://github.com/sajanshr/NavBar-"> Link</a> </td>
       
      </tr>

      <tr>
          <th scope="row">4</th>
          <td>Homework 2</td>
          <td>CSS codepen</td>
          <td><a href="https://codepen.io/sajanshr-the-looper/pen/WNEKzBp"> Link</a> </td>
       
      </tr>

      <tr>
          <th scope="row">5</th>
          <td>Homework 3.5 </td>
          <td>CSS Flex and Grid</td>
          <td><a href="https://github.com/sajanshr/CSS-Grid-Flex"> Link</a> </td>
       
      </tr>

      
        
      </tbody>
    </Table>
        </Container>
      </Jumbotron>
    </div>
    </div>
  );
}

export default Homeworks;

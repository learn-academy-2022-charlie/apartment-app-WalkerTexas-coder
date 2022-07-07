import React, { Component } from 'react'
import {
  Card, 
  CardImg,
  CardText, 
  CardBody,
  CardTitle, 
  CardSubtitle, 
  Button
} from 'reactstrap';

export default class ApartmentProtectedIndex extends Component {
  render() {
    const { apartments } = this.props
    console.log("props.apartments:", apartments);
    return (
      <>
        <h3>My Apartments</h3>
        <div>
          {apartments && apartments.map((value, index)=> {
            return ( 
            <Card key={index}>
              <CardImg className="card-img" top width="100%" src={value.image} alt="Card image cap"  />
              <CardBody>
                <CardTitle>{value.street}</CardTitle>
                <CardSubtitle>{value.city}</CardSubtitle>
                <CardText>{value.state}</CardText>
                <CardText>{value.manager}</CardText>
                <CardText>{value.price}</CardText>
                <CardText>{value.bedrooms}</CardText>
                <CardText>{value.bathrooms}</CardText>
                
                <CardText>{value.pets}</CardText>
                <div className='button-container'>
                  <Button>Edit</Button>
                  <Button>Delete</Button>
                </div>
              </CardBody>
            </Card>
            )
          })
          }
        </div>
      </>
    )
  }
}

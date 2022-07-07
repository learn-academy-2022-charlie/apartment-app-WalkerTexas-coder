// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import ApartmentProtectedIndex from './ApartmentIndex'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe("When ApartmentIndex renders", () => {
  const props = {
    apartments: [
      {
        id: 1, 
        street: "23 snugglebunny lane", 
        city: "Inglewood", 
        state: "CA", 
        manager: "Doctor Doom", 
        email: "doom@snugglebunny.com", 
        price: "5 hugs per month", 
        bedrooms: 2, 
        bathrooms: 2, 
        pets: "of course", 
        image: "www.urlhelper.com", 
        user_id: 2 }
    ]
  }
  let apartmentProIndexRender
  beforeEach(() => {
    apartmentProIndexRender = shallow(<ApartmentProtectedIndex {...props} />)
  })
  it("displays a heading", () => {
    
    const apartmentIndexHeading = apartmentProIndexRender.find("h3")
    expect(apartmentIndexHeading.text()).toEqual("ApartmentIndex")
  })
  it("displays a card from ReactStrap per apartment ", () => {
    const apartmentIndexCard = apartmentProIndexRender.find("Card")
    expect(apartmentIndexCard.length).toEqual(1)
  })
})

  
 



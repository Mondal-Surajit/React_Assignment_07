import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import ProductsList from './ProductsList'


describe('Test UserForm using Shallow rendering', () => {

let wrapper;
let props;

beforeEach(() => {
    props = {
        products: [
            {
                "id" : 1,
                "name" : "Product_1",
                "quantity" : "1",
                "price" : "Rs. 10"
    
            },
            {
                "id" : 2,
                "name" : "Product_2",
                "quantity" : "2",
                "price" : "Rs. 20"
    
     
            }
        ]
    }
    wrapper = shallow(<ProductsList  {...props}/>);
})

    it('renders "Product Name" as heading in second column' , () => {
        let secondColumnHeading = wrapper.find('th').at(1);
        expect(secondColumnHeading.render().text()).toContain('Product Name');
     })

     it('renders "Price" as heading in fourth column' , () => {
        let fourthColumnHeading = wrapper.find('th').at(3);
        expect(fourthColumnHeading.render().text()).toContain('Price');
     })
     it("passes the 2nd Product's name as props to second Product Component", () => {
       let secondProduct = wrapper.find('Product').at(1)
        expect(secondProduct.render().text()).toContain('Product_2');
    });

    it("passes the 2nd Product's price as props to second Product Component", () => {
        let secondProduct = wrapper.find('Product').at(1)
         expect(secondProduct.render().text()).toContain('20');
     });
});


describe('When products array passed to ProductList component is null', () => {
    let wrapper;
    let props;

    beforeEach(() => {  
        props = {
            products: null 
        }
        wrapper = shallow(<ProductsList {...props}/>);
    }); 

    it('should not crash and no Product Component is rendered', () => {
        let productelement = wrapper.find('Product');
        expect(productelement.length).toEqual(0);
    });

    

});
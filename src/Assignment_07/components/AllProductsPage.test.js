import React from 'react'
import {mount, shallow} from 'enzyme'
import AllProductsPage from './AllProductsPage'
import toJson from 'enzyme-to-json';


describe('AllProductsPage Snapshot', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<AllProductsPage/>);
    });

    test('renders correctly', () => {
        expect(toJson(wrapper)).toMatchSnapshot(); 
    }); 
     
});

describe('AllProductsPage rendering of elements' , () => {
    let wrapper1;
    beforeEach(() => { 
        wrapper1 = shallow(<AllProductsPage/>)
    })
    it('renders correct heading for Products List', () => {
        expect(wrapper1.find('h2').render().text()).toEqual("Products List");

    })  
    it('renders one ProductList React component', () => {
        expect(wrapper1.find('ProductsList').length).toEqual(1)
    })  
});

 
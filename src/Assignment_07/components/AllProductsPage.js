import React from 'react'
import ProductsList from './ProductsList'
import ProductApi from '../data/ProductApi';

export default class AllProductsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products : []
        }
    }

    componentDidMount() {
        this.setState({products: ProductApi.getAllproduct()});
    }

    render() { 
        return(
            <>
                <h2>Products List</h2>
                <ProductsList products={this.state.products} />
            </>
        );

    }
}
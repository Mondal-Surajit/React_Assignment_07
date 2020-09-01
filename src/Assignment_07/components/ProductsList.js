import React from 'react'
import Product from './Product'

export default class ProductsList extends React.Component {
    render() {
        
       // console.log("Product List render => products ="+ this.props.products); 
        let ProductNodes = this.props.products && this.props.products.map(product => (
            <Product key={product.id} id={product.id} name={product.name} quantity={product.quantity}>
                {product.price}
            </Product>
            ))
        
        return(
            <> 
                <table >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>

                    <tbody>
                        {ProductNodes}
                    </tbody>
                </table>
            </>
        );
    }
}
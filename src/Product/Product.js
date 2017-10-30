import React, { Component } from 'react';
import * as products from '../services/products';

class Product extends Component{
    constructor(props){
        super(props)

        this.state = {
            product: {}
        }
    }

componentDidMount(){
    products.get(this.props.match.params.id)
    .then(product => this.setState({product}))
}

render(){
    const {product} = this.state;
    return (
        <div>
            {/* This product is fully rendered on my screen using match and router, come by to check it out. */}
            <img className="product__image" src={product.image} alt={product.title} />
            <h1>{product.title}</h1>
            <p>{`$${product.price}`}</p>
            <p>{product.desc}</p>


            </div>
    )
}



}

export default Product;
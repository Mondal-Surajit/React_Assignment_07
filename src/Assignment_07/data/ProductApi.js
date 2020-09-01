import ProductData from './ProductData'

export default class ProductApi {
    static getAllproduct() {
        return ProductData.products;
    }
}
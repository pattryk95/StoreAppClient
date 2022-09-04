export interface ProductDTO{
    id: number,
    name: string,
    description?: string,
    price: number,
    pictureUrl: string,
    quantityInStock: number,
    category: string,
    brand: string
}
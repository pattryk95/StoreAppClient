import { ProductDTO } from "../../app/models/productDTO";
import ProductList from "./ProductList";

export default function Catalog(/*props*/{ products }: Props)
{
    return (
        <>
            <ProductList products={products} />
        </>
    )
}

interface Props
{
    products: ProductDTO[]
}

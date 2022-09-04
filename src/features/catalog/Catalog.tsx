import { ProductDTO } from "../../app/models/productDTO";

export default function Catalog(/*props*/{ products }: Props)
{
    return (
        <>
            <ul>
                {products?.map((product, index) =>
                (
                    <li key={index}>{product.name}</li>
                ))}
            </ul>

        </>
    )
}

interface Props
{
    products: ProductDTO[]
}
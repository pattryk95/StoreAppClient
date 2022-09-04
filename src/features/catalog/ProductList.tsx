import { List } from "@mui/material";
import { ProductDTO } from "../../app/models/productDTO";
import ProductCard from "./ProductCard";

export default function ProductList({ products }: Props)
{
    return (
        <List>
            {products?.map((product, index) =>
            (
                <ProductCard key={index} product={product} />
            ))}
        </List>
    )
}

interface Props
{
    products: ProductDTO[]
}
import { Grid } from "@mui/material";
import { ProductDTO } from "../../app/models/productDTO";
import ProductCard from "./ProductCard";

export default function ProductList({ products }: Props)
{
    return (
        <Grid container spacing={4}>
            {products?.map((product, index) =>
            (
                <Grid item xs={3} key={index}>
                    <ProductCard product={product} />
                </Grid>
            ))}
        </Grid>
    )
}

interface Props
{
    products: ProductDTO[]
}
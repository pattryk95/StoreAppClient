import { Typography } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductDTO } from "../../app/models/productDTO";
import { urlProducts } from "../../endpoints";

export default function ProductDetails()
{

    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<ProductDTO | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() =>
    {
        loadProduct();
    }, [id])

    function loadProduct()
    {
        axios.get(`${urlProducts}/${id}`)
            .then((response: AxiosResponse<ProductDTO>) => 
            {
                setProduct(response.data);
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }
    if (loading) return <h3>Loading...</h3>

    if (!product) return <h3>Product not found</h3>
    return (
        <Typography variant='h2'>
            <h1>{product?.name}</h1>
        </Typography>
    )

}
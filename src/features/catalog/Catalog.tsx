import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { ProductDTO } from "../../app/models/productDTO";
import { urlProducts } from "../../endpoints";
import ProductList from "./ProductList";

export default function Catalog()
{
    const [products, setProducts] = useState<ProductDTO[]>([]);

    useEffect(() =>
    {
        loadData();
    }, [])

    function loadData()
    {
        axios.get(urlProducts).then((response: AxiosResponse<ProductDTO[]>) =>
        {
            setProducts(response.data);
        })
            .catch(error => console.log(error))
    }

    return (
        <>
            <ProductList products={products} />
        </>
    )
}
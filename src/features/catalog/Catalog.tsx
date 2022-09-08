import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { ProductDTO } from "../../app/models/productDTO";
import { urlProducts } from "../../endpoints";
import Loading from "../utils/Loading";
import NotFound from "../utils/NotFound";
import ProductList from "./ProductList";

export default function Catalog()
{
    const [products, setProducts] = useState<ProductDTO[]>([]);
    const [loading, setLoading] = useState(true);
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
            .finally(() => setLoading(false))
    }
    if (loading) return (
        <Loading />
    )
    if (!products) return <NotFound itemName={(Object.keys(products)).toString()} />

    return (
        <>
            <ProductList products={products} />
        </>
    )
}
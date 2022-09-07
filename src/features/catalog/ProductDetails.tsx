import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
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
                console.log(response.data);
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }
    if (loading) return <h3>Loading...</h3>

    if (!product) return <h3>Product not found</h3>
    return (
        <Grid container spacing={6}>
            <Grid item xs={6}>
                <img src={product.pictureUrl} alt={product.name} style={{ width: '100%' }} />
            </Grid>
            <Grid item xs={6}>
                <Typography variant='h3'>
                    {product.name}
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography variant='h4' color='secondary'>
                    {product.price} zł
                </Typography>
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>{product.name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Description</TableCell>
                                <TableCell>{product.description}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Brand</TableCell>
                                <TableCell>{product.brand}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Category</TableCell>
                                <TableCell>{product.category}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Quantity in stock</TableCell>
                                <TableCell>{product.quantityInStock}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )

}
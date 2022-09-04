import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";
import { ProductDTO } from "../../app/models/productDTO";

export default function ProductCard({ product }: Props)
{
    return (
        <ListItem disablePadding>
            <ListItemAvatar>
                <Avatar src={product.pictureUrl} />
            </ListItemAvatar>
            <ListItemText
                primary={
                    <>
                        {product.name} {product.price} zł
                    </>
                }
                secondary={
                    <>
                        {product.description ?? ""} ({product.quantityInStock} w magazynie)
                    </>

                } />

        </ListItem>
    )
}

interface Props
{
    product: ProductDTO
}
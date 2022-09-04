import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { ProductDTO } from "../../app/models/productDTO";

export default function Catalog(/*props*/{ products }: Props)
{
    return (
        <>
            <List>
                {products?.map((product, index) =>
                (
                    <ListItem disablePadding key={index}>
                        <ListItemAvatar>
                            <Avatar src={product.pictureUrl} />
                        </ListItemAvatar>
                        <ListItemText primary={product.name} />

                    </ListItem>
                ))}
            </List>

        </>
    )
}

interface Props
{
    products: ProductDTO[]
}

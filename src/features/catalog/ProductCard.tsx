import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { ProductDTO } from "../../app/models/productDTO";

export default function ProductCard({ product }: Props)
{
    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image={product.pictureUrl}
                alt="product"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {product.price} zł
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Kup teraz</Button>
                <Button size="small">Obserwuj</Button>
            </CardActions>
        </Card>
    )
}

interface Props
{
    product: ProductDTO
}
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { ProductDTO } from "../../app/models/productDTO";

export default function ProductCard({ product }: Props)
{
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: 'secondary.main' }}>
                        {product.name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={product.name}
                titleTypographyProps={{
                    sx: { fontWeight: 'bold', color: 'primary.main' }
                }}
                subheader={`${product.brand} / ${product.category}`}

            />
            <CardMedia
                sx={{ height: 140, backgroundSize: 'contain', bgcolor: 'primary.contrastText' }}
                component="img"
                height="140"
                image={product.pictureUrl}
                alt="product"
            />
            <CardContent>
                <Typography gutterBottom color='secondary' variant="h5">
                    {product.price} zł
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Add to cart</Button>
                <Button size="small">View</Button>
            </CardActions>
        </Card>
    )
}

interface Props
{
    product: ProductDTO
}
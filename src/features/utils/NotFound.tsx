import { Grid, Typography } from "@mui/material";

export default function NotFound({ itemName }: Props)
{
    const capitalize = (s: string) => s && s[0].toUpperCase() + s.slice(1)
    return (

        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
        >
            <Grid item xs={3}>
                <Typography variant='h3'>
                    {capitalize(itemName)} not found
                </Typography>
            </Grid>
        </Grid>
    )
}

interface Props
{
    itemName: string
}
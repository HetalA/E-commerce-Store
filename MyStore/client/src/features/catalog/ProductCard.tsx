import { Card, CardMedia, CardContent, Typography, CardActions, Button, CardHeader, Avatar } from "@mui/material";
import { Product } from "../../app/models/product";
import { Link } from "react-router-dom";

interface Props{
  item: Product;
}

export default function ProductCard({item}: Props) {
  return(
    <>
      <Card>
      <CardHeader
       avatar={
        <Avatar sx ={{backgroundColor: 'secondary.main'}}>
          {item.name.charAt(0).toUpperCase()}
        </Avatar>
       }
       title={item.name}
       titleTypographyProps={{
        sx: {fontWeight: 'bold', color: 'primary.main'}
       }}
      />
      <CardMedia
        sx={{ height: 140, backgroundSize:'contain', bgcolor: 'primary.light' }}
        image={item.pictureUrl}
        title={item.name}
      />
      <CardContent>
        <Typography gutterBottom color="secondary" variant="h5" component="div">
          ${(item.price/100).toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.brand} / {item.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to cart</Button>
        <Button component={Link} to={`/catalog/${item.id}`} size="small">View</Button>
      </CardActions>
    </Card>
    </>
  )
}
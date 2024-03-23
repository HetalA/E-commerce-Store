import { Avatar, Button, Grid } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

interface Props{
  products: Product[];
}

export default function ProductList({products}: Props) {
  return (
    <>
      <Grid container spacing={4}>
        {products.map((item: any) => (
          <Grid item xs={3} key={item.id}>
          <ProductCard item={item}></ProductCard>      
          </Grid>  
          ))
        }
      </Grid>
    </>
  )
}
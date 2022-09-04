import { Container, CssBaseline, Typography } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { urlProducts } from "../../endpoints";
import Catalog from "../../features/catalog/Catalog";
import { ProductDTO } from "../models/productDTO";
import Header from "./Header";

function App()
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
  }

  return (
    <>
      <CssBaseline />
      <Header />
      <Container>
        <Catalog products={products} />
      </Container>
    </>
  );
}

export default App;

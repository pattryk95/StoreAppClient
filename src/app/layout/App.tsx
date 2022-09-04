import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { urlProducts } from "../../endpoints";
import Catalog from "../../features/catalog/Catalog";
import { ProductDTO } from "../models/productDTO";

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
      <h1>StoreApp</h1>
      <Catalog products={products} />
    </>
  );
}

export default App;

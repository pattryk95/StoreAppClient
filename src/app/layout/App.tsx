import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { urlProducts } from "../../endpoints";
import { productDTO } from "../models/products";

function App() {

  const [products, setProducts] = useState<productDTO[]>([]);

  useEffect(() => {
    loadData();
  }, [])

  function loadData() {
    axios.get(urlProducts).then((response: AxiosResponse<productDTO[]>) => {
      setProducts(response.data);
    })
  }

  return (
    <>
      <h1>StoreApp</h1>
      <ul>
        {products?.map((product, index) =>
        (
          <li key={index}>{product.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;

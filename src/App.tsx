import {useEffect, useState} from "react";
import SingleProduct from "./components/SingleProduct";
// styles
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import './App.css';

interface ProductType {
    title: string,
    category: string,
    price: number,
    image: string
}

const App: React.FC = () => {
  const [productList, updateProductList] = useState<ProductType[]>([]);

  useEffect(()=> {
      const getProducts = async () : Promise<Array<ProductType>> => {
          const products = await (await fetch('https://fakestoreapi.com/products?limit=5')).json()
          updateProductList(products)
          return products
      }
      getProducts()
  }, [])

  return (
    <div className="App">
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1>Hello!</h1>
                </Grid>
                {productList.map(product => {
                    return (
                        <SingleProduct title={product.title} category={product.category} price={product.price} image={product.image}/>
                    )
                })}
            </Grid>
        </Container>
    </div>
  );
}

export default App;

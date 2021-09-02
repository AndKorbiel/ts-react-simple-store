import {useEffect, useState} from "react";
import SingleProduct from "./components/SingleProduct";
import SidebarCart from './components/SidebarCart';
// styles
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import './App.css';

export interface ProductType {
    title: string,
    category: string,
    price: number,
    image: string
}

const App: React.FC = () => {
  const [productList, updateProductList] = useState<ProductType[]>([]);
  const [cart, updateCart] = useState<ProductType[]>([]);

  const handleAddToCart = (item: ProductType) => {
    updateCart(prev => {
        return [...prev, {...item}]
    })
  }

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
                        <SingleProduct
                            product={product}
                            handleAdd={handleAddToCart}
                        />
                    )
                })}
                <hr />
                <p>Cart</p>
                {cart.map(item => {
                    return (
                        <p>{item.title}</p>
                    )
                })}
            </Grid>
            <SidebarCart />
        </Container>
    </div>
  );
}

export default App;

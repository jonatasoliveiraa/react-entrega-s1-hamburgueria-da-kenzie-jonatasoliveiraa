import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ListCards from "./components/ListCards";
import Cart from "./components/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import api from "./services/api";

function App() {


  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);



  useEffect(() => {
    api.get("products")
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(error));
  }, []);

  function removeItem(item){
    setCurrentSale(currentSale.filter(elem => elem !== item))
    
  }

  function cleanCart() {
    setCurrentSale([]);
  }

  


  return (
    <div className="App">
      <Header filteredProducts={filteredProducts} products={products} setFilteredProducts={setFilteredProducts}/>

      <main>
        
        <ul className="container">
          <ListCards products={products} filteredProducts={filteredProducts} setCurrentSale={setCurrentSale} currentSale={currentSale}/>
        </ul>

        
        <Cart currentSale={currentSale} removeItem={removeItem} cleanCart={cleanCart}/>
      </main>
      <ToastContainer 
         theme= "colored"
         position="top-center"
         autoClose={2000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
      />
      
    </div>
  );
}

export default App;

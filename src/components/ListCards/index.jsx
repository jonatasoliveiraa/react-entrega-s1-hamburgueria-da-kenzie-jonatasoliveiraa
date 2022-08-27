import Button from "../Button";
import { Card } from "./style.js";
import {toast} from "react-toastify"

const ListCards = ({ filteredProducts,products, setCurrentSale, currentSale }) => {
  return (
    <>
      {
        filteredProducts.length > 0 ? 
        filteredProducts.map((food) => (
          <Card key={food.id}>
            <div className="divImg">
              <img src={food.img} alt={food.name} />
            </div>
  
            <div className="divInfos">
              <p className="title">{food.name}</p>
              <span>{food.category}</span>
              <p className="price">
                {food.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
              <Button
                onClick={() => {
                  const findProducts = currentSale.find((elem) => elem.id === food.id);
                  findProducts === undefined ? setCurrentSale([...currentSale, food])  : toast.error(`${food.name} já incluso no carrinho`)
                  findProducts === undefined ? toast.success(`${food.name} adicionado com sucesso!`) : <></>

                }}
              >
                Adicionar
              </Button>
            </div>
          </Card>
        )) : products.map((food) => (
          <Card key={food.id}>
            <div className="divImg">
              <img src={food.img} alt={food.name} />
            </div>
  
            <div className="divInfos">
              <p className="title">{food.name}</p>
              <span>{food.category}</span>
              <p className="price">
                {food.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
              <Button
                onClick={() => {
                  const findProducts = currentSale.find((elem) => elem.id === food.id);
                  
                  findProducts === undefined ?  setCurrentSale([...currentSale, food]) : toast.error(`${food.name} já incluso`)
                  findProducts === undefined ? toast.success(`${food.name} adicionado com sucesso!`) : <></>
                }}
              >
                Adicionar
              </Button>
            </div>
          </Card>
        ))

      }

      
    </>
  );
};
export default ListCards;

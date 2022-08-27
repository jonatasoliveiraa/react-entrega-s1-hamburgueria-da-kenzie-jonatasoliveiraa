import Button from "../Button";
import { CardsCart } from "./style";

const ListCart = ({ currentSale, removeItem }) => {
  return (
    <>
      {currentSale.map((food) => (
        <CardsCart key={food.id}>
          <div className="containerItemCart">
            <div className="divProduct">
              <div className="divImg">
                <img src={food.img} alt={food.name} />
              </div>
              <div className="divInfos">
                <p className="title">{food.name}</p>
                <span>{food.category}</span>
              </div>
            </div>
              <Button onClick={() => removeItem(food)}>Remover</Button>
          </div>
        </CardsCart>
      ))}
    </>
  );
};
export default ListCart;

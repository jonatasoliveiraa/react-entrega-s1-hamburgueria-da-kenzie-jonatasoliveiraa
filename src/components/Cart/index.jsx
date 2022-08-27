import Button from "../Button";
import ListCart from "../ListCart";
import { Container, CartTotal } from "./style";

const Cart = ({ currentSale, removeItem, cleanCart }) => {
  const reduceValue = currentSale.reduce(
    (previousValue, currentValue) => previousValue + currentValue.price,
    0
  );

  return (
    <Container>
      <div className="containerCart">
        <div className="cartHeader">
          <p>Carrinho de compras</p>
        </div>
        {currentSale.length > 0 ? (
          <>
          
            <ul className="listCart">
              <ListCart currentSale={currentSale} removeItem={removeItem} />
            </ul>

            <CartTotal className="cartTotal">
              <div className="totalInfos">
                <p>Total</p>
                <p className="price">
                  {reduceValue.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>
              <div className="divButton">
                <Button onClick={cleanCart}>Remover Todos</Button>
              </div>
            </CartTotal>
          </>
        ) : (
          <div className="cartInfos">
            <p>Sua sacola esta vazia</p>
            <span>Adicione itens</span>
          </div>
        )}
      </div>
    </Container>
  );
};
export default Cart;

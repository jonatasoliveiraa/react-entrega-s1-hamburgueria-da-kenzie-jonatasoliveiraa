import styled from "styled-components";

export const Container = styled.div`
@media (min-width:300px) and (max-width:600px){

  width: 100%;
  height: 14rem;
  margin-top: 16px;
  display: flex;
  justify-content: center;

  .containerCart{
    width: 90%;
    background: #f5f5f5;

  }
  .cartHeader {
    display: flex;
    align-items: center;

    width: 100%;
    height: 65px;

    background: #27ae60;
    color: #ffffff;
    font-size: 1.125rem;
    font-weight: 700;

    border-radius: 8px 8px 0px 0px;

    p {
      margin-left: 20px;
    }
  }

  .cartInfos {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    height: 158px;

    font-weight: 700;
    font-size: 1.125rem;

    span {
      font-size: 0.875rem;
      font-weight: 400;
      color: #828282;
    }
  }
  .listCart {
    margin: 0;
    padding: 0;
    gap: 0;
    height: 17.75rem;

    overflow: scroll;
    overflow-x: hidden;

    background-color: #f5f5f5;
  }
}
@media (min-width:600px) and (max-width:835px){

width: 100%;
height: 14rem;
margin-top: 16px;
display: flex;
justify-content: center;
margin-left:20px;
margin-right:20px;

.containerCart{
  width: 320px;
  background: #f5f5f5;
  

}
.cartHeader {
  display: flex;
  align-items: center;

  width: 100%;
  height: 65px;

  background: #27ae60;
  color: #ffffff;
  font-size: 1.125rem;
  font-weight: 700;

  border-radius: 8px 8px 0px 0px;

  p {
    margin-left: 20px;
  }
}

.cartInfos {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 158px;

  font-weight: 700;
  font-size: 1.125rem;

  span {
    font-size: 0.875rem;
    font-weight: 400;
    color: #828282;
  }
}
.listCart {
  margin: 0;
  padding: 0;
  gap: 0;
  height: 17.75rem;

  overflow: scroll;
  overflow-x: hidden;

  background-color: #f5f5f5;
}
}
@media (min-width:835px) and (max-width:1024px){

width: 100%;
height: 14rem;
margin-top: 16px;
display: flex;
justify-content: center;
margin-left:20px;
margin-right:20px;

.containerCart{
  width: 320px;
  background: #f5f5f5;
  

}
.cartHeader {
  display: flex;
  align-items: center;

  width: 100%;
  height: 65px;

  background: #27ae60;
  color: #ffffff;
  font-size: 1.125rem;
  font-weight: 700;

  border-radius: 8px 8px 0px 0px;

  p {
    margin-left: 20px;
  }
}

.cartInfos {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 158px;

  font-weight: 700;
  font-size: 1.125rem;

  span {
    font-size: 0.875rem;
    font-weight: 400;
    color: #828282;
  }
}
.listCart {
  margin: 0;
  padding: 0;
  gap: 0;
  height: 17.75rem;

  overflow: scroll;
  overflow-x: hidden;

  background-color: #f5f5f5;
}
}
@media (min-width:1024px) and (max-width:2056px){

height: 14rem;
margin: 16px 100px 0 0;
display: flex;
justify-content: center;


.containerCart{
  width: 320px;
  background: #f5f5f5;
  

}
.cartHeader {
  display: flex;
  align-items: center;

  width: 100%;
  height: 65px;

  background: #27ae60;
  color: #ffffff;
  font-size: 1.125rem;
  font-weight: 700;

  border-radius: 8px 8px 0px 0px;

  p {
    margin-left: 20px;
  }
}

.cartInfos {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 158px;

  font-weight: 700;
  font-size: 1.125rem;

  span {
    font-size: 0.875rem;
    font-weight: 400;
    color: #828282;
  }
}
.listCart {
  margin: 0;
  padding: 0;
  gap: 0;
  height: 17.75rem;

  overflow: scroll;
  overflow-x: hidden;

  background-color: #f5f5f5;
}
}
`;

export const CartTotal = styled.div`
@media (min-width:300px) and (max-width:600px){

  background: #f5f5f5;
  border-top: 2px solid #e0e0e0;
  border-radius: 0px 0px 5px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .totalInfos {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    width: 90%;
    p {
      margin: 0;
      font-weight: 600;
      font-size: 14px;
    }
    .price {
      color: #828282;
    }
  }
  .divButton{
    width: 90%;

  }
  button {
    width: 100%;
    margin-bottom: 20px;
    background-color: #e0e0e0;
    border: 2px solid #e0e0e0;
    color: #828282;
    font-weight: 600;
    font-size: 16px;
  }
}
@media (min-width:600px) and (max-width:835px){

background: #f5f5f5;
border-top: 2px solid #e0e0e0;
border-radius: 0px 0px 5px 5px;
display: flex;
flex-direction: column;
align-items: center;
.totalInfos {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  width: 90%;
  p {
    margin: 0;
    font-weight: 600;
    font-size: 14px;
  }
  .price {
    color: #828282;
  }
}
.divButton{
  width: 90%;

}
button {
  width: 100%;
  margin-bottom: 20px;
  background-color: #e0e0e0;
  border: 2px solid #e0e0e0;
  color: #828282;
  font-weight: 600;
  font-size: 16px;
}
}
@media (min-width:835px) and (max-width:1024px){

background: #f5f5f5;
border-top: 2px solid #e0e0e0;
border-radius: 0px 0px 5px 5px;
display: flex;
flex-direction: column;
align-items: center;
.totalInfos {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  width: 90%;
  p {
    margin: 0;
    font-weight: 600;
    font-size: 14px;
  }
  .price {
    color: #828282;
  }
}
.divButton{
  width: 90%;

}
button {
  width: 100%;
  margin-bottom: 20px;
  background-color: #e0e0e0;
  border: 2px solid #e0e0e0;
  color: #828282;
  font-weight: 600;
  font-size: 16px;
}
}
@media (min-width:1024px) and (max-width:2056px){

background: #f5f5f5;
border-top: 2px solid #e0e0e0;
border-radius: 0px 0px 5px 5px;
display: flex;
flex-direction: column;
align-items: center;
.totalInfos {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  width: 90%;
  p {
    margin: 0;
    font-weight: 600;
    font-size: 14px;
  }
  .price {
    color: #828282;
  }
}
.divButton{
  width: 90%;

}
button {
  width: 100%;
  margin-bottom: 20px;
  background-color: #e0e0e0;
  border: 2px solid #e0e0e0;
  color: #828282;
  font-weight: 600;
  font-size: 16px;
}
}
`;

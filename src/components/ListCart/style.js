import styled from "styled-components";

export const CardsCart = styled.li`
@media (min-width:300px) and (max-width:375px){

  list-style: none;

  margin-top: 20px;
  width: 100%;

  .containerItemCart {
    display: flex;
    justify-content: space-between;
    width: 95%;

  }
  .divProduct {
    display: flex;
    align-items: flex-start;

    margin-left: 1rem;
  }
  .divImg {
    width: 5rem;
    height: 5rem;

    background: #e0e0e0;
    border-radius: 5px;

    img {
      width: 100%;
    }
  }
  .divInfos {
    margin-left: 1rem;
    margin-right: 6px;

    .title {
      font-size: 0.875rem;
      font-weight: 700;

      max-width: 12ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      margin-top: 8px;
    }
    span {
      font-size: 0.75rem;
      font-weight: 400;
      color: #828282;
    }
  }
  button {
    padding: 0;
    height: 20px;
    margin-top: 8px;

    background-color: #f5f5f5;
    color: #828282;
    border: none;
  }
}
@media (min-width:375px) and (max-width:600px){

list-style: none;

margin-top: 20px;
width: 100%;

.containerItemCart {
  display: flex;
  justify-content: space-between;
  width: 95%;

}
.divProduct {
  display: flex;
  align-items: flex-start;

  margin-left: 1rem;
}
.divImg {
  width: 5rem;
  height: 5rem;

  background: #e0e0e0;
  border-radius: 5px;

  img {
    width: 100%;
  }
}
.divInfos {
  margin-left: 1rem;
  margin-right: 6px;

  .title {
    font-size: 0.875rem;
    font-weight: 700;

   

    margin-top: 8px;
  }
  span {
    font-size: 0.75rem;
    font-weight: 400;
    color: #828282;
  }
}
button {
  padding: 0;
  height: 20px;
  margin-top: 8px;

  background-color: #f5f5f5;
  color: #828282;
  border: none;
}
}
@media (min-width:600px) and (max-width:2560px){

list-style: none;

margin-top: 20px;
width: 100%;

.containerItemCart {
  display: flex;
  justify-content: space-between;
  width: 103%;

}
.divProduct {
  display: flex;
  align-items: flex-start;

  margin-left: 1rem;
}
.divImg {
  width: 5rem;
  height: 5rem;

  background: #e0e0e0;
  border-radius: 5px;

  img {
    width: 100%;
  }
}
.divInfos {
  margin-left: 1rem;
  margin-right: 6px;


  .title {
    font-size: 0.875rem;
    font-weight: 700;
    max-width: 15ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
   

    margin-top: 8px;
  }
  span {
    font-size: 0.75rem;
    font-weight: 400;
    color: #828282;
  }
}
button {
  padding: 0;
  height: 20px;
  margin-top: 8px;
  margin-right: 1rem;


  background-color: #f5f5f5;
  color: #828282;
  border: none;
}
}
`;

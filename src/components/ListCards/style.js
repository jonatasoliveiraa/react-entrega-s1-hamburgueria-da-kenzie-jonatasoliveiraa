import styled from "styled-components";

export const Card = styled.li`
  list-style: none;
  background: #ffffff;

  border: 2px solid #e0e0e0;
  border-radius: 5px;
  width: 18.75rem;
  height: 21.625rem;
  margin-left: 16px;
  margin-bottom: 20px;

  .divImg {
    display: flex;
    justify-content: center;
    
    width: 100%;
    background: #f5f5f5;

    img {
      width: 185px;
      padding: 0 30px;
    }
  }
  .divInfos {
    margin-left: 20px;
    
    p {
      margin: 10px 0;
    }
    .title {
      font-weight: 700;
      font-size: 1.125rem;
    }
    span {
      font-weight: 400;
      font-size: 0.75rem;
      color: #828282;
    }
    .price {
      font-weight: 600;
      font-size: 0.875rem;
      color: #27ae60;
    }
  }
`;

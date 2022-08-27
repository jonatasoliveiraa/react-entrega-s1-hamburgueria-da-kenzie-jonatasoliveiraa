import styled from "styled-components";

export const Container = styled.header`
@media (min-width:300px) and (max-width:500px){
  display: flex;
  align-items: center;
  padding: 20px 0;
  width: 100vw;
  height: 80px;
  
  background-color: #f5f5f5;
}
@media (min-width:500px) and (max-width:600px){
  display: flex;
  align-items: center;
  padding: 20px 0;
  width: 100vw;
  height: 80px;
  
  background-color: #f5f5f5;
}
@media (min-width:600px) and (max-width:835px){
  display: flex;
  align-items: center;
  padding: 20px 0;
  width: 100vw;
  height: 80px;
  
  background-color: #f5f5f5;
}
@media (min-width:835px) and (max-width:1024px){
  display: flex;
  align-items: center;
  padding: 20px 0;
  width: 100vw;
  height: 80px;
  
  background-color: #f5f5f5;
}
@media (min-width:1024px) and (max-width:2056px){
  display: flex;
  align-items: center;
  
  width: 100vw;
  height: 80px;

  background-color: #f5f5f5;
}

`;

export const Section = styled.section`
@media (min-width:300px) and (max-width:500px){
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 10px;
  
  form {
    display: flex;
    align-items: center;
    
    background-color: #ffffff;
    
    padding: 5px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;

    input {
      border: none;
      outline: none;
    }
  }

}
@media (min-width:500px) and (max-width:600px){
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
  gap: 10px;
  
  form {
    display: flex;
    align-items: center;
    
    background-color: #ffffff;
    
    padding: 5px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;

    input {
      border: none;
      outline: none;
    }
  }
}
@media (min-width:600px) and (max-width:835px){
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
  gap: 10px;
  
  form {
    display: flex;
    align-items: center;
    
    background-color: #ffffff;
    
    padding: 5px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;

    input {
      padding: 10px 20px;
      border: none;
      outline: none;
    }
  }

}
@media (min-width:835px) and (max-width:1024px){
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
  gap: 10px;
  
  form {
    display: flex;
    align-items: center;
    
    background-color: #ffffff;
    
    padding: 5px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;

    input {
      padding: 10px 20px;
      border: none;
      outline: none;
    }
  }

}
@media (min-width:1024px) and (max-width:2056px){
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  width: 100%;
  margin: 0 100px;

  form {
    display: flex;
    align-items: center;
    
    background-color: #ffffff;
    
    padding: 5px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;

    input {
      padding: 10px 20px;
      border: none;
      outline: none;
    }
  }

}
`;

import { Container,Section } from "./style";
import Logo from "../../assets/Mask Group.svg";
import Button from "../Button";
import { useState } from "react";

const Header = ({products,setFilteredProducts}) => {

  // const filtered = products.filter((elem) => elem.name.includes(inputValue))

  function filtered(value){
    const global = products.filter((product) =>{
      const search = value.toLowerCase()
      if(product.name.toLowerCase() === search){
        return product
      }
      if(product.category.toLowerCase() === search){
        return product
      }
      return product.name.toLowerCase().includes(search) || product.category.toLowerCase().includes(search)
    })
    if(!global){
     return setFilteredProducts([])

    }
    setInpuValue("")
    return setFilteredProducts(global)
  }

  const [inputValue, setInpuValue] = useState("")
  return (
    <Container>

      <Section>
        <div>
          <img src={Logo} alt="" />
        </div>


        <form onSubmit={(event) => event.preventDefault()}>
          <input type="text" placeholder="Digitar Pesquisa"
          value={inputValue}
          onChange={(event) => setInpuValue(event.target.value)} />
          <Button onClick={()=> filtered(inputValue)}>Pesquisar</Button>
        </form>


      </Section>
    </Container>
  );
};
export default Header;

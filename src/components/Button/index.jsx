import { ButtonMain } from "./style"

const Button = ({children, onClick}) => {
    return (
    <ButtonMain onClick={onClick}>
        {children}
    </ButtonMain>
    );
  };
  export default Button;
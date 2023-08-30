import { HeaderProps } from "../../types";

const Header = (name: HeaderProps) => {
  return <h1>{name.name}</h1>;
};

export default Header;

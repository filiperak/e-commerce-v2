import React from "react";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import { HeaderContainer, HeaderRigth, SearchBar } from "./styled";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const Header = () => {
  return (
    <HeaderContainer>
      <Arrow/>
      <SearchBar>
        <input type="text" placeholder="Search products..." />
        <SearchIcon />
      </SearchBar>
      <HeaderRigth>
        <PersonOutlineIcon />
        <ShoppingCartIcon />
        <span>0</span>
      </HeaderRigth>
    </HeaderContainer>
  );
};

export default Header;

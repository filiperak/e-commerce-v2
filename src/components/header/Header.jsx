import React, { useEffect, useState } from "react";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import { HeaderContainer, HeaderRigth, SearchBar } from "./styled";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useNavigate } from "react-router-dom";
import OptionsMenu from "../optionsMenu/OptinosMenu";

const Header = ({ handleInput }) => {
  const navigate = useNavigate();
  const [inputVal, setInputVal] = useState("");
  handleInput(inputVal);
  return (
    <HeaderContainer>
      <Arrow onClick={() => navigate("/")} />
      <SearchBar>
        <OptionsMenu />
        <input
          type="text"
          placeholder="Search products..."
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <SearchIcon />
      </SearchBar>
      <HeaderRigth>
        <PersonOutlineIcon />
        <ShoppingCartIcon onClick={() => navigate("/cart")} />
        <span>0</span>
      </HeaderRigth>
    </HeaderContainer>
  );
};

export default Header;

import React, { useContext } from 'react';
import { NavLinks, ProductNavbar } from './styled';
import { useNavigate } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { CategoryContext } from '../../context/CategoryContext';
const ProductNav = () => {
    const { categoryState } = useContext(CategoryContext);
    const navigate = useNavigate();
  return (
    <ProductNavbar>
        <KeyboardBackspaceIcon onClick={() => navigate(-1)}/>
        <NavLinks>
            <span>Home/</span>
            <span>Products/</span>
            <span>Home/</span>
        </NavLinks>
    </ProductNavbar>
  )
}

export default ProductNav
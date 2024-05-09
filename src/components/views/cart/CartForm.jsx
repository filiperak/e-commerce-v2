import React, { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { totalSumFunc } from "../../../utility/totalSumFunc";
import {
  FormContainer,
  AccordianHead,
  MoreArrowDiv,
  LeftContainer,
  SummaryList,
  AccordianContainer,
  SummaryListItem,
  SummaryListItemImg,
  ShippingInfo
} from "./styled";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import SettingsAccessibilityOutlinedIcon from '@mui/icons-material/SettingsAccessibilityOutlined';
const CartForm = () => {
  const { cartState, cartDispatch } = useContext(CartContext);
  const [showMore, setShowMore] = useState([]);

  const handleShow = (currentId) => {
    let copyShowMore = [...showMore]
    const findIndex = copyShowMore.indexOf(currentId)
    if(findIndex === -1){
        copyShowMore.push(currentId)
    }else{
        copyShowMore.splice(findIndex,1)
    }
    setShowMore(copyShowMore)
  }
  return (
    <FormContainer>
      <AccordianContainer>
        <AccordianHead onClick={() => handleShow(1)}>
          <LeftContainer>
            <LocalMallOutlinedIcon />
            <p>Show order summary</p>
              {showMore ? (
                <KeyboardArrowUpOutlinedIcon />
              ) : (
                <KeyboardArrowDownOutlinedIcon />
              )}
          </LeftContainer>
          <p> {`Total: $${totalSumFunc(cartState)}`}</p>
        </AccordianHead>
        {showMore === 1 && (
          <SummaryList>
            {cartState.map((elem) => (
              <SummaryListItem key={elem.id}>
                <SummaryListItemImg>
                  <img src={elem.img} />
                  <p>{elem.quantity}</p>
                </SummaryListItemImg>
                <p>{elem.title}</p>
                <p>${elem.price}</p>
              </SummaryListItem>
            ))}
          </SummaryList>
        )}
      </AccordianContainer>
      <h3>Customer information</h3>
      <h6>Please enter user information and shipping address.</h6>
      <AccordianContainer>
        <AccordianHead  onClick={() => handleShow(2)}>
            <LeftContainer>
                <SettingsAccessibilityOutlinedIcon/>
                <p>Enter customer and shipping info</p>
            </LeftContainer>
              {showMore ? (
                <KeyboardArrowUpOutlinedIcon />
              ) : (
                <KeyboardArrowDownOutlinedIcon />
              )}
        </AccordianHead>
        {showMore === 2 && <ShippingInfo>
            <p>Customer info</p>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email"/>
            <p>Shipping details</p>
            <input type="text" placeholder="City" />
            <input type="text" placeholder="Addresse" />
            </ShippingInfo>}
      </AccordianContainer>
    </FormContainer>
  );
};

export default CartForm;

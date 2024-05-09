import React, { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { totalSumFunc } from "../../../utility/totalSumFunc";
import {
  FormContainer,
  FormTotal,
  MoreArrowDiv,
  LeftContainer,
  SummaryList,
  SummaryContainer,
  SummaryListItem,
  SummaryListItemImg
} from "./styled";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const CartForm = () => {
  const { cartState, cartDispatch } = useContext(CartContext);
  const [showMore, setShowMore] = useState(false);
  return (
    <FormContainer>
      <SummaryContainer>
        <FormTotal>
          <LeftContainer>
            <LocalMallOutlinedIcon />
            <p>Show order summary</p>
            <MoreArrowDiv onClick={() => setShowMore(!showMore)}>
              {showMore ? (
                <KeyboardArrowUpOutlinedIcon />
              ) : (
                <KeyboardArrowDownOutlinedIcon />
              )}
            </MoreArrowDiv>
          </LeftContainer>
          <p> {`Total: $${totalSumFunc(cartState)}`}</p>
        </FormTotal>
        {showMore && 
        <SummaryList>
            {cartState.map(elem => (
                <SummaryListItem key={elem.id}>
                    <SummaryListItemImg>
                    <img src={elem.img} />
                    <p>{elem.quantity}</p>
                    </SummaryListItemImg>
                    <p>{elem.title}</p>
                    <p>${elem.price}</p>
                </SummaryListItem>
            ))}
            </SummaryList>}
      </SummaryContainer>
      test
    </FormContainer>
  );
};

export default CartForm;

import React, { useEffect, useState } from "react";
import {
  AdminContainer,
  AdminProductList,
  AdminProductListItem,
  AdminProductListItemInfo,
  ProductIcons,
  ProductInfo,
} from "./styled";
import { api } from "../../../services/api";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Admin = () => {
  const [products, setProducts] = useState([]);

  async function getProducts(URL) {
    try {
      let apiUrl = (URL += `?limit=100`);
      const response = await fetch(apiUrl);
      const result = await response.json();
      setProducts(result.products);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getProducts(api);
  }, []);

  async function deleteElement(elemId) {
    try {
      const response = await fetch(`${api}/${elemId}`, {
        method: "DELETE",
      });
      const result = await response.json();
      if (response.ok) {
        setProducts(products.filter((product) => product.id !== elemId));
      } else {
        console.error("Failed to delete product:", result.error); // Log error message if deletion fails
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  }
  
  return (
    <>
      <AdminContainer>
        <h3>
          This is a admin page. Here you can update, create and delete products.
        </h3>
        <AdminProductList>
          {products.map((elem) => {
            return (
              <AdminProductListItem>
                <ProductInfo>
                  <p>{`ID:${elem.id}`}</p>
                  <img src={elem.thumbnail} />
                  <p>{elem.title}</p>
                </ProductInfo>
                <ProductIcons>
                  <EditIcon />
                  <DeleteOutlineIcon onClick={() => deleteElement(elem.id)} />
                </ProductIcons>
              </AdminProductListItem>
            );
          })}
        </AdminProductList>
      </AdminContainer>
    </>
  );
};

export default Admin;

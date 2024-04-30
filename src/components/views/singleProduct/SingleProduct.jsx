import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../../services/api';
import { SingleProductContainer } from './styled';
import ImageSlider from '../../imageSlider/ImageSlider';
import SingleProductImages from './SingleProductImages';

const SingleProduct = () => {
    const {productId} = useParams()
    const [singleProduct,setSingleProduct] = useState([])
    async function fetchSingleProduct(){
        try{
            const response = await fetch(`${api}/${productId}`)
            const result = await response.json();
            if(result){
                setSingleProduct(result)
                console.log(singleProduct);
            }
        }catch(e){
            console.log(e);
        }
    }
    useState(() => {
        fetchSingleProduct()
    },[])
  return (
    <SingleProductContainer>
        <SingleProductImages images={singleProduct.images}/>
        <div style={{flex:0.6}}>test</div>
    </SingleProductContainer>
  )
}

export default SingleProduct
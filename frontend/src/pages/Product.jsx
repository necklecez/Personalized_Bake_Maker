import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';


const Product = () => {

  const { productId } = useParams();
  const { products, currency ,addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('')
  const [size,setSize] = useState('')

  const fetchProductData = async () => {

    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })

  }

  useEffect(() => {
    fetchProductData();
  }, [productId,products])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/*Product Data*/}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/*Product Images*/}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
              {
                productData.image.map((item,index)=>(
                  <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
                ))
              }
          </div>
          <div className='w-full sm:w-[80%]'>
              <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>

        {/*Product Info*/}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
              <p>Select the size to customize(%)</p>
              <div className='flex gap-2'>
                {productData.sizes.map((item,index)=>(
                  <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
                ))}
              </div>
          </div>
          <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>The amount of sugar and calories in the dessert can only be reduced or increased to a limited extent (as it may affect the texture of the dessert).</p>
              <p>Cash on delivery is available on this product.</p>
          </div>
        </div>
      </div>

      {/*Show Review ...Not progres*/}
      <div className='mt-20'>
        <div className='flex'>        
          <p className='border px-5 py-3 text-sm'>Reviews (456)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>This cake is pure magic in every bite! The moment your fork sinks into its impossibly soft, fluffy layers, you know you’re in for something extraordinary. The rich, buttery aroma teases your senses, while the silky-smooth frosting melts like a dream on your tongue. Each bite is a perfect harmony of sweetness and texture—moist, airy, and utterly divine! One taste, and you'll be floating in dessert heaven, wondering how something this delicious could even exist!</p>
          <p>Warning: May cause instant happiness and an uncontrollable desire for more!</p>
        </div>
      </div>

      
    </div>
  ) : <div className=' opacity-0'></div>
}

export default Product

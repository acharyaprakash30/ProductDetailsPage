import React,{useState} from 'react'
import wishlist from "../../images/wishlist.png";
import cartImage from "../../images/cartImage.png";
import { FaSearch } from "react-icons/fa";
import './ProductHero.css'
const ProductDetails = ({totalPrice,setTotalPrice,item,sideImage,handleSelectedImage}) => {
  
  const [counter, setCounter] = useState(1);

  const incrementCounter = () => {
    let count = counter + 1;
    setCounter(counter + 1);
    let subtotal = count*item.price;
    subtotal = subtotal.toFixed(2);
    setTotalPrice(subtotal);
  };

  let decrementCounter = () => {
    let count = counter;
    if (counter > 1) {
      count = count-1;
        setCounter(counter - 1);
    }
    else {
        setCounter(1);
    }
    let subtotal = count*item.price;
    subtotal = subtotal.toFixed(2);
    setTotalPrice(subtotal);
    
}
const handleDiscount = (event) =>{
  let data = event.target.value;
  let subtotal = counter*item.price - data;
  subtotal = subtotal.toFixed(2);
  if(data > counter*item.price){
    event.target.value = 0;
    setTotalPrice(counter*item.price);
  }
  else{
    setTotalPrice(subtotal);
  }

}

  return (
    <div className=" p-5">
          <h2 className="content fontWeightMedium QuestrialFont NoLetterSpacing ">
            {item.title}
            <span className="badges ml-3 PoppinsFont whiteColor">#1 in bags</span>
          </h2>
          <button className="wishlistbtn d-flex  text-center float-end align-items-center">
            <img src={wishlist} alt="wishlist " />
            <p className="addWishlist PoppinsFont">Add to wishlist</p>
          </button>
          <hr className="line w-100" />
          <div className="d-flex option ">
            <p className="p-1 getOptions PoppinsFont">Options:</p>
            <p className="p-1 getOptions PoppinsFont">Cream Cushion</p>
          </div>
          <div className="d-flex ">
            {sideImage &&
              sideImage.map((img, i) => {
                return (
                  <img
                    className={
                      img.selected ? "smallImagesSelected" : "smallImages"
                    }
                    onClick={() => handleSelectedImage(img.name, img.id)}
                    src={img.name}
                    alt="hii"
                  />
                );
              })}
          </div>
          <hr className=" w-100 mt-3" />
          <div className="priceDiv">
            <p className="price PoppinsFont NoLetterSpacing fontWeightMedium">NRS.200</p>
            <div className="d-flex align-items-center   justify-content-between">
              <div className="priceWithBadge">
                <h3 className="actualPrice PoppinsFont">NRS.{totalPrice}</h3>
                <div className="d-flex align-items-center justify-content-between">
                  <span className="offBadge PoppinsFont m-2">10% off</span>
                  <span className="m-2 savePrice PoppinsFont fontWeightMedium NoLetterSpacing">You save: NRS. 90.05</span>
                </div>
              </div>
              <div className="CartQuantity">
                <span className="quantitySpan PoppinsFont NoLetterSpacing">Quantity</span>
                <div className="d-flex">
                  <div className="quantity">
                    <div className="d-flex">
                      <button className="cartButton m-2">
                        <p className="cartButtonText"
                          onClick={
                            decrementCounter
                          }
                        >
                          -
                        </p>
                      </button>
                      <p className="ml-2 mr-2  numberOfQuantity">{counter}</p>
                      <button
                        className="cartButton m-2"
                        onClick={
                          incrementCounter
                        }
                      >
                        <p className="cartButtonText">+</p>
                      </button>
                    </div>
                  </div>
                  <div className="form-group has-search discountInput">
              <input type="text" onChange={(e)=>handleDiscount(e)} className="form-control discount" placeholder="Discount Amount"/>
        </div>                
                </div>
              </div>
            </div>
            <button className="carttbtn  d-flex text-center float-left align-items-center">
                    <img src={cartImage} className="cartimg" alt="cartimg" />
                    <span className="addCart PoppinsFont">Add to cart</span>
                </button>
          </div>
          <hr className="cartHr" />
          <h2 className="aboutItem PoppinsFont">About this item</h2>
          <ul className="listItemsText PoppinsFont fontWeightMedium">
            <li>Create a laid back vibe in your home with our twist on the classic papasan chair design</li>
            <li> Nest into the generously large Dacron-filled cushion</li>
            <li> Enjoy the boho styling of our durable resin wicker wrapped over a metal frame</li>
            <li> Complete with a 360° swivel to twist and turn to your heart’s content</li>
            <li>Add a bit of fun to your living room, family room or dorm with our easy, casual Papasan Chair</li>
          </ul>
          <h2 className="aboutItem PoppinsFont">
          Search your queries related to this product
          </h2>
          <div className="form-group has-search w-20">
              <input type="text" className="form-control inputForm" placeholder="Your questions"/>
        </div>

        </div>
  )
}

export default ProductDetails
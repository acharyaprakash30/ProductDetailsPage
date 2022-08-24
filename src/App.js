import "./App.css";
import React, { useState, useEffect } from "react";
import image1 from "./images/bag1.jpg";
import image2 from "./images/bag3.jpg";
import image3 from "./images/bag4.jpg";
import handbag1 from "./images/handbag1.jpeg";
import handbag2 from "./images/handbag2.jpg";
import handbag5 from "./images/handbag5.jpeg";
import handbag6 from "./images/handbag6.jpg";
import handbag7 from "./images/handbag7.jpg";

import TabComponent from './Components/TabComponent/TabComponent'
import Footer from './Components/Footer/Footer.js'
import WebFont from "webfontloader";
import ProductImagesLeft from './Components/ProductHero/LeftImageSection.js'
import ProductDetails from './Components/ProductHero/ProductDetails.js'
import axios from "axios";

function App() {
  
  const [item, setItem] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [sideImage, setSideImage] = useState([
    {
      id: 2,
      name: image1,
      selected: false,
    },
    {
      id: 3,
      name: image2,
      selected: false,
    },
    {
      id: 4,
      name: image3,
      selected: false,
    },
  ]);
  const [totalPrice,setTotalPrice] = useState(0);

  const handbags = [
    { name: handbag1 },
    { name: handbag2 },
    { name: handbag5 },
    { name: handbag6 },
    { name: handbag7 },
  ];



  useEffect(() => {

    WebFont.load({
      google: {
        families: ["Roboto", "Questrial", "Chilanka"],
      },
    });

    axios.get("https://fakestoreapi.com/products/1").then((data) => {
      setItem(data.data);
      setMainImage(data.data.image);
      setTotalPrice(data.data.price);
      setSideImage((oldArray) => [
        { id: 1, name: data.data.image, selected: true },
        ...oldArray,
      ]);
    });
  }, []);

  function handleSelectedImage(name, id) {
    setMainImage(name);
    setSideImage((current) =>
      current.map((obj) => {
        if (obj.id === id) {
          return { ...obj, id: id, name: name, selected: true };
        }
        return { ...obj, id: obj.id, name: obj.name, selected: false };
      })
    );
  }

  return (
    <>
      <div className="d-flex m-5">
      <ProductImagesLeft handbags={handbags} mainImage={mainImage} setMainImage={setMainImage} />
        <ProductDetails  totalPrice={totalPrice} setTotalPrice={setTotalPrice}  item={item} sideImage={sideImage} handleSelectedImage={handleSelectedImage} />
      </div>
      <TabComponent data = {item} />
      <Footer />
    </>
  );
}

export default App;

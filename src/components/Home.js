import React from "react";
import "../styles/Home.scss";
import Loading from './Loading';
import Header from './Header';
import ImageBlock from './ImageBlock';
import BigBlocks from './BigBlocks';
import TextBlocks from './TextBlocks';
import Footer from './Footer';
import {useLocation} from 'react-router';
import { useState, useEffect } from 'react';

function Home() {

  const location = useLocation();
  const hashLocat = location.hash;
  const [isLoaded, setIsLoaded] = useState(false);
  const [fake, setFake] = useState({
    categories: [],
    imageBlocks: [],
    bigBlocks: [],
    textBlocks: []
  });
  // 1. first my array will be empty
  // 2. use effect is used in order to have the initial state of my data. Empty array at the end serves this purpose, data will be loaded only once.
  // 3. once the data will be loaded it will call the fakeNews from use effect 
  useEffect(()=>{
      const fakeNews = () => {
      fetch("https://jsonkeeper.com/b/TEJ3")
      .then(response => response.json())
      .then((data) => {
        setIsLoaded(true);
        console.log(data);
        setFake(data);
      });
    };
    fakeNews();
    // my initial array is updated by the object array
  }, []);

  if (!isLoaded) {
    return <Loading />
  } else {
    return (
      <>

      {/* where categories will be imported as props.categories in Header comp */}
      <Header categories={fake.categories}/>
      
      <div className="content">
        
        <div className="imageBlock">
        {fake.imageBlocks.filter(obj => {return hashLocat === "" || hashLocat === "#All" || obj.category === hashLocat.substring(1);}).map((imageB) => {
          return (
          <ImageBlock 
            image={imageB.image}
            category={imageB.category}
            title={imageB.title}
            date={imageB.date}
          />
          );
        })}
        </div>

        <div className="bigBlock">
        {fake.bigBlocks.filter(obj => {return hashLocat === "" || hashLocat === "#All" || obj.category === hashLocat.substring(1);}).map((bigB) => {
          return (
          <BigBlocks 
            image={bigB.image}
            category={bigB.category}
            title={bigB.title}
            date={bigB.date}
            author={bigB.author}
          />
          );
        })}
        </div>

        <div className="textBlock">
        {fake.textBlocks.filter(obj => {return hashLocat === "" || hashLocat === "#All" || obj.category === hashLocat.substring(1);}).map((textB) => {
          return (
          <TextBlocks 
            title={textB.title}
            image={textB.image}
            text={textB.text}
            author={textB.author}
            date={textB.date}
            category={textB.category}
          />
          );
        })}
        </div>

      </div>

      <Footer />
      
      </>
    )
  }
}

export default Home;
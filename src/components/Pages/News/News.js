import React, { useState, useEffect } from "react";
import "./News.css";

// const API_KEY = "931dfffdbdac4a568f28ee102a7775c6";

const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=931dfffdbdac4a568f28ee102a7775c6`;

const News = () => {
  const [news, setNews] = useState([]);
  console.log(news);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoading(false);
          setNews(result.articles);
        },

        (error) => {
          setIsLoading(false);
          setError("Something bad happened!");
        }
      );
  }, []);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <section className='news'>
      <h1>News</h1>
      <div className='news__container'>
        {news.map((item, index) => {
          return (
            <div key={index} className='news__item'>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <img src={item.urlToImage} alt='' />
              <p>{item.author}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default News;

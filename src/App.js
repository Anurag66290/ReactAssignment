import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8040cc3829fe453497ac472a132141d8');
        setNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="container pt-5">
      <div className="row">
        <h1 className="heading">Latest News</h1>
        <div className="col-md-12 order-md-2 col-lg-12">
          <div className="container-fluid">
            <div className="row">
              {news.map((item, index) => (
                <Item key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item({ item }) {
  return (
    <div className="col-12 col-md-12 col-lg-12 mb-3">
      <div className="card h-100 border-0">
        <div className="card-img-top">
          <a href={item.url} className="font-weight-bold text-dark text-uppercase small" target="_blank">
            <img className="listImage" src={item.urlToImage} alt="Card image cap" />
          </a>
        </div>
        <div className="card-body text-center">
          <h4 className="card-title">
            <a href={item.url} className="font-weight-bold text-dark text-uppercase small" target="_blank">
              {item.title}
            </a>
          </h4>
          <h5 className="card-price small text-warning">
            <i>{item.author}</i>
          </h5>
        </div>
      </div>
    </div>
  );
}


export default App;

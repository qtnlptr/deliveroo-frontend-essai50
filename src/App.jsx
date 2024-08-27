import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Header";
import Categories from "./Categories";
import Cart from "./Cart";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          "https://site--deliveroo-backend--lxph5qsqcphg.code.run/"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return isLoading ? (
    <div className="loading">
      <span>En cours de chargement... </span>
    </div>
  ) : (
    <div>
      <Header
        title={data.restaurant.name}
        img={data.restaurant.picture}
        description={data.restaurant.description}
      />
      <main>
        <div className="main-container">
          <div className="col-left">
            {data.categories.map((elem, index) => {
              return <Categories category={elem} key={index} />;
            })}
          </div>
          <div className="col-right">
            <Cart items={items} setItems={setItems} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

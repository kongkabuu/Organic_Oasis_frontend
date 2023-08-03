import React from 'react';
import Itemcard from "./Itemcard";
import data from "./data";

const Home = () => {
  console.log(data)
  
  return (
    <>
      <h1 className="text-center mt-3">All Items</h1>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {data.productData.map((item, index) => (
            <Itemcard
              img={item.img}
              title={item.title}
              desc={item.desc}
              price={item.price}
              item={item} // Pass the item data to the Itemcard component
              key={index} // Use a unique key for each iteration
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;

import React from 'react';
import { useGlobalContext } from '../../context.';
import Meat from "../MeatList/Meat";
import Loading from "../Loader/Loader";
import "./MeatList.css";



const MeatList = () => {
  const {meat, loading, resultTitle} = useGlobalContext();
  const meatWithCovers = meat.map((singleMeat) => {
    return {
      ...singleMeat,
      // removing /works/ to get only id
     // id: (singleMeat.id).replace("/works/", ""),
     // cover_img: singleMeat.cover_id  `https://......../b/id/${singleMeat.cover_id}-L.jpg`
    }
  });

  if(loading) return <Loading />;
  return (
    <section className='meatlist'>
      <div className='container'>
        <div className='section-title'>
          <h2>{resultTitle}</h2>
        </div>
        <div className='meatlist-content grid'>
          {
            meatWithCovers.slice(0, 30).map((item, index) => {
              return (
                <Meat key = {index} {...item} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default MeatList

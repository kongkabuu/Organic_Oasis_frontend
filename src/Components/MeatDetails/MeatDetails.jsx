import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Loading from "../Loader/Loader";
import "./MeatDetails.css";
import {FaArrowLeft} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

//const URL = "https://........../works/";

const MeatDetails = () => {
    const {id} = useParams();
    const [loading, setLoading] = useState(false);
    const [meat, setMeat] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        setLoading(true);
        async function getMeatDetails(){
          try{
            const response = await fetch(`${URL}${id}.json`);
            const data = await response.json();
            console.log(data);

            if(data){
                const {description, title, covers, price} = data;
                const newMeat = {
                  description: description ? description.value : "No description found",
                  title: title,
                  cover_img: covers, // `https://..............${covers[0]}-L.jpg`
                  price: price
                };
                setMeat(newMeat);
            } else {
              setMeat(null);
            }
            setLoading(false);
          } catch(error){
            console.log(error);
            setLoading(false);
          }
        }
        getMeatDetails();
    }, [id]);

    if(loading) return <Loading />;

    return (
      <section className='meat-details'>
        <div className='container'>
          <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/meat")}>
            <FaArrowLeft size = {22} />
            <span className='fs-18 fw-6'>Go Back</span>
          </button>
          <div className='meat-details-content grid'>
          <div className='meat-details-img'>
            <img src = {meat?.cover_img} alt = "cover img" />
          </div>

          <div className='meat-details-info'>
            <div className='meat-details-item title'>
              <span className='fw-6 fs-24'>{meat?.title}</span>
            </div>
            <div className='meat-details-item description'>
              <span>{meat?.description}</span>
            </div>
            <div className='meat-details-item price'>
              <span className='fw-6 fs-24'>{meat?.price}</span>
            </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default MeatDetails
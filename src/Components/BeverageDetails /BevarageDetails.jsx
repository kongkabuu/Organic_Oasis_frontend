import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Loading from "../Loader/Loader";
import "./BevarageDetails.css";
import {FaArrowLeft} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

//const URL = "https://........../works/";

const BevarageDetails = () => {
    const {id} = useParams();
    const [loading, setLoading] = useState(false);
    const [bevarage, setBevarage] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        setLoading(true);
        async function getBevarageDetails(){
          try{
            const response = await fetch(`${URL}${id}.json`);
            const data = await response.json();
            console.log(data);

            if(data){
                const {description, title, covers, price} = data;
                const newBevarage = {
                  description: description ? description.value : "No description found",
                  title: title,
                  cover_img: covers, // `https://..............${covers[0]}-L.jpg`
                  price: price
                };
                setBevarage(newBevarage);
            } else {
            Bevarage(null);
            }
            setLoading(false);
          } catch(error){
            console.log(error);
            setLoading(false);                 Bevarage
          }
        }
        getBevarageDetails();
    }, [id]);

    if(loading) return <Loading />;

    return (
      <section className='bevarage-details'>
        <div className='container'>
          <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/meat")}>
            <FaArrowLeft size = {22} />
            <span className='fs-18 fw-6'>Go Back</span>
          </button>
          <div className='bevarage-details-content grid'>
          <div className='bevarage-details-img'>
            <img src = {bevarage?.cover_img} alt = "cover img" />
          </div>

          <div className='bevarage-details-info'>
            <div className='bevarage-details-item title'>
              <span className='fw-6 fs-24'>{bevarage?.title}</span>
            </div>
            <div className='bevarage-details-item description'>
              <span>{bevarage?.description}</span>
            </div>
            <div className='bevarage-details-item price'>
              <span className='fw-6 fs-24'>{bevarage?.price}</span>
            </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default BevarageDetails

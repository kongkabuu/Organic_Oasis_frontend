import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
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
                  cover_img: covers ? `https://..............${covers[0]}-L.jpg` : coverImg,
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

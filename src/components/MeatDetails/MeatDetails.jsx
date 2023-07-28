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

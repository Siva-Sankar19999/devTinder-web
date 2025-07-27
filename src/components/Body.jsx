import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import NavBar from "./NavBar";
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { addUser } from '../utils/userSlicer';



const Body = () => {
  const userData = useSelector((store)=>store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  
  
  const fetchUserData = async()=>{

    if(userData) {
      console.log(userData,'in ');
      navigate('/feed');
    }
    try{
      const res = await axios.get(BASE_URL+'/profile/view',{withCredentials: true});
      dispatch(addUser(res.data));
    }catch(err){
      if(err.status == 401){
        navigate('/login');
      }
      console.log(err);
    }
  }

  useEffect(()=>{
    fetchUserData();
  },[]);

  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default Body;
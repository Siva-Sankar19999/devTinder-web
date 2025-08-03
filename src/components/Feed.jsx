import axios from 'axios';
import React, { useEffect } from 'react';
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import {addFeed} from '../utils/feedSlicer';
import UserCard from './UserCard';

const Feed = () => {
  const dispatch = useDispatch();
  const feed =  useSelector((store)=>store.feed);

  const getFeed = async()=>{
    if(feed) return;
    try{
      const res = await axios.get(BASE_URL+'/feed',{withCredentials : true});
  
      dispatch(addFeed(res?.data));
    }catch(err){
      console.log(err,'error-msg');
    }
  }

  useEffect(()=>{
    getFeed();
  },[]);

  if (!feed) return;

  if (feed.length <= 0)
    return <h1 className="flex justify-center my-10">No new users founds!</h1>;

  return (
    <div className="flex justify-center my-10" >
     {feed && (<UserCard user={feed[0]} />)}
    </div>
  )
}

export default Feed;
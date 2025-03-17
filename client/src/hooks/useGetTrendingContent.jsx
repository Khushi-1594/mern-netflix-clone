import React, { useEffect, useRef, useState } from 'react'
import { useContentStore } from '../store/content';
import axios from 'axios';

const useGetTrendingContent = () => {
    const [trendingContent, setTrendingContent]= useState(null);
    const {contentType} = useContentStore();
   
    useEffect(()=>{
       let isMounted = true;
        const getTrendingContent = async () =>{
            const res= await axios.get(`/api/v1/${contentType}/trending`)
            if(isMounted){
                setTrendingContent(res.data.content);
            }
            
        }

        getTrendingContent();

        return ()=>{
            isMounted = false;
        };

    },[contentType])

    return {trendingContent};
}

export default useGetTrendingContent;
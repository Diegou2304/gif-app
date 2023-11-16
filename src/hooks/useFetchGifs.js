import { useState, useEffect } from "react";
import { getGifs } from '../Helpers/getGifs';

//Un hook es una funcion que retorna algo, un objeto
export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    


    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
      
    }

    useEffect( () => {
        getImages();
    }, [images])

    // //Mostrar el titulo de los gif por categoria
  return {
    images,
    isLoading
}   
}

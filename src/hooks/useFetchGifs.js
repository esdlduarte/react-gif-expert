import { useEffect,useState } from 'react';
import { getGifs } from '../helpers/getGifs';



export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const[isLoading,setIsLoading]=useState(true);
  
    const getImages=async()=>{
       const newImages=await getGifs(category);
       setImages(newImages);
       setIsLoading(false);
     }
   //si imagen esta en [] llama al getImagen
   useEffect(() => {
     getImages();
   }, []);
   
     return {
       images,
       isLoading
     }

}

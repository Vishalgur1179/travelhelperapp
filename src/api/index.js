import axios from "axios";

const URL='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
export const getPlacesData=async(sw,ne)=>{
    try{
        const{data:{data}}=await axios.get(URL,{
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': '7d4dd596e0msh2e6c5199be71814p1fd04ajsn5afaffd0439a',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          } 
        });
        return data;
    
    } catch(error){
        console.log(error);
    }
}
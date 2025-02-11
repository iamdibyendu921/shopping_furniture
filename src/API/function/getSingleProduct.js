import { axiosinstance } from "../axiosinstance/axiosInstance";
import { endPoints } from "../endpoints/endPoints";


export const getSingleProduct = async (id) => {  
  try {
    const { data } = await axiosinstance.get(endPoints.getSingleProduct(id));    
    return data;
  } catch (error) {
    console.log(error);
  }
};
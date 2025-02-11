import { axiosinstance } from "../axiosinstance/axiosInstance";
import { endPoints } from "../endpoints/endPoints";

export const fetchProduct = async () => {
    try {
        const { data } = await axiosinstance.get(endPoints.product);
        return data;
    } catch (error) {
        console.log(error);
    }
}
import { useQuery } from "@tanstack/react-query"
import { fetchProduct } from "../../API/function/fetchProduct"
import { getSingleProduct } from "../../API/function/getSingleProduct";

export const useUserGetquery = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: fetchProduct,
    })
};


export const useUserSingleProductQuery = (id) => {
    return useQuery({
      queryKey: ["products", id],
      queryFn: () => getSingleProduct(id),
    });
  };
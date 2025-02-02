import { AxiosError } from "axios";
import { Api } from ".";
import axiosClient from "../lib/axios";

export async function getProducts(query?: string) {
  try {
    const search = query ? query : "";
    const response = (
      await axiosClient.get(Api.product, {
        params: {
          search,
          limit: 20,
          offset: 0,
        },
      })
    ).data;
    return response;
  } catch (error) {
    console.error(error);
    return (error as AxiosError).response?.data;
  }
}

export async function getProductById(id: string) {
  try {
    const response = (await axiosClient.get(`${Api.product}/${id}`)).data;
    return response;
  } catch (error) {
    console.error(error);
    return (error as AxiosError).response?.data;
  }
}

import { apiClient } from "@/config/axios";
import axios from "axios";

export const getIndividualSpellDetails = async (url: string) => {
  try {
    const response = await apiClient.get(`spells/${url}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message ||
          "An error occurred while fetching spells."
      );
    } else {
      throw new Error("Something went wrong. Please try again later.");
    }
  }
};

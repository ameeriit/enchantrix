import { apiClient } from "@/config/axios";
import axios from "axios";

export async function getSpellList() {
  try {
    const response = await apiClient.get("spells");
    const spellsList = response.data;
    return spellsList;
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
}

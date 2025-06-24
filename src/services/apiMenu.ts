import { BASE_URL } from "@/utils/constants";
import { type MenuItem } from "@/types/menu";
import type { Extras } from "@/types/extras";

export async function getMenu(): Promise<MenuItem[]> {
  try {
    const res = await fetch(`${BASE_URL}/menu`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("Unknown error", error);
    }
    throw error;
  }
}

export async function getExtras(): Promise<Extras> {
  try {
    const res = await fetch(`${BASE_URL}/extras`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("Unknown error", error);
    }
    throw error;
  }
}

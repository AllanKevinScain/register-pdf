import axios from "axios";

export function usePastoral() {
  async function getPastorals() {
    try {
      const response = await axios.get("http://localhost:4000/pastorals");

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  /* async function createPastoral(data: { name: string }) {
    try {
      const response = await axios.post(
        "/pastoral",
        {
          data,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  async function deletePastoral(value: { id: string }) {
    const { id } = value;
    try {
      const response = await axios.delete(`/delete-pastoral?id=${id}`);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  } */

  return {
    getPastorals,
  };
}

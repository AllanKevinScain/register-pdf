import axios from "axios";
import { PdfEccSchemaType } from "../../types";

export function useNote() {
  async function getNotes() {
    try {
      const response = await axios.get("http://localhost:4000/notes");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  async function getNote(value: { id: string }) {
    const { id } = value;
    try {
      const response = await axios.get(`/note?id=${id}`);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  async function createNote(data: PdfEccSchemaType) {
    try {
      const response = await axios.post("/note", {
        data,
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  async function editNote(values: { id: string; data: PdfEccSchemaType }) {
    const { data, id } = values;
    try {
      const response = await axios.put(`/note?id=${id}`, {
        data,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  async function deleteNote(value: { id: string }) {
    const { id } = value;
    try {
      const response = await axios.delete(`/delete-note?id=${id}`);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return {
    createNote,
    getNote,
    getNotes,
    editNote,
    deleteNote,
  };
}

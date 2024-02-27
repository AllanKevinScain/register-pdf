import { Router } from "express";
import {
  CreateNoteController,
  CreatePastoralController,
  DeleteNoteController,
  DeletePastoralController,
  EditNoteController,
  GetAllNoteController,
  GetAllPastoralController,
  GetOneNoteController,
} from "../controller";

const router = Router();

/* criar */
const createNote = new CreateNoteController();
router.post("/note", createNote.handle);
const createPastoral = new CreatePastoralController();
router.post("/pastoral", createPastoral.handle);

/* deletar */
const deleteNote = new DeleteNoteController();
router.delete("/delete-note", deleteNote.handle);
const deletePastroal = new DeletePastoralController();
router.delete("/delete-pastoral", deletePastroal.handle);

/* editar */
const editNote = new EditNoteController();
router.put("/note", editNote.handle);

/* buscar todos */
const getAllNote = new GetAllNoteController();
router.get("/notes", getAllNote.handle);
const getAllPastoral = new GetAllPastoralController();
router.get("/pastorals", getAllPastoral.handle);

/* buscar um */
const getOneNote = new GetOneNoteController();
router.get("/note", getOneNote.handle);

export { router };

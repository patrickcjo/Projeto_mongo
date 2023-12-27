import express, { Request, Response } from "express";
import NotepadService from "../services/notepad.services";

const notepadController = express.Router();

notepadController.get("/", async (req: Request, res: Response) => {
  try {
    const notepads = await NotepadService.listNotepads();
    res.status(200).json(notepads);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

notepadController.post("/", async (req: Request, res: Response) => {
  try {
    const newNotepad = await NotepadService.createNotepad(req.body);
    res.status(201).json(newNotepad);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Implemente outros endpoints

export default notepadController;

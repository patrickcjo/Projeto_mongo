import NotepadModel, { Notepad } from "../models/notepad.model";

class NotepadRepository {
  static async listNotepads(): Promise<Notepad[]> {
    return NotepadModel.find();
  }

  static async createNotepad(data: Notepad): Promise<Notepad> {
    return NotepadModel.create(data);
  }

 
}

export default NotepadRepository;

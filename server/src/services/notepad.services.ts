import NotepadRepository from '../repositories/notepad.repositories';
import { Notepad } from '../models/notepad.model';

class NotepadService {
  static async listNotepads(): Promise<Notepad[]> {
    return NotepadRepository.listNotepads();
  }

  static async createNotepad(data: Notepad): Promise<Notepad> {
    return NotepadRepository.createNotepad(data);
  }

  // Implemente as outras operações CRUD
}

export default NotepadService;
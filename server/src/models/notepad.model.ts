import mongoose, { Document, Schema } from "mongoose";

export interface Notepad {
  _id?: string;
  title: string;
  subtitle: string;
  content: string;
  created_at?: Date;
}

export const NotepadSchema = new Schema<Notepad>({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  content: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

const NotepadModel = mongoose.model<Notepad>("Notepad", NotepadSchema);

export default NotepadModel;

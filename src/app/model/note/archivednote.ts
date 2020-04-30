export class ArchivedNote {

  noteId: number;
  noteTitle: string;
  noteContent: string;
  isArchive: boolean;

  constructor(noteId: number, noteTitle:string, noteContent:string, isArchive:boolean){

    this.noteId = noteId;
    this.noteTitle = noteTitle;
    this.noteContent = noteContent;
    this.isArchive = isArchive;

  }

}

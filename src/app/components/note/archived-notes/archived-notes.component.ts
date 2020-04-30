import { Component, OnInit } from '@angular/core';
import {ArchivedNote} from "../../../model/note/archivednote";
import {NoteService} from "../../../services/note/note.service";
import {ArchivedNoteService} from "../../../services/note/archivednote.service";
import {Note} from "../../../model/note/note";
import {Router} from "@angular/router";

@Component({
  selector: 'app-archived-notes',
  templateUrl: './archived-notes.component.html',
  styleUrls: ['./archived-notes.component.css']
})
export class ArchivedNotesComponent implements OnInit {

  archivedNote:ArchivedNote;
  note:Note;
  id:number;

  constructor(private noteService:NoteService, private archivedNoteService:ArchivedNoteService, private router:Router) { }

  ngOnInit() {
    this.archiveNote();
  }

  archiveNote(){

    this.id = this.archivedNoteService.getId();

    this.noteService.findNoteById(this.id).subscribe(data => {

      //get note to archive
      this.note = data;

      //create archived note
      this.archivedNote.noteId = data.noteId;
      this.archivedNote.noteTitle = data.noteTitle;
      this.archivedNote.noteContent = data.noteContent;
      this.archivedNote.isArchive = true;

      //save archived note
      this.archivedNoteService.createArchivedNote(this.archivedNote);

      //delete note from list.
      this.noteService.deleteNote(data.noteId);

      this.router.navigate(['/archivedlist']);

    });

  }
}

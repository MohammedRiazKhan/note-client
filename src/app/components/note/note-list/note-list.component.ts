import { Component, OnInit } from '@angular/core';
import {NoteService} from "../../../services/note/note.service";
import {Note} from "../../../model/note/note";
import { Router } from '@angular/router';
import { EditNoteComponent } from '../edit-note/edit-note.component';
import {ArchivedNoteService} from "../../../services/note/archivednote.service";
import { ArchivedNote } from 'src/app/model/note/archivednote';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  private notes: Note[];

  private note:Note;
  private noteToArchive:ArchivedNote;
  id:number;

  constructor(private noteService:NoteService, private archivedNoteService:ArchivedNoteService, private router:Router) { }

  ngOnInit() {

    this.getNotes();
    this.setActive();

  }

  getNotes(){
    this.noteService.getAll().subscribe(data => {
      this.notes = data;
    });
  }

  deleteNote(id:number) {
    this.noteService.deleteNote(id).subscribe(

      data => {
       console.log(data);
       this.getNotes();
      }
    );
  }

  archiveNote(id:number) {

    //get note
    this.noteService.findNoteById(id).subscribe(data => {
      this.note = data;

      //do the exchange
      this.noteToArchive = new ArchivedNote(this.note.noteId, this.note.noteTitle, this.note.noteContent, true);

      this.archivedNoteService.createArchivedNote(this.noteToArchive).subscribe(data => console.log(data), error1 => console.log(error1));

      //delete from notes
      this.noteService.deleteNote(this.note.noteId).subscribe(data => console.log(data), error1 => console.log(error1));

      this.getNotes();
      

    });

    this.router.navigate(['/archivedlist']);
    
  }

  editNote(id:number) {

    this.router.navigate(['/edit']);
    this.noteService.saveId(id);

  }

  setActive(){
    document.getElementById('notesLink').classList.add('active');
    document.getElementById('addLink').classList.remove('active');
    document.getElementById('archivedLink').classList.remove('active');
  }

}

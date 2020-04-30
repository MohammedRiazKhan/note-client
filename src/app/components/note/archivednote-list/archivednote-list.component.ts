import { Component, OnInit } from '@angular/core';
import {Note} from "../../../model/note/note";
import {NoteService} from "../../../services/note/note.service";
import {ArchivedNoteService} from "../../../services/note/archivednote.service";
import {Router} from "@angular/router";
import {ArchivedNote} from "../../../model/note/archivednote"

@Component({
  selector: 'app-archivednote-list',
  templateUrl: './archivednote-list.component.html',
  styleUrls: ['./archivednote-list.component.css']
})
export class ArchivedNoteListComponent implements OnInit {

  private notes: ArchivedNote[];

  constructor(private archivedNoteService:ArchivedNoteService, private router:Router) { }

  ngOnInit() {

    this.getNotes();

  }

  getNotes(){
    this.archivedNoteService.getAll().subscribe(data => {
      this.notes = data;
    });
  }

  deleteNote(id:number) {
    this.archivedNoteService.deleteArchivedNote(id).subscribe(

      data => {
        console.log(data);
        this.getNotes();
        alert('Note Deleted');
      }
    );
  }

  archiveNote(id:number) {


  }

  editNote(id:number) {

    this.router.navigate(['/edit']);
    this.archivedNoteService.saveId(id);

  }

}

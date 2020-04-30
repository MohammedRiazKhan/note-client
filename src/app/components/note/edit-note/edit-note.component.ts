import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/model/note/note';
import { NoteService } from 'src/app/services/note/note.service';
import { Observable } from 'rxjs';
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {

  note:Note;
  id:number;

  _note: Note = new Note();
  submitted = false;

  constructor(private noteService:NoteService, private router:Router) { }

  ngOnInit() {

    this.getNoteToEdit();
  }

  getNoteToEdit(){
    
    this.id = this.noteService.getId();

    this.noteService.findNoteById(this.id).subscribe(data => {

      this.note = data;

    });
    
  }

  update(){

    this.noteService.updateNote(this.note).subscribe(data => console.log(data), error1 => console.log(error1));
    this.router.navigate(['/notes']);

  }

  onSubmit(){
    this.submitted = true;
    this.update();
  }

  cancel(){

    this.router.navigate(['/notes']);

  }



}

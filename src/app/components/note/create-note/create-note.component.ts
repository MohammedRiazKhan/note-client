import { Component, OnInit } from '@angular/core';
import {Note} from "../../../model/note/note";
import {NoteService} from "../../../services/note/note.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  note: Note = new Note();
  submitted = false;

  constructor(private noteService:NoteService, private router:Router) { }

  ngOnInit() {
  }

  newNote() : void {

    this.submitted = false;
    this.note = new Note();

  }

  save(){

    this.noteService.createNote(this.note).subscribe(data => console.log(data), error1 => console.log(error1));
    this.note = new Note();
   

  }

  onSubmit(){
    this.submitted = true;
    this.save();
    this.router.navigate(['/notes']);
  }

  cancel(){

    this.router.navigate(['/notes']);

  }


}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Note} from "../../model/note/note";

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private baseURL: string = '//localhost:8080/api/notes';
  private id:number;

  constructor(private http:HttpClient) {}

  //Create New Note
  createNote(note:Note) : Observable<Note>{

    return this.http.post<Note>(this.baseURL + '/add', note);

  }

  //Read/Find by ID
  findNoteById(id:number) : Observable<Note>{

    return this.http.get<Note>(this.baseURL + '/find/' + id);
  }

  //Update Existing Note
  updateNote(note:Note) : Observable<Note>{

    return this.http.put<Note>(this.baseURL + '/update', note);

  }

  //Delete Existing Note
  deleteNote(id: number) : Observable<any>{

    return this.http.delete(this.baseURL + '/delete/' + id);

  }

  //Get all Notes
  getAll() : Observable<Note[]>{

    return this.http.get<Note[]>(this.baseURL + '/getAll');

  }

  saveId(id:number){

    this.id = id;

  }

  getId() : number{

    return this.id;


  }


}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Note} from "../../model/note/note";
import {Observable} from "rxjs";
import {ArchivedNote} from "../../model/note/archivednote";

@Injectable({
  providedIn: 'root'
})
export class ArchivedNoteService {

  private baseURL: string = '//localhost:8080/api/archivednotes';
  private id:number;

  constructor(private http:HttpClient) {}

  //Create New ArchivedNote
  createArchivedNote(note:ArchivedNote) : Observable<ArchivedNote>{

    return this.http.post<ArchivedNote>(this.baseURL + '/addArchived', note);

  }

  //Read/Find by ID
  findArchivedNoteById(id:number) : Observable<Note>{

    return this.http.get<ArchivedNote>(this.baseURL + '/findArchived/' + id);
  }

  //Update Existing ArchivedNote
  updateArchivedNote(note:ArchivedNote) : Observable<ArchivedNote>{

    return this.http.put<ArchivedNote>(this.baseURL + '/updateArchived', note);

  }

  //Delete Existing ArchivedNote
  deleteArchivedNote(id: number) : Observable<any>{

    return this.http.delete(this.baseURL + '/deleteArchived/' + id);

  }

  //Get all ArchivedNotes
  getAll() : Observable<ArchivedNote[]>{

    return this.http.get<ArchivedNote[]>(this.baseURL + '/getAllArchived');

  }

  saveId(id:number){

    this.id = id;

  }

  getId() : number{

    return this.id;


  }

}

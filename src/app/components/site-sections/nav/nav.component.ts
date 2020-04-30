import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  changeLink1(){
    document.getElementById('notesLink').classList.add('active');
    document.getElementById('addLink').classList.remove('active');
    document.getElementById('archivedLink').classList.remove('active');
  }

  changeLink2(){
    document.getElementById('addLink').classList.add('active');
    document.getElementById('notesLink').classList.remove('active');
    document.getElementById('archivedLink').classList.remove('active');

  }

  changeLink3(){
    document.getElementById('addLink').classList.remove('active');
    document.getElementById('notesLink').classList.remove('active');
    document.getElementById('archivedLink').classList.add('active');

  }

}

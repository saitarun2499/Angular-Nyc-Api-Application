import { Component, OnInit } from '@angular/core';
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  books;
  displayedColumns: string[] = ['TopSellers','AuthorName','Title'];
  constructor(private http1:DataService) { }
  ngOnInit(){
    this.http1.authors().subscribe(
    (data)=>{
    console.log(data),
    this.books=data['results']})
    console.log(this.books);
    }
}
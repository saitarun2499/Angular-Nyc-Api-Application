import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http1: HttpClient) { }

  authors(){
    return this.http1.get('https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=m8aJqyE5zzyVdb0LO4ucZrmquLXXSUYq')
  }
}
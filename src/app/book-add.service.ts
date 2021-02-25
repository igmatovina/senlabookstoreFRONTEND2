import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookAddService {

  constructor(private http:HttpClient) { }



  public doAdd(book: Book){
    return this.http.post("http://localhost:8080/register",book,{responseType:'text' as 'json'});
  }


  public getBooks(){
    return this.http.get("http://localhost:8080/getAllBooks");
  }

  public getBookByTitle(title: string){
    return this.http.get("http://localhost:8080/findBook/"+title);
  }

  public deleteBook(isbn: number){
    return this.http.get("http://localhost:8080/cancel/"+isbn);
  }
  public editBook(isbn: number, book : any){
    return this.http.put("http://localhost:8080/edit/"+isbn, book);
  }

  public getBookById(isbn: number){
    return this.http.get("http://localhost:8080/getById/"+isbn);
  }
}



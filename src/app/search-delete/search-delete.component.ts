import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookAddService } from '../book-add.service';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {

  books:any;
  title!: string;
  
  constructor(private service: BookAddService,private router: Router) { }



  ngOnInit() {
    let resp=this.service.getBooks();
    resp.subscribe((data)=>this.books=data);
  }

  public deleteBook(isbn:number){
    let resp=this.service.deleteBook(isbn);
    resp.subscribe((data)=>this.books=data);
  }

  public findBookByTitle(){
    let resp=this.service.getBookByTitle(this.title);
    resp.subscribe((data)=>this.books=data);
  }

  public updateEmployee(id: number){
    this.router.navigate(['update', id]);
  }


}

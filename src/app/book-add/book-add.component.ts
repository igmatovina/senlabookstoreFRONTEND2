import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookAddService } from '../book-add.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {


  book: Book=new Book(0,"","");
  message:any;

  constructor(private service: BookAddService, private router: Router) { }

  ngOnInit(): void {
  }

  public addNow(){
    let resp = this.service.doAdd(this.book);
    resp.subscribe((data)=>this.message=data);
  }

  public back(){
    this.router.navigate(['search']);
  }

}

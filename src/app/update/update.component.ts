import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/book';
import { BookAddService } from '../book-add.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  isbn!: number;
  title!: string;
  author!: string;
  book: any = {};
  message:any;


  constructor(private service: BookAddService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
     this.book = new Book(this.author,this.title);
     this.isbn = this.route.snapshot.params['isbn'];
     console.log(this.isbn);
     let resp=this.service.getBookById(this.isbn);
     resp.subscribe((data)=>this.book=data);
  }
  
   public editNow(){
    console.log(this.isbn);
    let resp=this.service.editBook(this.isbn, this.book);
    resp.subscribe((data)=>this.book=data);
    this.goToBookList();
    }

    public goToBookList(){
      this.router.navigate(['/search']);
    }
  }



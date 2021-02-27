import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookAddService } from '../book-add.service';
import { FileDownloadService } from '../file-download.service';
import { saveAs } from 'file-saver';

const MIME_TYPES : any = {
  pdf: 'application/pdf',
  xls: 'application/vnd.ms-excel',
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetxml.sheet',
  xml: 'application/xml'

}

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {

  public xmlFileName: string="booksExport.xml ";

  books:any;
  title!: string;
  
  constructor(private service: BookAddService ,private service2: FileDownloadService, private router: Router, private http:HttpClient) { }



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


  downloadFile() {
    const EXT = this.xmlFileName.substr(this.xmlFileName.lastIndexOf('.') + 1);
    this.service2.downloadFile({ 'fileName': this.xmlFileName})
    .subscribe(data => {
      //save it on the client machine.
      saveAs(new Blob([data], {type: MIME_TYPES[EXT]}), this.xmlFileName);
    })
  }

}

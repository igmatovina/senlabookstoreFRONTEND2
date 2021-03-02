import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookAddService } from '../book-add.service';
import { FileDownloadService } from '../file-download.service';
import { saveAs } from 'file-saver';
import * as fileSaver from 'file-saver';

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
  fileSystemName!: string;

  constructor(private service: BookAddService ,private fileDownloadService: FileDownloadService, private router: Router, private http:HttpClient) { }



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

  public addEmployee(){
    this.router.navigate(['add']);
  }


  public downloadXmlFile(fileName:any){
    const EXT = fileName.substr(fileName.lastIndexOf('.') + 1);
    this.fileDownloadService.downloadXml({'fileName':fileName})
    .subscribe(data=>{
      saveAs(new Blob([data], { type:MIME_TYPES[EXT]}),fileName);

    })

  }
    /*   downloadFile() {
    this.service2.downloadFile2().subscribe((response: any) => { //when you use stricter type checking
			let blob:any = new Blob([response], { type: 'application/xml; charset=utf-8' });
			const url = window.URL.createObjectURL(blob);
			//window.open(url);
			//window.location.href = response.url;
			fileSaver.saveAs(blob, 'booklist.xml');
		//}), error => console.log('Error downloading the file'),
		}), (error: any) => console.log('Error downloading the file'), //when you use stricter type checking
                 () => console.info('File downloaded successfully');
  }

  download3() {
    this.service2.downloadFile3().subscribe((response: any) => { //when you use stricter type checking
			let blob:any = new Blob([response], { type: 'text/json; charset=utf-8' });
			const url = window.URL.createObjectURL(blob);
			//window.open(url);
			//window.location.href = response.url;
			fileSaver.saveAs(blob, 'employees.json');
		//}), error => console.log('Error downloading the file'),
		}), (error: any) => console.log('Error downloading the file'), //when you use stricter type checking
                 () => console.info('File downloaded successfully');
  } */

}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileDownloadService {

  constructor(private http:HttpClient) { }

  
  downloadFile(data: any) {
    // we would call the spring-boot service
    const REQUEST_PARAMS = new HttpParams().set('fileName', data.fileName);
    const REQUEST_URI = 'http://localhost:8080/convertToXml2';
    return this.http.get(REQUEST_URI, {
      params: REQUEST_PARAMS,
      responseType: 'arraybuffer'
    })
  }


}
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FileDownloadService {

  constructor(private http:HttpClient) { }
  
  downloadXml(data:any){

    const REQUEST_HEADERS = new HttpHeaders({ 'Accept': 'application/xml' });
    const REQUEST_PARAMS = new HttpParams().set('fileName', data.fileName);
    const REQUEST_URI = 'http://localhost:8080/downloadXml';
    return this.http.get(REQUEST_URI, {
      headers : REQUEST_HEADERS,
      params: REQUEST_PARAMS,
      responseType: 'blob'
    })

  }
  
/*   downloadFile2(data: any) {
    // we would call the spring-boot service
    const REQUEST_HEADERS = new HttpHeaders({ 'Accept': 'application/xml' });
    const REQUEST_PARAMS = new HttpParams().set('fileName', data.fileName);
    const REQUEST_URI = 'http://localhost:8080/download';
    return this.http.get(REQUEST_URI, {
      headers : REQUEST_HEADERS,
      params: REQUEST_PARAMS,
      responseType: 'blob'
    })
  }

  downloadFileSystem(filename: string): Observable<HttpResponse<string>> {
    let headers = new HttpHeaders();
    headers = headers.append('Accept', 'text/csv; charset=utf-8');
    return this.http.get('http://localhost:8080/download2' + filename, {
      headers: headers,
      observe: 'response',
      responseType: 'text'
    });
  }

  downloadFile3() {
		return this.http.get('http://localhost:8080/download');
  }

  
  downloadFile4() {
    const REQUEST_HEADERS = new HttpHeaders({ 'Accept': 'application/xml' });
    const REQUEST_URI = 'http://localhost:8080//downloadXml';
    return this.http.get(REQUEST_URI, {
      headers : REQUEST_HEADERS,
      responseType: 'text'
    })  
  } */

/*   public getPDF(): Observable<Blob> {   
    //const options = { responseType: 'blob' }; there is no use of this
        let uri = 'http://localhost:8080//downloadXml';
        // this.http refers to HttpClient. Note here that you cannot use the generic get<Blob> as it does not compile: instead you "choose" the appropriate API in this way.
        return this.http.get(uri, { responseType: 'blob' });
    } */


/*   pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const data: FormData = new FormData();
    data.append('file', file);
    const newRequest = new HttpRequest('POST', 'http://localhost:8080/savefile', data, {
    reportProgress: true,
    responseType: 'text'
    });
    return this.http.request(newRequest);
}}
 */




}
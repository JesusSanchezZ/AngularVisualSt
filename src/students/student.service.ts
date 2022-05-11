import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/api-models/student.models';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseApiUrl = 'http://localhost:2797';

  constructor(private httpClient: HttpClient) { }

  getStudents(): Observable<any>{
    return this.httpClient.get<any>(this.baseApiUrl+'/student');
  }

  getStudent(studetnId: string): Observable<Student>{
    return this.httpClient.get<Student>(this.baseApiUrl + '/student/' + studetnId)
  }
}

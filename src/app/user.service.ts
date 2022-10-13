import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from "./user";
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public register(user: User): Observable<User> {
        return this.http.post<User>(`${this.apiServerUrl}`, user)
    }
    public confirm(user: User): Observable<String> {
        return this.http.get<String>(`${this.apiServerUrl}/registration/confirm?token=${user.token}`)
    }
    public sms(user: User, phoneNumber: String): Observable<any> {
        return this.http.get<any>(`${this.apiServerUrl}/registration/sms?token=${user.token}`)
    }
}
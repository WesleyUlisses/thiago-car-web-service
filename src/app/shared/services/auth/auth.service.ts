import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import axios from 'axios';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private apiUrl = environment.apiUrl;
    private tokenKey = 'authToken';

    constructor(private http: HttpClient, private router: Router) { }


    async login(email: string, password: string): Promise<any> {

        const response = await axios.post(`${this.apiUrl}/auth/login`, { email, password });

        if (response.status === 200) {
            this.setToken(response.data.token);
        }

        return response;
    }

    // Método para registrar um novo usuário
    async register(user: any): Promise<Observable<any>> {
        return this.http.post(`${this.apiUrl}/register`, user).pipe(
            catchError((error) => {
                console.error('Registration failed', error);
                return of(null);
            })
        );
    }

    isAuthenticated(): boolean {
        return !!this.getToken();
    }

    getToken(): string | null {
        return localStorage.getItem(this.tokenKey);
    }

    private setToken(token: string): void {
        localStorage.setItem(this.tokenKey, token);
    }

    logout(): void {
        localStorage.removeItem(this.tokenKey);
        this.router.navigate(['/auth/login']);
    }
}

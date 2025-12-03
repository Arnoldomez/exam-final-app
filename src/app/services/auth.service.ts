import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLogged = false;

  constructor() {}

  login(email: string, pass: string): boolean {
    if (email === 'admin@admin.com' && pass === '1234') {
      this.isLogged = true;
      localStorage.setItem('logged', 'true');
      return true;
    }
    return false;
  }

  logout() {
    this.isLogged = false;
    localStorage.removeItem('logged');
  }

  isAuthenticated(): boolean {
    return this.isLogged || localStorage.getItem('logged') === 'true';
  }
}

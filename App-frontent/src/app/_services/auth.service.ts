import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string = environment.apiUrl + "auth/";


  constructor(private http: HttpClient) { }


  login(model: any) {
    return this.http.post(this.baseUrl + "login", model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem("token", user.token);
          // localStorage.setItem("user", JSON.stringify(user.user));
          // this.decodedToken = this.jwtHelper.decodeToken(user.token);
          // this.currentUser = user.user;
          // this.changeMemberPhoto(this.currentUser.photoUrl);
          // console.log(this.decodedToken);
        }
      })
    );
  }

  // loggedIn() 
  //   const token = localStorage.getItem("token");
  //   // return !this.jwtHelper.isTokenExpired(token);
  // }

  logout() {
    localStorage.removeItem("token");
    // localStorage.removeItem("user");
    // this.authService.decodedToken = null;
    // this.authService.currentUser = null;
    // this.alertify.message("logged Out");
    // this.router.navigate(["/home"]);
  }

}

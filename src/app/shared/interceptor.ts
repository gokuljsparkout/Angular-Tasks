import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor() {}
  private token!: any;
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const { url, body, method, headers } = request;
    // if (url.endsWith('login') && method === 'POST') {
    //   return handleLogin();
    // }

    if (url.endsWith('list-event') && method === 'GET') {
      if (localStorage.getItem('token')) {
        this.token = localStorage.getItem('token');
        const modifiedRequest = request.clone({
          headers: request.headers.append(
            'Authorization',
            `Bearer ${this.token}`
          ),
        });
        return next.handle(modifiedRequest);
      }
    }
    return next.handle(request);
    // function handleLogin(): Observable<HttpEvent<unknown>> {
    //   const registeredUsers = JSON.parse(
    //     localStorage.getItem('registeredUsers') || '[]'
    //   );
    //   const user = body as { email: string; password: string };
    //   const existingUser = registeredUsers.find(
    //     (registeredUser: any) => registeredUser.email === user.email
    //   );
    //   if (existingUser) {
    //     if (existingUser?.password !== user?.password) {
    //       const response = new HttpResponse({
    //         status: 404,
    //         body: {
    //           message: 'Password Incorrect',
    //           token: null,
    //         },
    //       });
    //       return of(response);
    //     } else {
    //       const response = new HttpResponse({
    //         status: 200,
    //         body: {
    //           id: '1',
    //           email: user.email,
    //           password: user.password,
    //           token: FAKE_JWT_TOKEN,
    //           message: 'Login Successful',
    //         },
    //       });
    //       return of(response);
    //     }
    //   } else {
    //     const response = new HttpResponse({
    //       status: 404,
    //       body: { message: 'User is not registered', token: null },
    //     });
    //     return of(response);
    //   }
    // }
  }
}

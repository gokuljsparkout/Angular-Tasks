import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export const FAKE_JWT_TOKEN =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJDb2RlIFNob3RzIFdpdGggUHJvZmFuaXMiLCJpYXQiOjE2MjQyNzU1MjUsImV4cCI6MTY1NTgxMTUyNSwiYXVkIjoiQ29kZSBTaG90IFdpdGggUHJvZmFuaXMgU3Vic2NyaWJlcnMiLCJzdWIiOiJDb2RlIFNob3QgV2l0aCBQcm9mYW5pcyBTdWJzY3JpYmVycyIsIlVzZXJuYW1lIjoicHJvZmFuaXMiLCJGaXJzdE5hbWUiOiJGYW5pcyIsIlJvbGUiOlsiQWRtaW4iLCJTdXBlciBBZG1pbiJdfQ.mT1UD7DXTWRm4etsW9BuWcg5bj2CaeAQVXaoEOIwB7o';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log(request);
    const { url, body, method, headers } = request;
    if (url.endsWith('login') && method === 'POST') {
      return handleLogin();
    }
    // if (url.endsWith('register') && method === 'POST') {
    //   return handleRegister();
    // }
    return next.handle(request);

    function isLoggedIn() {
      return headers.get('authorization') === FAKE_JWT_TOKEN;
    }

    function handleLogin(): Observable<HttpEvent<unknown>> {
      const registeredUsers = JSON.parse(
        localStorage.getItem('registeredUsers') || '[]'
      );
      const user = body as { username: string; password: string };
      const existingUser = registeredUsers.find(
        (registeredUser: any) => registeredUser === user.username
      );
      if (existingUser) {
        return of(
          new HttpResponse({
            status: 200,
            body: {
              id: '1',
              username: user.username,
              token: FAKE_JWT_TOKEN,
            },
          })
        );
      } else {
        const response = new HttpResponse({
          status: 404,
          body: 'User is not registered',
        });

        return of(response);
      }
    }
  }
}

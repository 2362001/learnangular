import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Observable, tap } from 'rxjs';
import { LoadingService } from '../common/service/loading.service';

@Injectable({
  providedIn: 'root',
})

// ngzorr = angular + ant dessign
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private loadingService: LoadingService,
    private router: Router,
    private notification: NzNotificationService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.loadingService.isLoading.next(true);
    return next.handle(request).pipe(
      tap(() => {
        console.log(123);
      })
    );
  }
}

// sau khi mà request thành công cần cancel loading
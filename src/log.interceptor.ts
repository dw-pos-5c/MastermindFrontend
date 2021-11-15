import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {MasterMindService} from "./master-mind.service";

@Injectable()
export class LogInterceptor implements HttpInterceptor {

  constructor(private masterMindService: MasterMindService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.masterMindService.publish(`${request.method} ${request.url} - ${JSON.stringify(request.body)}`);
    return next.handle(request);
  }
}

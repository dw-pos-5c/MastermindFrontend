import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MasterMindService {

  private log = new Subject<string>();

  constructor() { }

  public subscribe(): Observable<string> {
    return this.log.asObservable();
  }

  public publish(msg: string): void {
    this.log.next(msg);
  }

}

import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class CommonService{
    loginStatusChanged = new Subject();
}
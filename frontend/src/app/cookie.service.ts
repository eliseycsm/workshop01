import { HttpClient, HttpParams } from '@angular/common/http';
import {Injectable} from '@angular/core'


export interface CookieText {
    cookie: string;
}

const serverCall = '/api/cookie'     //'http://localhost:3000/api/cookie' is used if we are calling from different server

//now we notice that it calls back to localhost 4200 but we need too serve from localhost 3000
//soln: angular allows u to use a proxy to call from 3000 instead of dev server 4200
//proxy.config.js



@Injectable()
export class CookieService {
    constructor(private http: HttpClient){}

    async getCookies(n = 1): Promise<CookieText[]>{
        //query string
        
        const params = (new HttpParams()).set('count', `${n}`)

        //construct the call to express
        const resp = await this.http.get<any>(serverCall, {params}).toPromise()
        //add <any> as we dunno if we are getting back single or array of cookies

        //need to match the calls & responses; if n==1 we are getting back a single cookie  -> need to change to cookieText[] as per defined above; else [cookies]

        if (n == 1) {
            return [resp as CookieText]
        } 
        return resp as CookieText[]
    }
}
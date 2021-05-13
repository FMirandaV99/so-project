import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class DataService {

    baseURL = 'https://dummyapi.io/data/api/'

    headers = new HttpHeaders({'app-id': '609c8c2a12a8c54e7597cb06'});


    constructor (private http: HttpClient) { }

    test() {
        return this.http.get(this.baseURL + 'user', {headers: this.headers} );
    }

}
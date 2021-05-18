import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class DataService {

    baseURL = 'https://localhost:44386/api'

    constructor (private http: HttpClient) { }

    concurrent(number: string) {
        return this.http.get(this.baseURL + '/Concurrent/' + number);
    }

    sequential(number: string) {
        return this.http.get(this.baseURL + '/Sequencial/' + number);
    }

}
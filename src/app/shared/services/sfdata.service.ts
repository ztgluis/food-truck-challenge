import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SFDataService {
    dataUrl = 'https://data.sfgov.org/resource/rqzj-sfat.json';

    constructor(private http: HttpClient) {}

    getFoodTruckData(params?): Observable<any> {
        return this.http.get(this.dataUrl, { params });
    }
}

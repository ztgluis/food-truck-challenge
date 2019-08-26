import { HttpClient } from '@angular/common/http';
import {
    HttpClientTestingModule,
    HttpTestingController
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { SFDataService } from './sfdata.service';

describe('SFDataService', () => {
    let service: SFDataService;
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });
        service = TestBed.get(SFDataService);
        httpClient = TestBed.get(HttpClient);
        httpTestingController = TestBed.get(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('#getFoodTruckData', () => {
        it('should get tabs data from base URL', () => {
            const testUrl = 'https://data.sfgov.org/resource/rqzj-sfat.json';
            const testData = {
                films: 'https://swapi.co/api/films/',
                people: 'https://swapi.co/api/people/',
                planets: 'https://swapi.co/api/planets/',
                species: 'https://swapi.co/api/species/',
                starships: 'https://swapi.co/api/starships/',
                vehicles: 'https://swapi.co/api/vehicles/'
            };
            service
                .getFoodTruckData()
                .subscribe(data => expect(data).toEqual(testData));
            const req = httpTestingController.expectOne(testUrl);
            expect(req.request.method).toEqual('GET');
            req.flush(testData);
            httpTestingController.verify();
        });
    });
});

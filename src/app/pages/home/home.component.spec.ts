import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SFDataService } from '@app/shared/services/sfdata.service';
import { of } from 'rxjs';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let sfDataServiceSpy: jasmine.SpyObj<SFDataService>;
    const testData = [
        {
            latitude: 32,
            longitude: -122,
            range: 200
        }
    ];

    beforeEach(async(() => {
        const spy = jasmine.createSpyObj('SFDataService', {
            getFoodTruckData: of(testData)
        });

        TestBed.configureTestingModule({
            declarations: [HomeComponent],
            providers: [{ provide: SFDataService, useValue: spy }],

            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        sfDataServiceSpy = TestBed.get(SFDataService);

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('#markerClicked()', () => {
        const marker = {
            objectid: 1,
            latitude: 32,
            longitude: -122
        };
        it('should set the given marker as selected', async(() => {
            component.markerClicked(marker);
            expect(component.selectedMarker).toEqual(marker);
        }));
        it('should unset the given marker if previously selected', async(() => {
            component.selectedMarker = marker;
            component.markerClicked(marker);
            expect(component.selectedMarker).toEqual(null);
        }));
    });

    describe('#mapClicked()', () => {
        const event = {
            latLng: {
                lat: () => 32,
                lng: () => -122
            }
        };
        it('should set the coordinates from the map click event', async(() => {
            component.mapClicked(event);
            expect(component.lat).toEqual(event.latLng.lat());
            expect(component.lng).toEqual(event.latLng.lng());
        }));
        it('should call findNearbyFoodTrucks', async(() => {
            component.mapClicked(event);
            expect(sfDataServiceSpy.getFoodTruckData).toHaveBeenCalled();
        }));
    });

    describe('#findNearbyFoodTrucks()', () => {
        it('should get data from SFData Service', async(() => {
            component.findNearbyFoodTrucks();
            component.markers$.subscribe();
            expect(sfDataServiceSpy.getFoodTruckData).toHaveBeenCalled();
        }));
    });

    describe('#findMe', () => {
        it('should succeed getting user location', async(() => {
            spyOn(navigator.geolocation, 'getCurrentPosition');
            component.findMe();
            expect(navigator.geolocation.getCurrentPosition).toHaveBeenCalled();
        }));
    });
});

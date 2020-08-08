import { ChangeDetectorRef, Component } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { SFDataService } from '@app/shared/services/sfdata.service';
import { Observable, of } from 'rxjs';
import { finalize, shareReplay, tap } from 'rxjs/operators';
@Component({
    selector: 'ftc-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    // Map zoom level
    zoom: number;

    // Map center position
    lat: number;
    lng: number;

    // Map circle area for found results
    radius: number;

    // Keep track of currently displayed marker details
    infoWindow: string;

    // Map markers for the closest food trucks
    markers$: Observable<any>;

    // Loading indicator while querying food truck details
    loading: boolean;

    // Open sidenav
    sidenavOpen: boolean;

    // Keep track of selected marker
    selectedMarker;

    mediaObserver$: Observable<
        MediaChange[]
    > = this.mediaObserver.asObservable();

    constructor(
        public mediaObserver: MediaObserver,
        private sfDataService: SFDataService,
        private cdRef: ChangeDetectorRef
    ) {
        // initialize map values
        this.reset();
    }

    // resets map values to initial defaults
    reset() {
        // San Francisco latitude/longitude
        this.lat = 37.75923216518026;
        this.lng = -122.42079955329393;
        this.zoom = 12;
        this.radius = 0;
        this.sidenavOpen = false;
        this.markers$ = of([]);
    }

    // Runs on selection of a map marker
    markerClicked(marker) {
        // Sets the marker as selected/unselected
        if (this.selectedMarker === marker) {
            this.selectedMarker = null;
            this.infoWindow = null;
        } else {
            this.selectedMarker = marker;
            this.infoWindow = marker.objectid;
        }
    }

    // Runs on map click
    mapClicked($event: google.maps.MouseEvent | google.maps.IconMouseEvent) {
        // Resets values
        this.selectedMarker = null;
        this.radius = 0;

        // Update location based on map click location
        this.lat = $event.latLng.lat();
        this.lng = $event.latLng.lng();

        // Find food trucks based on new latitude/longitude
        this.findNearbyFoodTrucks();
    }

    // Use Device location as initial map location
    findMe() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
                this.cdRef.detectChanges();
            });
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    }

    // Finds the five closest food trucks for the current latitude/longitude
    findNearbyFoodTrucks() {
        // Start loading indicator
        this.loading = true;
        this.sidenavOpen = true;

        // Build SoQL query string for Socrata API to return the 5 closest food trucks to a given location
        const params = {
            // Order results based on proximity to current latitude/longitude
            $order: `distance_in_meters(location, 'POINT (${this.lng} ${this.lat})')`,
            // Limit to 5 results (5 closest to given location)
            $limit: 5,
            // Add `range` field to response for later use
            $select: `*, distance_in_meters(location, 'POINT (${this.lng} ${this.lat})') AS range`
        };

        this.markers$ = this.sfDataService.getFoodTruckData(params).pipe(
            // Prevent unnecessary repeated requests
            shareReplay(1),
            tap(data => {
                data.forEach((m, i) => {
                    // Zoom in to selected area
                    this.zoom = 14;

                    // Set marker label to a uppercase letter based on the index (index `0` = label `A`)
                    m.label = String.fromCharCode(65 + i);

                    // Set circle area radius to the furthest food truck found (add padding for map visual)
                    const radius = Number(m.range) + 20;
                    if (radius > this.radius) {
                        this.radius = radius;
                    }

                    // Divide by 1609.344 to convert to miles
                    m.miles = (parseFloat(m.range) / 1609.34).toFixed(3);
                });
            }),
            finalize(() => {
                // Stop loading indicator
                this.loading = false;
            })
        );
    }
}

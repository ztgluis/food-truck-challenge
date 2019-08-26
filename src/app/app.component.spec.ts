import { APP_BASE_HREF } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SettingsService } from './shared/services/settings.service';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let settingsServiceSpy: jasmine.SpyObj<SettingsService>;

    beforeEach(async(() => {
        const spy = jasmine.createSpyObj('SettingsService', [
            'switchTheme',
            'setLayout',
            'getLayout'
        ]);

        TestBed.configureTestingModule({
            imports: [RouterTestingModule, MatMenuModule],
            declarations: [AppComponent],
            providers: [
                { provide: SettingsService, useValue: spy },
                {
                    provide: APP_BASE_HREF,
                    useValue: '/'
                }
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.debugElement.componentInstance;
        settingsServiceSpy = TestBed.get(SettingsService);
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('switchTheme()', () => {
        it('should switch the theme', async(() => {
            fixture.detectChanges();
            component.switchTheme();
            expect(settingsServiceSpy.switchTheme).toHaveBeenCalled();
        }));
    });
});

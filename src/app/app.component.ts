import { APP_BASE_HREF } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { getAppNav } from '@app/app.routing';
import { SettingsService } from '@app/shared/services/settings.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'ftc-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    mapsKey = 'AIzaSyCNofQ0Mvo-7ICNCNkO3i9F8ADkeSZSgF8';

    constructor(
        private settingsService: SettingsService,
        matIconRegistry: MatIconRegistry,
        domSanitizer: DomSanitizer,
        public mediaObserver: MediaObserver,
        @Inject(APP_BASE_HREF) private baseHref: string
    ) {
        matIconRegistry.addSvgIcon(
            'github',
            domSanitizer.bypassSecurityTrustResourceUrl(
                `../${this.baseHref}/assets/img/github-circle-white-transparent.svg`
            )
        );
    }

    mediaObserver$: Observable<
        MediaChange[]
    > = this.mediaObserver.asObservable().pipe(
        tap(() => {
            // Force default layout on small responsive view
            const sidenav = this.settingsService.getLayout();
            if (sidenav) {
                if (this.mediaObserver.isActive('lt-sm')) {
                    this.sidenavLayout = false;
                } else {
                    this.sidenavLayout = true;
                }
            }
        })
    );

    sidenavLayout = this.settingsService.getLayout();

    expandedSidenav = false;

    navLinks = getAppNav();

    switchLayout() {
        this.sidenavLayout = !this.sidenavLayout;
        this.settingsService.setLayout(this.sidenavLayout);
    }

    switchTheme() {
        this.settingsService.switchTheme();
    }

    toggleSidenavText() {
        this.expandedSidenav = !this.expandedSidenav;
    }
}

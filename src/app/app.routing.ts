import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { NavItem, RouteData } from '@app/app.model';

/**
 * * `path` is required
 * * `data` is optional but if present must conform to `RouteData` contract
 */
interface CustomRoute extends Route {
    path: string;
    data?: RouteData;
}

export const appRoutes: CustomRoute[] = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () =>
            import('./pages/home/home.module').then(m => m.HomeModule),
        data: {
            title: 'Home Page',
            name: 'Home',
            icon: 'local_shipping'
        }
    },
    {
        path: 'about',
        loadChildren: () =>
            import('./pages/about/about.module').then(m => m.AboutModule),
        data: {
            title: 'About Page',
            name: 'About',
            icon: 'info'
        }
    }
];

/**
 * Iterates over module routes and returns navigation menu items
 * @param routes Array of `CustomRoute` objects to generate nav menus for.
 */
export function getAppNav(): NavItem[] {
    const routes: CustomRoute[] = appRoutes;
    return routes.reduce((acc: NavItem[], route: CustomRoute) => {
        if (route.data) {
            acc.push({
                path: route.path,
                icon: route.data.icon,
                name: route.data.name
            });
        }
        return acc;
    }, []);
}

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class RoutingModule {}

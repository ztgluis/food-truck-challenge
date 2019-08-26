import { Component } from '@angular/core';

@Component({
    selector: 'ftc-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent {
    features = [
        {
            title: 'Angular Google Maps',
            description:
                'Angular Google Maps is used as a component wrapper around the Google Maps API, this allows us to display a map of San Francisco, overlay location markers on the map to display the 5 closest food truck results and to draw an area circle which displays the area of coverage.'
        },
        {
            title: 'San Francisco Data API (powered by Socrata)',
            description:
                'The San Francisco Data API (https://dev.socrata.com/foundry/data.sfgov.org/rqzj-sfat) allows us to query the food trucks registered in San Francisco and their locations, additionally it allows us to specify SoQL queries which are used in this application to filter down the 5 closest entries for a given latitude/longitude.'
        },
        {
            title: 'Angular',
            description:
                'Built with Angular as the web application framework for its ease of use and powerful capabilities.'
        },
        {
            title: 'Angular Material',
            description:
                'The Angular Material component library is used as the primary library for UI components in this project for the high quality and extensive documentation available.'
        },
        {
            title: 'Bootstrap',
            description:
                'Bootstrap is included to be used primarly for its utility classes which enable easily customizing the UI through CSS classes.'
        },
        {
            title: 'Theming',
            description:
                'This project is themable, a regular and a dark themes are included. Adding more themes is as easy as adding one more SCSS file with the desired palette of colors'
        },
        {
            title: 'Layout',
            description:
                'Interchangeable navigation layout, allows for the main navigation to be switched from a sidenav to top nav'
        },
        {
            title: 'Responsive',
            description:
                'Application adapts to the size of the viewport to optimize user experience'
        }
    ];

    devFeatures = [
        {
            name: 'cicd',
            title: 'CI/CD',
            description:
                'CI/CD is integrated as part of this repository, as a pre-requisite to commiting changes, all staged files will get code styling rules applied through Prettier. As a pre-requisite to pushing changes to Github, a series of checks will run which include: all linting rules must pass, all tests must pass, a minimun of 80% threshold on code coverage is achieved, a prod build completes successfully and a copy of the compiled webpage is pushed to Github Pages.'
        },
        {
            name: 'husky',
            title: 'Husky',
            description:
                'Husky is used to add development cycle hooks, such as pre-commit and pre-push hooks used for the CI/CD process.'
        },
        {
            name: 'prettier',
            title: 'Prettier',
            description:
                'Prettier is set up as a dev dependency to ensure consistent formatting of the code.'
        },
        {
            name: 'tslint',
            title: 'TSLint',
            description:
                'TSLint has been extended to enable ensure coding standards, enforcing strict linting rules based on the Airbnb styleguide.'
        }
    ];
}

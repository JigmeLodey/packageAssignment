# Assignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

#############################################################################################
#############################################################################################

My NPM package link: https://www.npmjs.com/settings/jigmelodey/packages.

##########################################################################################################


About Package Code:


@Input: The @Input() decorator in a child component or directive signifies that the property can receive its value from its parent component. For now our parent component can be app component and child component can be package.


@viewChild: Property decorator that configures a view query. The change detector looks for the first element or the directive matching the selector in the view DOM. If the view DOM changes, and a new child matches the selector, the property is updated. In this package i used viewChild to paginator and sorting so that anything that is changing meaning that user click on incearsing of page in pagination or on clicking sorting that change can be updated.
ngAfterview:  Respond after Angular initializes the component's views and child views, or the view that contains the directive. To initialize my paginator and sorting i used afterview decorator.
 
ngOnnit:  Initialize the directive or component after Angular first displays the data-bound properties and sets the directive or component's input properties. 

get field(): this function will return field names meaning from headerName data. which we will use in HTML <tr mat-header-row *matHeaderRowDef="field">

addData(): here we initiate data value from incoming data from app to table data.

isEmpty: this function is used to check whether is there filter value is selected or not if there is filter then this function will return boole value;

resetToFiltered: this will help to restarting of filter if we apply filter and if we remove filter this will handle the changes.


search: Search is used to search filter, it get trigger from text box on keyup

applyFilter: this function handle the filter, when if filter are selected then then this function get activate.

searchPredicate: here first it will check whether cols are searchable or not if it is searchable it will select data from that cols.

filterPredicate: it return boole value,

hideShowFilter: this is for hiding and showing filter

filterSet: we set filter true and false bacse on localstorage if there is no filter then we set to true.

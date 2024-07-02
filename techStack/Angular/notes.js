// *Reference: 
// - https://angular.io/guide/cheatsheet
// - https://zerotomastery.io/cheatsheets/angular-cheat-sheet/
// - https://www.geeksforgeeks.org/angular-cheat-sheet-a-basic-guide-to-angular/
// - https://www.interviewbit.com/angular-cheat-sheet/

// # BOOTSTRAPPING
// Bootstraps the application, using the root component from the specified NgModule.
`import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
platformBrowserDynamic().bootstrapModule(AppModule);`

// # NGMODULES
// Defines a module that contains components, directives, pipes, and providers.
  `@NgModule({ 
    declarations: …, 
    imports: …, 
    exports: …, 
    providers: …, 
    bootstrap: … 
  }) 
  class MyModule {}
`
// List of components, directives, and pipes that belong to this module.
`declarations: [ 
  MyRedComponent, 
  MyBlueComponent, 
  MyDatePipe 
]`
// List of modules to import into this module. Everything from the imported modules is available to declarations of this module.
`imports: [ 
  BrowserModule, 
  SomeOtherModule 
]`
// List of components, directives, and pipes visible to modules that import this module.
`exports: [ 
  MyRedComponent, 
  MyDatePipe 
]`
// List of dependency injection providers visible both to the contents of this module and to importers of this module.
`providers: [ 
  MyService, 
  { provide: … } 
]`
// List of components to bootstrap when this module is bootstrapped.
`bootstrap: [MyAppComponent]`


// # TEMPLATE SYNTAX	
// - This code snippet represents Angular's property binding syntax, where the input element's value is bound to the value of the firstName property in the component's class.
```
<input [value]="firstName">
Binds property value to the result of expression firstName.
```
// - This HTML code snippet binds the `role` attribute of a `<div>` element to the value of the `myAriaRole` expression in Angular, dynamically setting the ARIA role of the element.
`<div [attr.role]="myAriaRole">`

// - This HTML snippet uses Angular's property binding syntax to conditionally add the CSS class "extra-sparkle" to the element based on the truthiness of the expression "isDelightful".
`<div [class.extra-sparkle]="isDelightful">`

// - Binds style property width to the result of expression mySize in pixels. Units are optional
`<div [style.width.px]="mySize">`

// - Calls method readRainbow when a click event is triggered on this button element (or its children) and passes in the event object.
`<button (click)="readRainbow($event)">`

// - Binds a property to an interpolated string, for example, "Hello Seabiscuit". Equivalent to:
`<div title="Hello {{ponyName}}">
<div [title]="'Hello ' + ponyName">`

// - Binds text content to an interpolated string, for example, "Hello Seabiscuit".
`<p> 
  Hello {{ponyName}} 
</p>`

// - Sets up two-way data binding. Equivalent to:
`<my-cmp [(title)]="name">
<my-cmp [title]="name" (titleChange)="name=$event">`

// =================================================================
// #Angular https://www.interviewbit.com/angular-cheat-sheet/
// =================================================================
// Angular is a JavaScript front-end framework used for developing web and mobile apps. It follows a declarative approach, different from higher-order JavaScript frameworks like React. The development process involves directives, services, models, pipes, and routes, with source code written in Angular format.
// There are multiple versions of Angular, which can be confusing for beginners: AngularJS, Angular 2, Angular 4, Angular 5, Angular 6, Angular 7, Angular 8, and Angular 9. AngularJS, released in 2010, is a JavaScript-based framework maintained by Google. Angular 2, released in September 2016, is a complete rewrite using TypeScript, a superset of JavaScript.

// * 1. Angular CLI
// The Angular CLI is a powerful tool for managing Angular projects through simple commands. It handles tasks such as generating, compiling, and setting up new Angular applications. The CLI also includes a development server that monitors and automatically recompiles source code files when changes are made, refreshing the app in the browser.

`npm install -g @angular/cli`	
// To install the Angular CLI into our local machine using npm, run this command.
`ng version`	
// Displays the information about the currently installed CLI.
`ng new <application name>`	
// Using the ng new command, a new Angular application will be created.
`ng generate component <name>`	
// A new component of our application will be created as a result of this command.
`ng build`	
// An application is created and stored in the dist directory using this command.
`ng serve`	
// The local development server is launched, and the app is served locally in the browser. When you change any of the source files, the app is rebuilt and reloaded.
`ng add <package name>`	
// Downloads new dependencies and updates your project with configuration changes.


// * 2. Angular Lifecycle Hooks
// Angular apps are composed of tree-structured pieces, known as components. Each component consists of a template, a TypeScript class, and a stylesheet file. Components have a lifecycle managed by Angular, which includes various phases from birth to death. Angular lifecycle hooks allow developers to control and interact with these phases, providing fine-grained control over the component's lifecycle.

`ngOnChanges`	
// The content is processed or child views are loaded before this hook is executed. It is also executed when the input properties of the component change.
`ngOnInit`	
// Data can be initialized in a component by calling this hook after input values are set. It is performed only once after input values are set.
`ngOnDestroy`	
// You can use this hook to clean up memory and release resources and subscriptions after a component is destroyed.
`ngDoCheck`	
// Any changes detected are handled using this hook.
`ngAfterContentInit`	
// After performing content projection into the component's view, Angular invokes this hook before evaluating the expression.
`ngAfterContentChecked`	
// Angular's change detection mechanism checks the content of all components once every time they are rendered, so this hook is called each time change is detected.
`ngAfterViewInit`	
// When the component’s view has been fully initialized, this hook is called.
`ngAfterViewChecked`	
// This hook is invoked after every check of the component's views and its child views.

// -> Template Syntax
`<input [val]="name">`	
// Binds the “name” expression result to the property “val”
`<div [attr.role]="myAriaRole">`	
// An expression that binds an attribute role to a result of expression “myAriaRole”.
`<div [class.extra]="isADelight">`	
// The  truthiness of the expression isADelight binds to the CSS class extra
`<div [style.height.px]="myHeight">`	
// The result of the expression myHeight binds to the style property height

// *3. DECORATORS
// Classes and fields can be decorated with Angular's dozens of decorators. These are some of the most commonly used decorators.

// -> Class Decorators
`import { Directive, ... } from
'@angular/core';`	
// This imports the Directive from @angular/core
`@Component({...}) 
class MyComponent() {}`	
// Metadata about a component is declared as part of the class definition.
`@Directive({...})
class MyDirective() {}`	
// Declares the class as a directive and provides metadata about the directive
`@Pipe({...}) 
class MyPipe() {}`	
// Declares the class as a pipe and provides metadata about the pipe.
`@Injectable() 
class MyService() {}`	
// This declares that class can be injected and provided. Without this decorator, the compiler does not generate enough metadata to allow the class to be created properly when it is injected somewhere.

// -> CLASS FIELD DECORATORS
`import { Inp } from  '@angular/core';`	
// Import Inp from @angular/core.
`@Input() myProperty;`	
// You can declare input properties that you can bind to using property binding
`@Output() myEvent = new EventEmitter();`	
// An output property is declared that can fire subscribable events.
`@HostBinding('class.valid') isValid;`	
// Host element property is binded to a component property
`@HostListener('click', ['$event']) onClick(e) {...}`	
// Host element event is subscribed with a directive method
`@ContentChild(myPredicate) myChildComponent;`	
// First result of the query in the component content is binded to a property of the class
`@ContentChildren(myPredicate) myChildComponents;`	
// Results of the query in the component content is binded to a property of the class
`@ViewChild(myPredicate) myChildComponent;`	
// First result of the query in the component view is binded to a property of the class
`@ViewChildren(myPredicate) myChildComponents;`	
// Results of the query in the component view is binded to a property of the class
## Bootstrap for application development using Angular, Typescript and Webpack

This is a skeleton of a project, which uses named tools in development. Webpack is a great tool for project compiling 
and increasing modularity. JavaScript, styles and assets can be compiled and packed all together, which decreases load 
on server and improves page load time. TypeScript is a superset of JavaScript which makes possible to use statical 
typisation (yay!) and almost all ES6 features today for all browsers.

### Architectural choices
 
Project structured not in standard MVC-fashion (app/{controllers,directives,views,...}). For sake of modularity and support by the middle-sized team it divided into logical sections - just like `home`, `users` etc. Each section contains controllers, views, services etc. 
  
`components` folder is separated from  the rest of structure and will be a placeholder of a common-usable components. Each component is a git-submodule. This decision was made for sake of high reusable nature of code-base - component should be used in all sub-projects of the umbrella project. 

### Components

#### Developing new component

_TBD_

#### Testing components

_TBD_

#### Injecting components into existing project

_TBD_

### Links

#### Angular architectural patterns
- [AngularJS Best Practices: Directory Structure](https://scotch.io/tutorials/angularjs-best-practices-directory-structure)
- [Angular Style Guide](https://github.com/mgechev/angularjs-style-guide)
- [The Top 10 Mistakes AngularJS Developers Make](https://www.airpair.com/angularjs/posts/top-10-mistakes-angularjs-developers-make)

#### Angular and TypeScript
- [AngularJS with TypeScript](https://gist.github.com/esfand/9569523)
- [When Two Forces Meet (AngularJS, TypeScript)](http://sirarsalih.com/2014/01/28/when-two-forces-meet-angularjs-typescript/)
- [Writing AngularJS directives as TypeScript classes](http://blog.aaronholmes.net/writing-angularjs-directives-as-typescript-classes/)

#### Testing Angular
- [Mocking Dependencies in AngularJS Tests](http://www.sitepoint.com/mocking-dependencies-angularjs-tests/)

#### Webpack
- [Video: OSCON 2014: How Instagram.com Works; Pete Hunt](https://www.youtube.com/watch?v=VkTCL6Nqm6Y)

### TODO
- [ ] Sourcemaps
- [ ] Style embeding
- [ ] minifying dependencies with Gulp
- [ ] loader
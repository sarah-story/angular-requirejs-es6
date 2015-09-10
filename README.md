# angular-requirejs-es6
This is a very basic AngularJS app that utilizes [RequireJS](http://requirejs.org/) to manage modules and optimize the code. It also uses some of the new features from [ES6](http://es6-features.org/). RequireJS doesn't recognize ES6 yet, so the project is transpiled using [grunt-babel](https://www.npmjs.com/package/grunt-babel).

##Getting Started

#####Clone the repository and install dependencies

Clone the repository:

```
git clone https://github.com/sarah-story/angular-requirejs-es6.git
cd ./angular-requirejs-es6
```

Install the dependencies (angular, angular-route, requirejs, grunt-babel):

```
cd ./lib
bower install
npm install
```

#####Transpile the code from ES6 to ES5

This step will create a new folder called final with the transpiled JavaScript files. While still in the lib directory:

```
grunt babel
```

#####Optimize the code

This will create a new file called built.js.

```
cd ..
r.js -o build.js
```

#####View in browser

Now you should be able to set up a server and view the results in your browser:

```
python -m SimpleHTTPServer
```
 


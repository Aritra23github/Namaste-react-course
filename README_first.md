### Episode-2

# What is NPM ???
* NPM is not node package manager. In Npm's official website it is not written that it is Node package manager. NPM is everything except node package manager. NPM manages package at behind the scenes but npm is not stands for node package manager.

# What is package.json ???
* package.json is a configuration for our npm. It keeps track of what version of dependencies we are using.

# What is bundler ???
* in our code html, css and javascript files are different, but in production it needs to be be bundled/compressed. So bundler helps us to do this thing. Webpack, parcel, vite these are all bundlers. For example when we use create react app command, Webpack works as bundler from behind.

# Dependencies
* There are two types of dependencies in our application. The first one is Dev Dependency and another one is normal dependency. Dev Dependency are used in Development phase, Normal Dependency is used in Production phase or in development phase.

# what is caret(^) and tiddle(~) in package.json ???
* when we use caret(^) before any package version then, if any minor version is published then it will be automatically upgrade itself.
* when we use tiddle(~) before any package version then, if any major version is published then it will be automatically upgrade itself.
* # Note -> It is safe to use caret(^) before any package version. Because if use tiddle(~) before any package version and major version is published it will be automatically upgrade itself. And if major version breaks then our application will also break.

# What is package-lock.json ???
* package.json keeps track of dependencies with their approximate versions, but package-lock.json keeps track of (or locks) exact versions of dependencies.

# What is integrity of package-lock.json ???
* integrity of package-lock.json is a sha-512 hash. When we face a situation where our code is running on my local but it's not running on production, to avoid this kind of situation our package-lock.json file ensures that the exact version of the package should be deployed on the production. This integrity of package-lock.json file helps us for doing this.

# What is the node_modules ???
* What packages or dependencies we are installing from npm, the exact code of that package is stored in the node_modules folder. It is look like a database of that package.

# Transitive dependencies ???
* Whenever we download a package from npm, then that package has dependencies form another package, and that package has dependencies on another package. This is called "transitive dependencies". Just for example "parcel" need another dependency and that dependency need another package, this is "transitive dependencies".

* That is the reason why our node_modules is so huge.

* In our project there are many package.json and package-lock.json files are present. Because of transitive dependencies we have multiple packages.json and package-lock.json.


# why we should put package-lock.json and package.json on git ???
* package-lock.json locks exact version of our packages and package.json keeps track of approximate version of our packages, so we need to push it into git.

# why we should not push node_modules onto git ???
* We push package-lock.json and package.json onto git, so we can regenerate node_modules. And also node_modules has a huge size so we will not push it onto git, instead of we will regenerate by using package_lock.json and package.json. Just use npm install we will regenerate node_modules.

# What is npx ???
* When we want to install a package then we need to use npm install package_name command, but when we want to execute a package then we need to use npx package_name command.

# Why CDN link is not preferred for react and react dom???
* When we are usiing cdn links then we need to make a network request which is costly, and also if in future react's new version available then we need to update the cdn link manually which is not good for us. So it is recommended not to use cdn links for react and react dom, instead of we will use react from our node_modules and we will keep the react and react dom in our package.json file so that it will update itself.   

# What parcel does ???
- Dev Build
- Local Server
- HMR -> Hot Module Reload
- Parcel uses File Watching Algorithm which is written in C++
- Parcel also does fast reloading because it is using Caching.
- The most expensive thing in our web browser is to load images, parcel also does IMAGE Optimization.
- When wew build a production server, parcel also does minification of our codes.
- Parcel also compress our codes.
- Parcel also bundles our code.
- Parcel does consistent hashing.
- Parcel also does code splitting.
- Parcel does differential bundling. which means our app will open in older versions of chrome/oprea/internet explorer.
- Parcel does error handling for us.
- Parcel also does diagnostics which means beautiful error.
- our local server runs on http but if we want to use HTTPs then parcel also gives us to make HTTPs server.
- parcel does Tree shaking which means whenever we creare folder/files, parcel will automatically shake all the files and it will also remove our code which is not in use.
- parcel does different dev and production builds.

* For Supporting our code into different browsers, we will use browserslist package. we need to declare suported browsers in browserslist array inside package.json file.
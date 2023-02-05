#install react, install react-dom
#npx parcel index.html -> npx means execute using npm
#add type=module in script tag or browser will not understand, specify script tag is module we cannot import script but modules
#parcel does HMR hot module reload/replacement
#file watcher algorithm from parcel does watch all files written in c++
#dist folder is development version of project and serves it on server
#minification of files are in dist and parcel-cache
#cleaning of code
#optimization of images
#production build will come to the website not node modules, node modules will come but minified
#superfast build algorithm
#caching while development, if images come from backend it doesnt only if stored on client
#compression
#compatible with older version of browser, add polyfills
#https on dev npx parcel index.html --https
#consistent hashing algorithm to cache files
#zero config
#transitive dependencies -> which we dont import directly, installed package install these dependencies and form dependency tree
#babel-plugin-transform-remove-console -> to remove console.logs

//###############  GIT Commands  
//…create a new repository on the command line
```bash
git init
git add .
git commit -m "Updated code"
git remote add origin https://github.com/mpdash/learn-typescript.git
git push -u origin main
```

//push an update from the command line
```bash
git add . && git commit -m "update" && git push
```

//############### Project commands 
// Run the following commands:

node -v
npm -v
in VS Code install "Live Server" extension

npm install typescript --save-dev
//will install typescript in local folder
//and create node_modules, package.json, package-lock.json


npx tsc app.ts --watch
//TypeScript compiler(tsc) will create a respective js file 
// --watch to reflect continous change on .js files

node app.js
//will run the js file


npx tsc --init
// to create tsconfig.json

rm -rf dist
//clear dist folder before compile

npx tsc
// compile the .ts files and create .js files for each one of them



//############### Basic TypeScript commands 
Note: VS Code Extensions 
        * "Live Server"

// Run the following commands to check node installations:
```bash
node -v
npm -v
```

//To install typescript in local folder and create node_modules, package.json, package-lock.json:
```bash
npm install typescript --save-dev
```

//To create .js files, run TypeScript compiler(tsc) 
// --watch to reflect continous change on .js files:
```bash
npx tsc app.ts --watch
```

//To run the js file:
```bash
node app.js
```

// To create tsconfig.json
```bash
npx tsc --init
```

//To clear dist folder before compile
```bash
rm -rf dist
```

// To compile ALL the .ts files and create .js files for each one of them
```bash
npx tsc
```

//############### Project commands 
1.  To install typescript in local folder and create node_modules, package.json, package-lock.json:
```bash
npm install typescript --save-dev
```

2.  To create tsconfig.json (project settings)
```bash
npx tsc --init
```

3.  To compile ALL the .ts files and create .js files for each one of them
```bash
npx tsc
```

4.  For continous compilation open a new terminal and run:
```bash
npx tsc -w
```

5.  To run a specific js file:
```bash
node dist/app.js
```

6.  Run a local http server through "Live Server"

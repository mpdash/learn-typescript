//###############  GIT Commands  
1. Open the folder in the terminal
```bash
cd learn-typescript
```

2. Add a .gitignore first (important for TypeScript)
This keeps node_modules and compiled output out of GitHub:
```bash
printf "node_modules/\ndist/\n.env\n" > .gitignore
```

3. Initialize Git (only if you haven’t already)
```bash
git init
git branch -M main
```

4. Stage and commit
```bash
git add .
git commit -m "Add TypeScript learning project"
```

5. Connect to GitHub and push
If you already created the repo on GitHub:
```bash
git remote add origin https://github.com/mpdash/learn-typescript.git
git push -u origin main
```

If the GitHub repo has a README that your local project doesn’t have, the push will be rejected. Run this first, then push again:
```bash
git pull origin main --allow-unrelated-histories
```

6. For later changes, the routine is:
```bash
git add .
git commit -m "Updated code"
git push
```

7. Tips
Run before committing to check what’s staged.
```bash
git status
```

//View the .gitignore file itself
```bash
cat .gitignore
```

//check all ignored files
```bash
git status --ignored
```

//Check what’s actually being tracked
```bash
git ls-files
```

//Preview what Git would ignore in a folder
```bash
git ls-files --others --ignored --exclude-standard
```

If git init was already done, skip step 3. Running it again is harmless, but git branch -M main is only needed if your branch isn’t named main.  
Commit package.json, package-lock.json, and tsconfig.json. 
Don’t commit node_modules,dist,.env



//…create a new repository on the command line:
```bash
git init
git add .
git commit -m "Updated code"
git remote add origin https://github.com/mpdash/learn-typescript.git
git push -u origin main
```
//add gitignore file
```bash
printf "node_modules/\ndist/\n.env\n" > .gitignore
```



//…push an update from local to github repo on the command line:
```bash
git add . && git commit -m "update" && git push
```

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

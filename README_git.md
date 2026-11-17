//###############  New Repository  
1. Open the folder in the terminal
```bash
cd learn-typescript
```

2. Add a .gitignore first (important for TypeScript)
This keeps node_modules and compiled output out of GitHub:
```bash
printf "node_modules/\ndist/\n.env\n**/.DS_Store\n" > .gitignore
```

3. Initialize Git (only if you haven’t already)
```bash
git init
```

4. Stage and commit
```bash
git add .
git commit -m "Initializing git $(date '+%Y-%m-%d %H:%M:%S')"
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


//###############  Branch Workflow
Here’s the full branch workflow, starting from where you are (only main on GitHub).
1. Start from an up-to-date main
```bash
git switch main
git pull
```


2. Create a branch
```bash
git switch -c branch1
```
This creates the branch and switches to it. Bottom-left of VS Code now shows add-generics-notes instead of main. The branch exists only on your computer for now.


3. Work and commit
Edit your files as usual, then:
```bash
git status
git add .
git commit -m "branch1 notes $(date '+%Y-%m-%d %H:%M:%S')"
```
Repeat as many times as you like. All commits go to your branch, and main stays untouched.


4. Push the branch to GitHub
First time for this branch:
```bash
git push -u origin branch1
```
After that, plain "git push" works.


5. Open a pull request on GitHub
Go to your repo on GitHub. A yellow banner appears: Compare & pull request. Click it.
Add a title and short description.
Click Create pull request.
Review the Files changed tab to check your changes.
Click Merge pull request, then Confirm merge.
Click Delete branch (GitHub offers this right after merging).


6. Sync your computer
```bash
git switch main
git pull
git branch -d branch1
```
* git pull brings the merged changes into your local main.
* git branch -d deletes the finished branch locally.


7. Repeat for the next task
```bash
git switch -c next-task-name
```


The whole cycle at a glance
main → create branch → commit → push branch → pull request → merge → pull main → delete branch

Tips
- One branch per task. Keep branches small and focused (fix-readme, add-interfaces).
- Check your branch before committing. Look at the bottom-left of VS Code, so you don’t commit to main by accident.
- Forgot to branch and already edited files? Run git switch -c new-branch-name. Your uncommitted changes come along to the new branch.
- Branch gets behind main? Run git merge main while on your branch to bring in the latest changes.
- Merge conflicts can appear in a pull request if the same lines changed on both sides. GitHub shows a Resolve conflicts button, or you can fix them locally the way you did earlier.
- Optional protection: in Settings → Branches, add a rule requiring pull requests for main, so you can’t push to it directly by mistake.


In VS Code (without commands)
1. Click the branch name at the bottom-left, then Create new branch....
2. Commit using the Source Control panel, then click Publish Branch.
3. Open the pull request on GitHub (or with the GitHub Pull Requests extension).
4. After merging, switch back to main from the branch menu and click Sync Changes.



//#############  Shortcuts
Add, commit, and push in one line:
```bash
git add . && git commit -m "update $(date '+%Y-%m-%d %H:%M:%S')" && git push
```
You can make it a reusable shortcut (bash/zsh)
Add this to ~/.zshrc or ~/.bashrc:
```bash
alias gsave='git add . && git commit -m "update $(date +"%Y-%m-%d %H:%M:%S")" && git push'
```
Then run source ~/.zshrc and just type gsave. The alias is wrapped in single quotes, so the date is calculated each time you run it, not when the shell starts.



//##########  gitignore
View the .gitignore file itself
```bash
cat .gitignore
```

check all ignored files
```bash
git status --ignored
```

Check what’s actually being tracked
```bash
git ls-files
```

Preview what Git would ignore in a folder
```bash
git ls-files --others --ignored --exclude-standard
```

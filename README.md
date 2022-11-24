## GITHUB PAGES

This branch contains the code necessary to display this React App in the github pages. If you want to see the actual code head over to the main branch.

### STEPS

- `npm install gh-pages --save-dev`
- Head over to package.json and add the following:
  - The URL that the app will be displayed to i.e. the one that github-pages provides
    `"homepage": "https://kostas23github.github.io/{nameOfRepo}"` in this case hover-swipe-effect
  - In the scripts obj add:
    `"predeploy": "npm run build",` AND `"deploy": "gh-pages -d build",`
  - Execute the deploy
    `npm run deploy {-- -m "Deploy React app to GitHub Pages"}` The part in {} is optional and adds a custom commit msg to the deployment.
- Then a new branch named gh-pages will be created containing the code necessary to display the app.
- Next go in gihub to the pages section and select this new branch to display in the github pages.

### OFFICIAL LINK
You can find the official documentation in: [react-gh-pages](https://github.com/gitname/react-gh-pages)

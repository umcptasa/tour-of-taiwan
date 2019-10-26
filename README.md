# tour-of-taiwan

# Structure
## React
[index.js](src/pages/index.js) has a router that links to other pages. Each page has its own folder to organize components related to that page ONLY. 

Ex: [MainPage/](src/pages/MainPage) has
- [MainPage.jsx](src/pages/MainPage/MainPage.jsx) which holds main logic for the page
- [Youyouka.jsx](src/pages/MainPage/Youyouka.jsx) which is the Youyouka component
Since no other page uses the Youyouka, we put it in the MainPage folder

### Shared Components
Components used by multiple files are put in [src/components/](src/components/). Examples are buttons and navbars! They're all in file structures because that's how the template has it `¯\_(ツ)_/¯`

## Backend
In [src/modules](src/modules) there's [src/modules/MoneyVerifier.js](src/modules/MoneyVerifier.js)

Class framework already laid out as
- `add(amount: int, code: string): boolean`
- `subtract(amount: int, code: string): boolean`
- `getAmount(): int`

Local storage and future database stuff also handled here

# How to write React code
React is comprised of components that can be re-used to make UI. I think all we'll need are stateless functional components


## Why Flow?
Flow is a static type checker! It allows us to have type-safety which JavaScript doesn't have natively. Yay type-safety!

# Installation
## Gatsby
```
npm install -g gatsby-cli
```

## Flow
Steps listed on the [official Flow installation site](https://flow.org/en/docs/install/)
1. Install compiler
```
npm install --save-dev @babel/core @babel/cli @babel/preset-flow
```
2. Install flow
```
npm install --save-dev flow-bin
```
3. Oh wait can we just use 
```
npm install
```
4. Run flow with
```
npm run flow init
```

### Set-up Visual Studio code to run it
Install the [Flow Language Support](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode) extension.

Go to Settings and find `javascript.validate.enable` and set it to false

I've already set up the flow config file so that it runs fine! 


# [Gatsby Material Kit React Starter](https://amazing-jones-e61bda.netlify.com/)
Gatsby Material Kit React Starter is the adaptation of [Material Kit React](https://www.creative-tim.com/product/material-kit-react) to [Gatsby](https://www.gatsbyjs.org/).



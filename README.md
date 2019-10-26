# tour-of-taiwan
1. [Installation](#installation)
    1. [Gatsby](#gatsby)
    2. [Flow](#flow)
        1. [Visual Studio Code with Flow](#visual-studio-code-with-flow)
2. [Structure](#structure)
    1. [React](#react)
        1. [Shared Components](#shared-components)
    2. [Backend](#backend)
3. [How to:](#how-to)
    1. [GitHub Repo](#use-this-repo)
    1. [Gatsby](#use-gatsby)
    2. [React](#use-react)
    3. [Flow](#use-flow)

3. [How to write React Code](#how-to-write-react-code)
4. [Why everything](#why-everything)
    1. [Gatsby](#why-gatsby)
    1. [Flow](#why-flow)

# Installation
I've already set-up everything in the [package.json](package.json) so all you have to do is
```
npm install
```
## Gatsby
```
npm install -g gatsby-cli
```

## Flow
Already installed if you ran `npm install` but here's step-by-step instructions just in case

Steps listed on the [official Flow installation site](https://flow.org/en/docs/install/)
1. Install compiler
```
npm install --save-dev @babel/core @babel/cli @babel/preset-flow
```
2. Install flow
```
npm install --save-dev flow-bin
```
3. Add flow to the package.json
```
{
  "name": "my-flow-project",
  "version": "1.0.0",
  "devDependencies": {
    "flow-bin": "^0.110.1"
  },
  "scripts": {
    "flow": "flow"
  }
}
```
4. Initialize flow with
```
npm run flow init
```
5. Run flow with
```
npm run flow
```

### Visual Studio Code with Flow
Install the [Flow Language Support](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode) extension.

Go to Settings and find `javascript.validate.enable` and set it to false

I've already set up the flow config file so that it runs fine! You may need to tweak additional settings in the config file though


# Structure
## React
[index.js](src/pages/index.js) has a router that links to other pages. Each page has its own folder to organize components related to that page ONLY. 

Ex: [MainPage/](src/pages/MainPage) has
- [MainPage.jsx](src/pages/MainPage/MainPage.jsx) which holds main logic for the page
- [Youyouka.jsx](src/pages/MainPage/Youyouka.jsx) which is the Youyouka component
Since no other page uses the Youyouka, we put it in the MainPage folder. Feel free to add other components!

### Shared Components
Components used by multiple files are put in [src/components/](src/components/). Examples are buttons and navbars! They're all in file structures because that's how the template has it `¯\_(ツ)_/¯`

## Backend
In [src/modules](src/modules) there's [src/modules/MoneyVerifier.js](src/modules/MoneyVerifier.js)

Class framework already laid out as
- `add(amount: number, code: string): boolean`
- `subtract(amount: number, code: string): boolean`
- `getAmount(): number`

Local storage and future database stuff also handled here

# How to
## Use this Repo
Please please **PLEASE** make your own branches to do your work! This allows multiple people to work on parts of the project at the same time. If you don't know how, here's a [quick primer](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)

Create a new branch:
```
git checkout -b [branch_name]
```

Merge your code to master
```
git checkout master
git merge [branch_name]
```

Every branch and merge should represent a working addition. Please run `gatsby develop` and check that the site compiles before you merge to master!


## Use Gatsby
[Gatsby](https://www.gatsbyjs.org/) is an open-source static site generator that uses React! We're using it to easily create a site with offline, image loading, and PWA features. It turns all of our React code into html, JS, and CSS files that any browser can read!

If you want to follow the entire [quick start](https://www.gatsbyjs.org/docs/quick-start) guide, there's step-by-step instructions for how to start your own Gatsby project.

For our project, all we'll need is 
```
gatsby develop
```
which you can run in the `tour-of-taiwan` project folder. This will compile our files and host a site on `localhost:8000` which you can go to in your browser to see what our site looks like!

Note that this is only a development build, so in order to actually publish stuff, we'll have to run `gatsby build`. But you won't have to worry about that! Our GoDaddy server will do that for us
## Use React
React is comprised of components that can be re-used to make UI. Since all we'll need are stateless functional components, we're going to stick to that format. Plus, functional components have less overhead and even some performance boosts, so they're a good style to learn! You can find more resources [here](https://programmingwithmosh.com/react/react-functional-components/) and [here](https://javascriptplayground.com/functional-stateless-components-react/).

React components pass down data to each other in the form of `props`. If we wanted to pass down the `MoneyVerifier` variable, we could pass it to Youyouka via the `props` argument.

For example in [Youyouka.jsx](src/pages/MainPage/Youyouka.jsx)
```
type Props = {
    verifier: MoneyVerifier
};

const Youyouka = (props: Props) => {
    const {verifier} = props;
    return (<div>
        <h1>
            {verifier.getAmount()}
        </h1>
    </div>);
}

Youyouka.defaultProps = {
    // if we had any optional props, we can define what values they have here
};

export default Youyouka
```
- `type Props` is what we use to define what props or properties the component should get
- `const Youyouka = (props: Props) => {` defines the component
    - `(props: Props)` says that the `props` variable has type `Props` which we defined above
    - This declaration could also be in the form `function Youyouka(props: Props) {}`
- `const {verifier} = props` extracts out the verifier from the passed in props
- `Youyouka.defaultProps` allows us to define the default values for optional parameters 
    - Since verifier is a required parameter, we don't define a default value for it

To call the `Youyouka` component, we simply import it in another file and use
```
<Youyouka verifier={our_defined_verifier}/>
```

If we wanted to pass in children to the component like we do for `<div> <h1> I'm a child </h1> </div>` then we can do `<Component> <h1> I'm a child </h1> </Component` and in `Component.jsx` 
```
const Component = (props: Props) => {
    const {children} = props;
    return (<div>
            {children}
    </div>);
}
```

We use flow for type safety. You can find the docs for how we're going to add types to react [here](https://flow.org/en/docs/react/components/).

## Use Flow
Flow is a static type checker! It allows us to have type-safety which JavaScript doesn't have natively. Yay type-safety! If you have VS Code installed, you can run the Flow server from within the editor. To do that, follow the instructions in [installing flow](#flow). Then, when you open a .js or .jsx file, the Flow server should start! 

In order to have flow check your file, you have to have `// @flow` or `/* @flow */` somewhere in the file. Usually we put it at the top along with the component description. Then, flow checks your file for type safety. More information can be found in the [flow docs](https://flow.org/en/docs/usage/)

As noted in the [react section](#use-react), we use flow to specify props, return types, and variable types. Flow looks like normal JavaScript except that we add `: type` after we declare a type. For example,
```
function add(x, y) {
    return x + y;
}
```
 becomes
 ```
 function add(x: number, y: number): number {
     return x + y;
 }
 ```

You can find flow types [here](https://flow.org/en/docs/types/primitives/) .

# [Gatsby Material Kit React Starter](https://amazing-jones-e61bda.netlify.com/)
Gatsby Material Kit React Starter is the adaptation of [Material Kit React](https://www.creative-tim.com/product/material-kit-react) to [Gatsby](https://www.gatsbyjs.org/).



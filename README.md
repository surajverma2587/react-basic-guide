# React Basic Guide

## Create a React App

```
npx create-react-app <my-react-app-name>
```

## Storybook Setup

Make sure you `cd` into your React project and run 

```
npx sb init
```

Make sure you add this to the `package.json` after the `private: true,` line

```json
"resolutions": {
  "babel-loader": "8.1.0"
},
```

Run the storybook using the command

```
npm run storybook
```

Also, make sure you can run your react app by using the command

```
npm run start
```

Remove the `stories` folder from the `src` folder as these are sample stories and you will later add your own stories in your react project. Stop your storybook `ctrl + c` and re-run `npm run storybook`

## Remove the Boilerplate React Code

**1. index.js**

Replace it with this

```javascript
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

**2. App.js**

Replace it with this

```javascript
import "./App.css";

const App = () => {
  return (
    <div>
      <h1>My App Goes Here</h1>
    </div>
  );
};

export default App;
```

**3. App.css | index.css**

Clear the contents of these files but do not delete them as you can add your custom `css` here

**4. logo.svg | reportWebVitals.js | setupTests.js | App.test.js**

Delete all these files

## Files and Folder Structure

- `src/components` - this is where all your components are stored
- `src/components/MyComponentName` - each component should start with a Uppercase letter and could have the following files:
  - `src/components/MyComponentName/index.js` - all the component code which is required
  - `src/components/MyComponentName/MyComponentName.stories.js` - the story for the component is in this file which will show up in the storybook
  - `src/components/MyComponentName/MyComponentName.css` - all the component styles are defined in this file

## Basic Component Structure

Add the following code to any newly created component `src/components/MyComponentName/index.js`

```
const MyComponentName = (props) => {
  return <div></div>
}

export default MyComponentName
```

## Basic Story Structure

Add the following code to any newly created story `src/components/MyComponentName/MyComponentName.stories.js`

```javascript
import React from "react";

import MyComponentName from ".";

export default {
  title: "Components/MyComponentName",
  component: MyComponentName,
};

export const MyComponentNameStory = (props) => <MyComponentName {...props} />;

MyComponentNameStory.args = {
  /** props here if any see sample below:
    propName: value
  */
};
```

### Adding Multiple Sub-Stories to a Story

Add the following code to any newly created story `src/components/MyComponentName/MyComponentName.stories.js`

```javascript
import React from "react";

import MyComponentName from ".";

export default {
  title: "Components/MyComponentName",
  component: MyComponentName,
};

export const MyComponentNameStory1 = (props) => <MyComponentName {...props} />;
export const MyComponentNameStory2 = (props) => <MyComponentName {...props} />;

MyComponentNameStory1.args = {
  /** props here if any for story 1 see sample below:
    propName: value
  */
};

MyComponentNameStory2.args = {
  /** props here if any for story 2 see sample below:
    propName: value
  */
};
```

## Adding Styles to our Components

Add any custom css t your styles file within your component directory `src/components/MyComponentName/MyComponentName.css`

Add styles like any other `.css` file like sample shown below:

```
.myClassName {
  color: #4d4d4d
}
```

Then make sure you import your `src/components/MyComponentName/MyComponentName.css` file in to the component file `src/components/MyComponentName/index.js` like this:

```
import "./MyComponentName.css"
```

Then you can now use the classnames from the `.css` file in your component file like this:

```
<div className="myClassName"></div>
```
# My Notes (will be formatted)

<br/>
WHAT DO I LEARN (Ignite React.js II (with Vite))<br/><br/>

### Components

=> useSate (immutability - object cannot be changed, only recreated)<br/><br/>

### Closures

=> "Inside an scope or function each time you change a state (useState) the element will create a new context. To avoid this you cant asign the state to a variable or execute a function inside set element state function (setNewState((state)=>{return state + 1}))" - something like that.<br/><br/>

#### States

#### Hooks

#### Scoped CSS (css-modules)

#### Phosphor Icons (npm install phosphor-react)

#### Date FNS (npm i date-fns) - Work with dates

#### UUID (npm i react-uuid) - to generate unique keys<br/><br/>

### RENDERING PATTERNS<br/>

<br/>SSR - Back-End => Front-End<br/>
=> Server Side Render (Defaul pattern, server process request and return HTML, CSS, JS already compiled)<br/>
SPA - Back-End => FrameWork(React, etc) => Front-Side<br/>
=> Single Page Application (Growing concept. Backend return basicly request data as JSON\*)<br/>

#### - Compilers - Babel (Convert code to browser friendly compatible format)<br/>

#### - Bundle - Webpack (Organize multiple module file dependencies to static files) (Other options Vite, Snowpack)<br/>

#### - caniuse.com => Browser compatibility

#### - JavaScrip Object Notation

<br/>

## Projetc<br/>

BASIC STEP<br/>

<ol>
<li>install Note last LTS</li>
<li>npm create vite@latest</li>
<li>project-name / react / react (TS will be added latter)</li>
<li>cd project-name</li>
<li>npm i (install dependencies)</li>
<li>npm run dev</li>
</ol>

WORKING WITH COMPONENTS<br/>

React Component: "Any function that return HTML content"<br/>

Defaul Export - the function/component can be imported with any name:<br/>
Post.jsx: <br/>

```jsx
export default Post(){}
```

=> App.jsx:<br/>

```jsx
import PostComponent from "./Post";
```

=> can lead to use wrong component name in application<br/>

vs<br/>

Named Export - must import the component with same name and curly brackets<br/>
=> Post.jsx:

```jsx
export Post(){}
```

=> App.jsx:

```jsx
import { Post } from "./Post";
```

create a component folder inside root/src and, on demand, create folders for those components<br/>
project_root/src/components/<br/>
Header/ Header.jsx Header.module.css or styles.css

<ul>
<li>LogIn/ LogIn.jsx ...</li>
<li>Main/ Main.jsx ...</li>
<li>Footer/ Footer.jsx ... (so on and so forth)</li>
</ul>

PROPERTIES<br/>
Passing to values/"variables" to components as props<br/>
=> Post.jsx:

```jsx
export default Post(props){}
```

=> App.jsx:

```jsx
<Post author='AnyName' content'any text' />
```

each component can have his own values<br/>

HTML<br/>
Attention to semantic<br/>

Scoped CSS (css-modules)
import Fonts on index.html (tip- move preconnect to top of index.html <head>, below charset)

- REMEMBER: some HTML elements won´t inherit body or parents style
- REMEMBER2: use relative units (rem, vh, etc) when possible (accessibility)

global.css

```css
:root {
}
```

App.jsx

```jsx
import "./global.css";
```

Header.jsx

```jsx
import styles from "./Header.module.css";

<div className={styles.header}>Any Content</div>;
```

Header.module.css (will generate an 'pseudo-class' to avoid conflict)

```css
.header {
  background: #333;
}
```

On browser console:

```html
<div class="_header_6lda4_1">CSS</div>
```

ASSETS (src/assetc)

- images<br/>

```jsx
import igniteLogo from "../assets/ignite-logo.svg";
```

<br/><br/>

# Typescript

=> JS SUPERSET created by Mycrosoft that add static scrict typing

### Creating an specific type with attrib typed. Than expecting a function param with an specific type user created.

```tsx
interface UserProps {
	name: string
	bio: string
	age: number
}
interface PostProps{
	author: UserProps  // Using a user made type
	publishedAt: Date
	content: string
}

function sumAge({autor, publishedAt, content}: PostProps){
	...
}
```

### Creating a new Typescript project using Vite

> npm create-vite@latest

react / react-ts / cd project folder / npm install

Event is deprecated and should now be pass as function param and be typed

```tsx
function handleSomeThing(event: FormEvent) {
  // and typed it with correct Event
  event.preventDefault();
}

// OR passing who trigger the event, this case <HTMLTextAreaElement>
function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
  setNewCommentText(event.target.value);
}
```

#### Adding Typescript on a previous created application (TODO)

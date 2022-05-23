# Avishka-UI
react js custom components using avishka.css

👉  [Documentation - https://avishka-ui.vercel.app ](https://avishka-ui.vercel.app/)

## Installation

```jsx
npm i avishka-ui
```
or
```
yarn add avishka-ui
```

## Usage

```js
// src/App.js
import { Button, Badge } from "avishka-ui";
```

### for next.js
```js
// pages/_app.js
import 'avishka-ui/dist/style/main.css'
```
now you can use

```js
// pages/index.js
import { Button, Badge } from "avishka-ui/next";
```


### Button 
```js
<Button color="primary">primary</Button>
<Button color="secondary">secondary</Button>
<Button color="error">error</Button>
<Button color="warning">warning</Button>
<Button color="info">info</Button>
<Button color="success">success</Button>
``` 

### Badge
```js
<Badge color="primary">primary</Badge>
<Badge color="secondary">secondary</Badge>
<Badge color="error">error</Badge>
<Badge color="warning">warning</Badge>
<Badge color="info">info</Badge>
<Badge color="success">success</Badge>
``` 

#### Outline 
```js
<Button color="primary" outline="true">primary</Button>
<Badge color="primary" outline="true">primary</Badge>
```

#### Shadow
```js
<Button color="primary" shadow="true">primary</Button>
<Badge color="primary" shadow="true">primary</Badge>
```

#### Outline and Shadow
```js
<Button color="primary" outline="true" shadow="true">primary</Button>
<Badge color="primary" outline="true" shadow="true">primary</Badge>
```

button with icon, border, fontSize and more . . .

👉  [Check Documentation - https://avishka-ui.vercel.app ](https://avishka-ui.vercel.app/)

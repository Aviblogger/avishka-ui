# Avishka-UI
react js custom components using avishka.css

👉  [Documentation - https://avishka-ui.vercel.app ](https://avishka-ui.vercel.app/)

```
npm i avishka-ui
```
or
```
yarn add avishka-ui
```

```
import { Button, Badge } from "avishka-ui";
```

for next.js
```
import { Button, Badge } from "avishka-ui/next";

import 'avishka-ui/dist/style/main.css'

```


### Button 
```jsx
<Button color="primary">primary</Button>
<Button color="secondary">secondary</Button>
<Button color="error">error</Button>
<Button color="warning">warning</Button>
<Button color="info">info</Button>
<Button color="success">success</Button>
``` 

### Badge
```jsx
<Badge color="primary">primary</Badge>
<Badge color="secondary">secondary</Badge>
<Badge color="error">error</Badge>
<Badge color="warning">warning</Badge>
<Badge color="info">info</Badge>
<Badge color="success">success</Badge>
``` 

#### Outline 
```jsx
<Button color="primary" outline="true">primary</Button>
<Badge color="primary" outline="true">primary</Badge>
```

#### Shadow
```jsx
<Button color="primary" shadow="true">primary</Button>
<Badge color="primary" shadow="true">primary</Badge>
```

#### Outline and Shadow
```jsx
<Button color="primary" outline="true" shadow="true">primary</Button>
<Badge color="primary" outline="true" shadow="true">primary</Badge>
```
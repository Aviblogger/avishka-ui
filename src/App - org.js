import logo from "./logo.svg";
import "./App.css";
import { Button, Badge,Typography,IconButton,Avatar } from "./lib";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

          Avishka-ui
          <Button 
          color="secondary"
       // className="bg-blue-50 text-red-10 fs-40"
           shadow="true"
           outline="true"
            icon={   <svg
                  className="h-6 w-6 text-red-20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="none"
                  />
                  <path
                    fill="currentColor"
                    d="M12.3 22h-.1a10.31 10.31 0 0 1-7.34-3.15a10.46 10.46 0 0 1-.26-14a10.13 10.13 0 0 1 4-2.74a1 1 0 0 1 1.06.22a1 1 0 0 1 .24 1a8.4 8.4 0 0 0 1.94 8.81a8.47 8.47 0 0 0 8.83 1.94a1 1 0 0 1 1.27 1.29A10.16 10.16 0 0 1 19.6 19a10.28 10.28 0 0 1-7.3 3ZM7.46 4.92a7.93 7.93 0 0 0-1.37 1.22a8.44 8.44 0 0 0 .2 11.32A8.29 8.29 0 0 0 12.22 20h.08a8.34 8.34 0 0 0 6.78-3.49A10.37 10.37 0 0 1 7.46 4.92Z"
                  />
                </svg>}
                fontSize="10"
                border="30"
            >
            ok now test tyydy
          </Button>
          <Button color="primary">primary</Button>
          <Button color="success">ok now</Button>
          <Button color="warning">ok now</Button>
          <Button color="info">ok now</Button>
          <Button color="error">ok nowm</Button>
          <br />
          <Button color="error" outline="true">
            ok now{" "}
          </Button>
          <Button color="warning" outline="true">
            ok now
          </Button>
          <Button color="info" outline="true">
            ok now
          </Button>
          <Button color="success" outline="true">
            ok now
          </Button>
          <Button color="primary" outline="true">
            ok now
          </Button>
          <Button color="secondary" outline="true">
            ok now
          </Button>
          <br />
          <Button color="secondary" outline="true" shadow>
            ok now
          </Button>
          <Button color="secondary">ok now</Button>

        <Badge color="error">ERROR</Badge>
        <Badge color="primary">warning</Badge>
        <Badge color="success">warning</Badge>
        <Badge color="warning">warning</Badge>
        <Badge color="info">warning</Badge>
        <Badge color="secondary">warning</Badge>
        <Badge color="secondary" shadow>
          warning
        </Badge>

        <br />
        <Badge color="secondary" outline="true">
          ERROR
        </Badge>
        <Badge color="primary" outline="true">
          ERROR
        </Badge>
        <Badge color="success" outline="true">
          ERROR
        </Badge>
        <Badge color="warning" outline="true">
          ERROR
        </Badge>
        <Badge color="info" outline="true">
          ERROR5
        </Badge>
        <Badge color="error" outline="true">
          ERROR
        </Badge>
           <Button color="error" round="30" fontSize="40">
          ERROR
        </Button>
          <Badge color="error" round="30" fontSize="10">
          ERROR
        </Badge>
        <IconButton
        color="error"
         icon={   <svg
                  className="h-6 w-6 text-red-20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="none"
                  />
                  <path
                    fill="currentColor"
                    d="M12.3 22h-.1a10.31 10.31 0 0 1-7.34-3.15a10.46 10.46 0 0 1-.26-14a10.13 10.13 0 0 1 4-2.74a1 1 0 0 1 1.06.22a1 1 0 0 1 .24 1a8.4 8.4 0 0 0 1.94 8.81a8.47 8.47 0 0 0 8.83 1.94a1 1 0 0 1 1.27 1.29A10.16 10.16 0 0 1 19.6 19a10.28 10.28 0 0 1-7.3 3ZM7.46 4.92a7.93 7.93 0 0 0-1.37 1.22a8.44 8.44 0 0 0 .2 11.32A8.29 8.29 0 0 0 12.22 20h.08a8.34 8.34 0 0 0 6.78-3.49A10.37 10.37 0 0 1 7.46 4.92Z"
                  />
                </svg>}
                />
        <br/>
        <Typography type="h1">Typography</Typography>
        <Typography type="h2">Typography</Typography>
        <Typography type="h3">Typography</Typography>
        <Typography type="h4">Typography</Typography>
        <Typography type="h5">Typography</Typography>
        <Typography type="h6">Typography</Typography>

      </header>
           <Button color="info" round="30" fontSize="40">ok now</Button>

<div className="avishka-ui--bg-gray-90 avishka-ui--text-gray-10">
        <Typography type="h2" >avishka-ui</Typography>
        <Avatar src="./avatar.jpg" round="full"/><br/>
        <Avatar src="./avatar.jpg" size="20" round="30"/><br/>
        <Avatar src="./avatar.jpg" size="30" round="40"/><br/>
        <Avatar src="./avatar.jpg" size="40" round="40"/><br/>
        <Avatar src="./avatar.jpg" size="50" round="50"/><br/>

</div>
    </div>
  );
}

export default App;

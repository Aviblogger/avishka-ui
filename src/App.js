import logo from "./logo.svg";
import { Button, Badge,Typography,IconButton,Avatar, Alert } from "./lib";
import "./App.css";

function App() {
  return (
   <>
        <Typography variant="h1"  color="white" >Button</Typography>
   <div className="flex avishka-ui--btn-custom">
          <Button color="primary">primary</Button>
          <Button color="secondary">secondary</Button>
          <Button color="warning">warining</Button>
          <Button color="error">error</Button>
          <Button color="info">info</Button>
          <Button color="success">success</Button>

   </div>

   <Typography variant="h1"  color="white" >Badge</Typography>
   <div className="flex avishka-ui--btn-custom">
          <Badge color="primary">primary</Badge>
          <Badge color="secondary">secondary</Badge>
          <Badge color="warning">warining</Badge>
          <Badge color="error">error</Badge>
          <Badge color="info">info</Badge>
          <Badge color="success">success</Badge>

   </div>
     <Typography variant="h1" color="white" >Typography</Typography>
        <div className="avishka-ui--avatar-custom avishka-ui--btn-custom">
        <Typography variant="h1" color="primary" >Typography</Typography>
        <Typography variant="h2" color="error" >Typography</Typography>
        <Typography variant="h3" color="warning" >Typography</Typography>
        <Typography variant="h4" color="white">Typography</Typography>
        <Typography variant="h5" color="black">Typography</Typography>
        <Typography variant="h6" color="">Typography</Typography>

      </div>

     <Typography variant="h1"  color="white"  >Avatar</Typography>
        <div className="avishka-ui--avatar-custom avishka-ui--btn-custom">
        <Avatar src="./avatar.jpg" size="10"  round="full"/><br/>
        <Avatar src="./avatar.jpg" size="20" round="full"/><br/>
        <Avatar src="./avatar.jpg" size="30" round="full"/><br/>
        <Avatar src="./avatar.jpg" size="40" round="full"/><br/>
        <Avatar src="./avatar.jpg" size="50" round="full"/><br/>
      </div>

    <Typography variant="h1"  color="white" >Icon with button</Typography>

 <div className="flex avishka-ui--btn-custom">
          <Button color="primary"
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
          >primary</Button>
          <Button   icon={   <svg
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
                </svg>} color="secondary">secondary</Button>
          <Button   icon={   <svg
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
                </svg>} color="warning">warining</Button>
          <Button   icon={   <svg
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
                </svg>} color="error">error</Button>
          <Button   icon={   <svg
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
                </svg>} color="info">info</Button>
          <Button   icon={   <svg
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
                </svg>} color="success">success</Button>

   </div>
       <Typography variant="h1"  color="white" >IconButton</Typography>

 <div className="flex avishka-ui--btn-custom">
          <IconButton
           color="primary"
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
          <IconButton icon={   <svg
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
                </svg>} color="secondary"/>
          <IconButton icon={   <svg
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
                </svg>} color="warning"/>
          <IconButton icon={   <svg
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
                </svg>} color="error"/>
          <IconButton icon={   <svg
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
                </svg>} color="info"/>
          <IconButton icon={   <svg
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
                </svg>} color="success"/>

   </div>
           <div className="avishka-ui--avatar-custom avishka-ui--btn-custom">

          <Typography variant="h1"  color="white" >Alert</Typography>
          <Alert color="primary">test this snae djnsarej dcskjar</Alert>
          <Alert color="error">test this snae djnsarej dcskjar</Alert>
          <Alert color="warning">test this snae djnsarej dcskjar</Alert>
          <Alert color="secondary">test this snae djnsarej dcskjar</Alert>
          <Alert color="info">test this snae djnsarej dcskjar</Alert>
          <Alert color="success">test this snae djnsarej dcskjar</Alert>
</div>
   </>
  );
}

export default App;

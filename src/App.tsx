import { Avatar,Spinner,Badge,Button, Card, CardDescription, CardSubtitle, CardTitle, Input,Textarea } from "./components";
import { Alert, AlertDescription, AlertTitle } from "./components/Alert";

function getInitials(input: string): string {
  // Split the input string into words
  const words: string[] = input.split(" ");

  // Extract the first letter of each word
  const initials: string[] = words.map((word) => word.charAt(0).toUpperCase());

  // Join the initials to form the result
  let result: string = initials.join("");

  // Limit the result to a maximum of 2 letters
  result = result.slice(0, 2);

  return result;
}

// Examples
console.log(getInitials("avishka devinda")); // Output: "AD"
console.log(getInitials("avishka")); // Output: "A"
console.log(getInitials("Avishka devinda jay")); // Output: "AD"

function App() {
  return (
    <div className="flex flex-col h-screen justify-center items-center space-y-10">
      <div className="flex space-x-5">
        <Button >Button</Button>
        <Button variant={"secondary"}>Button</Button>
        <Button variant={"danger"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-plus"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
          Button
        </Button>
      </div>
      <div className="flex space-x-5">
        <Badge>Badge</Badge>
        <Badge variant={"secondary"}>Badge</Badge>
        <Badge variant={"danger"}>Badge</Badge>
      </div>
      <div className="flex ">
        <Alert className="w-[350px]">
          <AlertTitle>alert title</AlertTitle>
          <AlertDescription>alert diso lreon soal menda</AlertDescription>
          Badge
        </Alert>

        <Alert variant={"danger"} className="w-[350px]">
          <AlertTitle>alert title</AlertTitle>
          <AlertDescription>alert diso lreon soal menda</AlertDescription>
          Badge
        </Alert>

        <Avatar size={'sm'} initials=" dfrsr try" src="https://github.com/shadcn.png" />

        <Avatar size={'sm'} initials=" dfrsr tr"/>

      </div>
      <div>
      <Card className="w-[350px]">
<CardTitle>Card title</CardTitle>
<CardSubtitle>CARD SUBTITLE</CardSubtitle>
<CardDescription>yo oyoy oy oy oy</CardDescription>
Some quick example text to build on the card title and make up the bulk of the card's content.

</Card>

<Input variant={'danger'} />

<Textarea variant={'danger'}/>

<Spinner size={"xl"}/>
      </div>
    </div>
  );
}

export default App;

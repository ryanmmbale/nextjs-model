import Hello from './components/hello';
import Sssrender from './components/ssrender';

export default function Home() {
  console.log("What am I doing here? -- SERVER/CLIENT?");
  return (
    <>
    <h1>Hello Broman</h1>
    <Hello/>
    <Sssrender/>
    </>
  );
}

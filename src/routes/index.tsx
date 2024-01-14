import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>The first APP</Title>
      <h1>Hello world!</h1>
      <Counter />
      <p>
        This is my second Internet project. 
        Visit{" "}
        <a href="https://forester-den.narod.ru" target="_blank">
          forester-den.narod.ru
        </a>{" "}
        to watch my first project.
      </p>
      <p>
        I will create next features:
      </p> 
      <ul>
        <li>Email integration</li>
        <li>Broadcast integration</li>
     </ul>
    </main>
  );
}

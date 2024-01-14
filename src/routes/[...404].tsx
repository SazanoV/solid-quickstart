import { Title } from "solid-start";
import { HttpStatusCode } from "solid-start/server";

export default function NotFound() {
  return (
    <main>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <h1>Page Not Found</h1>
      <p>
        Report me about this bug
      </p>
      <h2><a href="mailto:forester-den@rambler.ru&body=Found bug?subject=Bug report">REPORT</a></h2>
    </main>
  );
}

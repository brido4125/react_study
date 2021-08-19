import { Button } from "react-bootstrap";
import "../App.css";

export function Jumbotron() {
  return (
    <div className="jumbotron">
      <h1>20% Season OFF</h1>
      <p>
        This site offer a biggest sale product in the Korea. We hope you to
        enjoy here
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </div>
  );
}

export default Jumbotron;

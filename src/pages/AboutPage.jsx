import Card from "../components/shared/Card";
import { Link } from "react-router-dom";
function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About</h1>
        <p>This is a simple feedback app built with React.</p>
        <p> version 1.0.0</p>
        <p>
          <Link to="/">Go back</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;

import { CoursePart } from "../../types";
import Part from "./Part";

const Content = ({ parts }: { parts: CoursePart[] }) => {
  console.log("parts", parts);

  return (
    <div>
      {parts.map((part) => (
        <Part key={part.name} part={part} />
      ))}
    </div>
  );
};

export default Content;

import { CoursePart } from "../../types";

interface PartProps {
  part: CoursePart;
}

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const Part = ({ part }: PartProps) => {
  switch (part.kind) {
    case "basic":
      return (
        <div>
          <h3>
            {part.name} {part.exerciseCount}
          </h3>

          <p>
            <i>{part.description}</i>
          </p>
        </div>
      );
      break;
    case "group":
      return (
        <div>
          <h3>
            {part.name} {part.exerciseCount}
          </h3>
          <p>project exercises {part.groupProjectCount}</p>
        </div>
      );
      break;
    case "background":
      return (
        <div>
          <h3>
            {part.name} {part.exerciseCount}
          </h3>
          <p>
            <i>{part.description}</i>
          </p>
          <p>submit to: {part.backgroundMaterial}</p>
        </div>
      );
      break;
    case "special":
      return (
        <div>
          <h3>
            {part.name} {part.exerciseCount}
          </h3>
          <p></p>
          <p>
            <i>{part.description}</i>
          </p>
          <p>required skills: {part.requirements.join(", ")}</p>
        </div>
      );
    default:
      return assertNever(part);
      break;
  }
};

export default Part;

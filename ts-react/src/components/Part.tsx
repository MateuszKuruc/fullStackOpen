import { CoursePart } from "../../types";

interface PartProps {
  part: CoursePart;
}

const Part = ({ part }: PartProps) => {
  switch (part.kind) {
    case "basic":
      return (
        <div>
          <h3>{part.name}</h3>
          <p>Exercise count: {part.exerciseCount}</p>
          <p>Description: {part.description}</p>
        </div>
      );
      break;
    case "group":
      return (
        <div>
          <h3>{part.name}</h3>
          <p>Exercise count: {part.exerciseCount}</p>
          <p>Group project count: {part.groupProjectCount}</p>
        </div>
      );
      break;
    case "background":
      return (
        <div>
          <h3>{part.name}</h3>
          <p>Exercise count: {part.exerciseCount}</p>
          <p>Description: {part.description}</p>
          <p>Background material: {part.backgroundMaterial}</p>
        </div>
      );
  }
};

export default Part;

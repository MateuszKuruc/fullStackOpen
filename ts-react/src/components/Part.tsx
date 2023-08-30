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
                <p>{part.exerciseCount}</p>
            </div>
        )
 }
};

export default Part;

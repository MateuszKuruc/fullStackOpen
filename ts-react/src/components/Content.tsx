import { ContentProps } from "../../types";

const Content = ({ parts }: { parts: ContentProps[]}) => {
    console.log('parts', parts)
  return (
    <div>
      {parts.map((p) => (
        <p key={p.name}>
          {p.name} {p.exerciseCount}
        </p>
      ))}
    </div>
  );
};

export default Content;

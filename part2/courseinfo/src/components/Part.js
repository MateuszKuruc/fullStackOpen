const Part = ({ name, exercises }) => {
  return (
    <ul>
      <li>
        {name} {exercises}
      </li>
    </ul>
  );
};

export default Part;

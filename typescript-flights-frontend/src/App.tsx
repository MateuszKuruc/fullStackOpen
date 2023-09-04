import { useEffect, useState } from "react";
import diaryService from "./services/diaries";

const App = () => {
  const [diaries, setDiaries] = useState<Array<any> | null>(null);
  const [date, setDate] = useState("");
  const [visibility, setVisibility] = useState("");
  const [weather, setWeather] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    const fetchDiaries = async () => {
      try {
        const response = await diaryService.getAll();
        const fetchedDiaries = response.data;
        setDiaries(fetchedDiaries);
      } catch (error) {
        console.log("Error fetching diaries", error);
      }
    };
    fetchDiaries();
  }, []);

  const createDiary = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const id = Math.floor(Math.random() * 1000000);
    console.log("data for new diary", date, id, visibility, weather, comment);
    const newNote = {
      date,
      id,
      visibility,
      weather,
      comment,
    };

    diaryService.addDiary(newNote);
  };

  console.log("diaries in app component", diaries);
  return (
    <div>
      <h3>New diary</h3>
      <form onSubmit={createDiary}>
        <div>
          date
          <input
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>
        <div>
          visibility
          <input
            value={visibility}
            onChange={(event) => setVisibility(event.target.value)}
          />
        </div>
        <div>
          weather
          <input
            value={weather}
            onChange={(event) => setWeather(event.target.value)}
          />
        </div>
        <div>
          comment
          <input
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />
        </div>
        <button type="submit">add</button>
      </form>
      <h3>Diary entries</h3>
      {diaries !== null &&
        diaries.map((diary) => (
          <div key={diary.id}>
            <h4>{diary.date}</h4>
            <p>visibility: {diary.visibility}</p>
            <p>weather: {diary.weather}</p>
          </div>
        ))}
    </div>
  );
};

export default App;

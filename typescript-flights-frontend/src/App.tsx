import { useEffect, useState } from "react";
import diaryService from "./services/diaries";
import axios, { AxiosError } from "axios";
import Notification from "./components/Notification";

const App = () => {
  const [diaries, setDiaries] = useState<Array<any> | null>(null);
  const [date, setDate] = useState("");
  const [visibility, setVisibility] = useState("");
  const [weather, setWeather] = useState("");
  const [comment, setComment] = useState("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const fetchDiaries = async () => {
    try {
      const response = await diaryService.getAll();
      const fetchedDiaries = response.data;
      setDiaries(fetchedDiaries);
    } catch (error) {
      console.log("Error fetching diaries", error);
    }
  };

  useEffect(() => {
    fetchDiaries();
  }, []);

  const createDiary = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    try {
      const id = Math.floor(Math.random() * 1000000);
      console.log("data for new diary", date, id, visibility, weather, comment);
      const newNote = {
        date,
        id,
        visibility,
        weather,
        comment,
      };

      await diaryService.addDiary(newNote);
      fetchDiaries();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          console.log(axiosError.response.data);
          setErrorMessage(
            (axiosError.response.data as string) || "Error occured"
          );
          setTimeout(() => {
            setErrorMessage("");
          }, 3000);
        }
      }
    }
  };

  console.log("diaries in app component", diaries);
  return (
    <div>
      <Notification error={errorMessage} />
      <h3>New diary</h3>
      <form onSubmit={createDiary}>
        <div>
          date
          <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>
        <div>
          visibility
          <input
            type="radio"
            name="visibility"
            value="poor"
            onChange={(event) => setVisibility(event.target.value)}
          />
          <label htmlFor="poor">poor</label>
          <input
            type="radio"
            name="visibility"
            value="ok"
            defaultChecked
            onChange={(event) => setVisibility(event.target.value)}
          />
          <label htmlFor="ok">ok</label>
          <input
            type="radio"
            name="visibility"
            value="good"
            onChange={(event) => setVisibility(event.target.value)}
          />
          <label htmlFor="good">good</label>
          <input
            type="radio"
            name="visibility"
            value="great"
            onChange={(event) => setVisibility(event.target.value)}
          />
          <label htmlFor="great">great</label>
        </div>
        <div>
          weather
          {/* <input
            value={weather}
            onChange={(event) => setWeather(event.target.value)}
          /> */}
          <input
            type="radio"
            name="weather"
            value="windy"
            onChange={(event) => setWeather(event.target.value)}
          />
          <label htmlFor="windy">windy</label>
          <input
            type="radio"
            name="weather"
            value="stormy"
            onChange={(event) => setWeather(event.target.value)}
          />
          <label htmlFor="stormy">stormy</label>
          <input
            type="radio"
            name="weather"
            value="cloudy"
            defaultChecked
            onChange={(event) => setWeather(event.target.value)}
          />
          <label htmlFor="cloudy">cloudy</label>
          <input
            type="radio"
            name="weather"
            value="rainy"
            onChange={(event) => setWeather(event.target.value)}
          />
          <label htmlFor="rainy">rainy</label>
          <input
            type="radio"
            name="weather"
            value="sunny"
            onChange={(event) => setWeather(event.target.value)}
          />
          <label htmlFor="sunny">sunny</label>
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

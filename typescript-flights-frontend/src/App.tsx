import { useEffect, useState } from "react";
import diaryService from "./services/diaries";

const App = () => {
  const [diaries, setDiaries] = useState<Array<any> | null>(null);

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

  console.log("diaries in app component", diaries);
  return (
    <div>
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

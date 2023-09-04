export interface NewDiary {
  date: string;
  id: number;
  visibility: string;
  weather: string;
  comment?: string;
}

export interface fetchedDiary {
  id: number;
  date: string;
  weather: string;
  visibility: string;
}

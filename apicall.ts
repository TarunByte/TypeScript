type APIType = {
  userId: string;
  id: number;
  title: string;
  completed: boolean;
};

type APIType2 = {
  userId: string;
  id: number;
};

async function apiCallHandling(): Promise<APIType> {
  const result = await fetch("https://jsonplaceholder.typicode.com/todos/3");
  const data = await result.json();
  // console.log(data);
  return data;
}

apiCallHandling().then((data: APIType) => {
  console.log(data);
});

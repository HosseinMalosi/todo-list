export const fetching = async () => {
  const response = await fetch("http://localhost:8080/api", {
    method: "GET",
  });
  const data = await response.json();
  console.log(data);
};

export const sendData =async (data) => {
  console.log(data);
  await fetch("http://localhost:8080/api/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: data }),
  }).catch((err) => console.log(err));
  console.log(data);
};

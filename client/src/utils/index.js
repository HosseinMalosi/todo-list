export const fetching = async () => {
  const response = await fetch("http://localhost:8080/api/get", {
    method: "GET",
  });
  const data = await response.json();
  return data;
};

export const sendData = async (data) => {
  await fetch("http://localhost:8080/api/post", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: data }),
  }).catch((err) => console.log(err));
};

export const Update = async (data, port, _id) => {
  await fetch(`http://localhost:8080/api/${port}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({_id:_id , data: data }),
  }).catch((err) => console.log(err));
};

export const deleteHandler = async(id) =>{
  await fetch("http://localhost:8080/api/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id: id }),
    });
}
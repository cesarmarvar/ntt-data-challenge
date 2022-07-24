const BASE_URL = "https://randomuser.me/api/"

export async function getUsers() {
  const response = await fetch(`${BASE_URL}?results=15`, {
    method: "GET",
  })
  const data = await response.json();
  return data
}
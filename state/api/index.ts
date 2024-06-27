import axios from "axios";

export async function Login(username: string, password: string) {
  const body = {
    username: username,
    password: password,
    expiresInMins: 30, // optional, defaults to 60
  };
  try {
    const resp = await axios.post("https://dummyjson.com/auth/login", body, {
      headers: { "Content-Type": "application/json" },
    });
    if (resp.status == 200) {
      console.log("data res", resp);
      return resp?.data;
    }
  } catch (error) {
    console.log("error", error);
    return null;
  }
}

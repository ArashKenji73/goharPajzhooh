import axios from "axios";

const TOKEN = "26a34193-96ca-4e56-bf30-ea03b395fb96";

export const api = axios.create({
  baseURL: "https://task.dev.fosidso.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const authHeader = {
  Authorization: `Bearer ${TOKEN}`,
};
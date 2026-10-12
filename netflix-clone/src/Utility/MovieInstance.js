import axios from "axios";

const BASE_URL = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export   default BASE_URL ;

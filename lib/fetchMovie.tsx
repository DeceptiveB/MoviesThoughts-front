import movie from "@/models/Movie";

const FETCH_LIMIT = 0;
const BASE_URL  = "http:\\localhost:3000/api"

export const fetchMovie = async ({ id }: {id: number}) => {
    const response = await fetch(`${BASE_URL}/movies/movie/${id}`)
    const movies = (await response.json()) as movie;
    return movies;
}
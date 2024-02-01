import Image from "next/image";
import styles from "./page.module.css";
import { fetchMovies } from "@/lib/fetchMovies";
import movie from "@/models/Movie";
import MovieList from "@/components/Movies/MovieList";

const fetchMovieList = async () => {
  const movies = await fetchMovies();
  return movies
}

export default async function Home() {
  const movieList = await fetchMovieList() as movie[]
  return (
    <main className={styles.main}>
      <MovieList movies={movieList}></MovieList>
    </main>
  );
}

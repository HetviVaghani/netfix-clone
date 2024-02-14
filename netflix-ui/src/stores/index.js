import {configureStore,createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import axios from "axios";
import { API_KEY, TMDB_BASE_URL } from "../utils/constants";

const initialState = {
    movies: [],
    genresLoaded: false,
    genres: [],
};


export const getGenres = createAsyncThunk("netflix/genres", async () => {
    const {
        data: {genres},
    } = await axios.get(
        // `${TMDB_BASE_URL}/genre/movie/list?api_key = ${API_KEY}` 
         "https://api.themoviedb.org/3/genre/movie/list?api_key=bbe44589c37f188a501f07aa99dc21e4"

        );
     return genres;
});


const createArrayFromRawData = (array,moviesArray ,getGenres) => {
    array.forEach((movie) => {
        const movieGenres = [];
        movie.genres_ids.forEach((genres) => {
            const name = genres.find(({id}) => id == genres);
            if (name) movieGenres.push(name.name);
        });
        if (movie.backdrop.push) {
            moviesArray.push({
                id: movie.id,
                name: movie?.original_name ? movie.original_name : movie.original_title,
                image: movie.backdrop_path,
                genres: movieGenres.slice(0,3),
            });
        }
    });
};

// const getRawData = async (api, genres, paging = false) => {
//     const moviesArray =[];
//     for (let i = 1; moviesArray.length < 60 && i < 10; i++){
//         const { 
//             data:{ results },
//         } = await axios.get(`${api}${paging ? `&page=${i}` : ""}`);
//         createArrayFromRawData(results,moviesArray,genres);
//     }
//     return moviesArray;
// };
const getRawData = async (api, genres, paging = false) => {
    const moviesArray = [];
    let totalPages = Infinity; // Initially set totalPages to Infinity
    let currentPage = 1;

    while (currentPage <= totalPages && moviesArray.length < 60) {
        const {
            data: { results, total_pages },
        } = await axios.get(`${api}${paging ? `&page=${currentPage}` : ""}`);
        totalPages = total_pages; // Update totalPages with the actual total pages from the response
        createArrayFromRawData(results, moviesArray, genres);
        currentPage++;
    }
    

    return moviesArray;
};


export const fetchMovies = createAsyncThunk(
    "netflix/trending",
    async({type , genre},thunkApi) => {
        const{
            netflix: {genres},
        } = thunkApi.getState();
        return getRawData(
            // `${TMDB_BASE_URL}/trending/${type}/weel?api_key=${API_KEY}`,
            `https://api.themoviedb.org/3/discover/${type}?api_key=bbe44589c37f188a501f07aa99dc21e4&with_genres=${genre}`,

            // genres,
            genres.map(genre => genre.id).join(','),
            true
        );
    }
);
        // return getRawData(`${TMBD_BASE_URL}/discover/${type}?api_key=${API_KEY}&with_geners=${genres}`)

const NetflixSlice = createSlice({
    name: "Netflix",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getGenres.fulfilled, (state, action) => {
            state.genres = action.payload;
            state.genresLoaded = true;
        });
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.movies = action.payload;
        });
    },
});

export const store = configureStore({
    reducer: { 
        netflix: NetflixSlice.reducer,
    },
});
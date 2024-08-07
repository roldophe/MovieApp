
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SliderPopulars from '../components/SliderPopulars';
import Trailer from '../components/Buttoms/Trailer';
import { Base_Url } from '../utilities/API/BaseURl';
import { api_key } from '../utilities/API/Key';
import { BaseUrl_Img } from '../utilities/API/BaseImage';

const Read = () => {

    let { id } = useParams(null);
    //Mark create a state to store the movie object
    //set defaults value for state for handle show date load
    const movieData = {
        title: 'Unknown',
        release_date: 'Unknown',
        poster_path: '',
        production_countries: [{ iso_3166_1: 'Unknown' }],
        runtime: 0,
        overview: 'No overview available',
        vote_average: 0,
    };

    const [movie, setMovie] = useState(movieData);
    

    useEffect(() => {
        // Fetch the movie data
        const fetchMovie = async (id) => {
            try {
                const response = await fetch(`${Base_Url}/movie/${id}?api_key=${api_key}&language=en-US`);
                const data = await response.json();
                setMovie(data);
            } catch (error) {
                console.error('Error fetching movie data:', error);
            }
        };

        fetchMovie(id);
    }, [id]);
    const allGenres = movie.genres ? movie.genres.map(genre => genre.name) : [];
    console.log('Fetching movie', movie);
    return (
        <main>
            <section className='container mx-auto p-2 md:p-10 antialiased bg-cover bg-center relative'
                style={{
                    backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie && movie.backdrop_path}`,
                }}
            >
                <div
                    className="absolute inset-0 bg-opacity-60 bg-slate-900"
                />
                <div class="min-h-full mt-10 grid place-items-center transform">
                    <div class="rounded-md shadow-xl">
                        <div class="md:flex px-4 leading-none max-w-full">
                            <div class="flex-none">
                                <img
                                    src={`${BaseUrl_Img}${movie?.poster_path || ''}`}
                                    alt={movie?.title || 'Unknown'}
                                    class="h-78 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300"
                                />
                            </div>

                            <div class="flex-col text-gray-300 text-center">
                                <p class="pt-4 text-2xl font-bold text-white">
                                    {movie.title} ({movie.release_date?.substring(0, 4) || 'Unknown'})
                                </p>
                                <hr class="hr-text" data-content="" />
                                <div class="text-md flex gap-5 px-4 my-2">
                                    <span class="font-bold">
                                        {movie.release_date && movie.production_countries?.[0]?.iso_3166_1
                                            ? `${movie.release_date} (${movie.production_countries[0].iso_3166_1})`
                                            : 'Unknown'}
                                    </span>
                                    <span class="font-bold">
                                        {`${Math.floor(movie.runtime / 60 || 0)}h ${movie.runtime % 60 || 0} min | ${allGenres || ''}`}
                                    </span>
                                </div>
                                <p class="md:block px-4 my-4 text-sm text-left">
                                    {movie.overview || 'No overview available'}
                                </p>

                                <p class="flex text-md px-4 my-2">
                                    Rating: {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}/10
                                    <span class="font-bold px-2">|</span>
                                    Mood: Dark
                                </p>

                                <div class="text-xs">
                                    <Trailer/>
                                    <button type="button" class="border border-gray-100 text-gray-100 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">IMDB</button>

                                    <button type="button" class="border border-gray-100 text-gray-100 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">AMAZON</button>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-between items-center px-4 mb-4 w-full">
                            <div class="flex">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 512 512"
                                    class="w-5 h-5 ml-2 fill-red-600"
                                >
                                    <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 576 512"
                                    class="w-5 h-5 ml-2 fill-blue-600"
                                >
                                    <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" /></svg>
                                {/* <i class="material-icons mr-2 text-red-600">favorite_border</i>
                            <i class="material-icons text-blue-600">remove_red_eye</i> */}
                            </div>
                            <div class="flex">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 512 512"
                                    class="w-5 h-5 ml-2 fill-yellow-400"
                                >
                                    <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm349.5 52.4c18.7-4.4 35.9 12 25.5 28.1C350.4 374.6 306.3 400 255.9 400s-94.5-25.4-119.1-63.5c-10.4-16.1 6.8-32.5 25.5-28.1c28.9 6.8 60.5 10.5 93.6 10.5s64.7-3.7 93.6-10.5zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 512 512"
                                    class="w-5 h-5 ml-2 fill-yellow-400"
                                >
                                    <path d="M256 48a208 208 0 1 0 0 416 208 208 0 1 0 0-416zM512 256A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 512 512"
                                    class="w-5 h-5 ml-2 fill-yellow-400"
                                >
                                    <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM174.6 384.1c-4.5 12.5-18.2 18.9-30.7 14.4s-18.9-18.2-14.4-30.7C146.9 319.4 198.9 288 256 288s109.1 31.4 126.6 79.9c4.5 12.5-2 26.2-14.4 30.7s-26.2-2-30.7-14.4C328.2 358.5 297.2 336 256 336s-72.2 22.5-81.4 48.1zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 576 512"
                                    class="w-5 h-5 ml-2 fill-yellow-400"
                                >
                                    <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 640 512"
                                    class="w-5 h-5 ml-2 fill-yellow-400"
                                >
                                    <path d="M341.5 13.5C337.5 5.2 329.1 0 319.9 0s-17.6 5.2-21.6 13.5L229.7 154.8 76.5 177.5c-9 1.3-16.5 7.6-19.3 16.3s-.5 18.1 5.9 24.5L174.2 328.4 148 483.9c-1.5 9 2.2 18.1 9.7 23.5s17.3 6 25.3 1.7l137-73.2 137 73.2c8.1 4.3 17.9 3.7 25.3-1.7s11.2-14.5 9.7-23.5L465.6 328.4 576.8 218.2c6.5-6.4 8.7-15.9 5.9-24.5s-10.3-14.9-19.3-16.3L410.1 154.8 341.5 13.5zM320 384.7V79.1l52.5 108.1c3.5 7.1 10.2 12.1 18.1 13.3l118.3 17.5L423 303c-5.5 5.5-8.1 13.3-6.8 21l20.2 119.6L331.2 387.5c-3.5-1.9-7.4-2.8-11.2-2.8z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 576 512"
                                    class="w-5 h-5 ml-2 fill-yellow-400"
                                >
                                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='mx-auto container bg-no-repeat bg-[center_top_10rem] bg-[url(https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg)]'>
                {/* Heading */}
                <div className="flex items-center text-white justify-between px-5 py-3 mt-5 rounded-none">
                    <h2 className="text-2xl font-bold">
                        Movie Suggestion
                    </h2>
                </div>
                <SliderPopulars />
            </section>
        </main>

    );
}

export default Read;

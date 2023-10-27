"use client";

import { Heading } from "@/components";
import { Card } from "@/components/Card";
import { useGetAllMovies } from "@/services/movies";

export default function Home() {
    const { data: movies } = useGetAllMovies({ page: 1 });

    return (
        <>
            <Heading size="2xl">{"Films à l'affiche"}</Heading>

            <section>
                <div className="mx-auto grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {(movies?.results || []).map((movie) => (
                        <Card
                            key={movie.id}
                            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
                        >
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                alt=""
                                className="absolute inset-0 -z-10 h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                            <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                                <time dateTime={movie.release_date} className="mr-8">
                                    {new Date(movie.release_date).toLocaleDateString("fr")}
                                </time>
                                <div className="-ml-4 flex items-center gap-x-4">
                                    <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                                        <circle cx={1} cy={1} r={1} />
                                    </svg>
                                    <div className="flex gap-x-2.5">{movie.vote_average} ⭐️</div>
                                </div>
                            </div>
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                                {/* Ajoutez le lien vers l'autre page ici */}
                            </h3>
                        </Card>
                    ))}
                </div>
            </section>
        </>
    );
}

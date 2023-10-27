"use client";

import { useGetMovie } from "@/services/movies";
import { useParams } from "next/navigation";

export default function Home() {
    const { id } = useParams();
    const { data: movie } = useGetMovie(id);

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-4">
                        <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                            <img
                                className="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0"
                                src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                                alt=""
                            />
                            <div className="absolute inset-0 bg-gray-900 mix-blend-multiply" />
                            <div
                                className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
                                aria-hidden="true"
                            />
                            <figure className="relative isolate">
                                <blockquote className="mt-6 text-xl font-semibold leading-8 text-white">
                                    <p>{movie?.title || "-"}</p>
                                </blockquote>
                                <figcaption className="mt-6 text-sm leading-6 text-gray-300">
                                    <strong className="font-semibold text-white">Judith Rogers,</strong> CEO at
                                    {movie?.overview || "-"}
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div>
                        <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
                            {movie?.genres?.map((genre) => (
                                <div key={genre.id}>
                                    <dt className="text-sm font-semibold leading-6 text-gray-600">Genre</dt>
                                    <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">
                                        {genre.name}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
}

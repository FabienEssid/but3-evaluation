import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "https://api.themoviedb.org/3/";
const TOKEN = "U5nKCyUO3OyNgVytLnwxcT-AIpuJvUjmCwDYQwnBkdc";

export const useGetAllMovies = ({ page }, queryOptions?) => {
    const query = useQuery({
        ...queryOptions,
        queryKey: ["movies"],
        queryFn: async () => {
            const response = await axios.get(`${API_URL}/movie/popular`, {
                params: {
                    api_key: "9a3aa95fe041964e50e7b225d0850380",
                    sort_by: "popularity,desc",
                    query: "",
                    page,
                },
            });
            return response.data;
        },
    });

    return {
        ...query,
    };
};

export const useGetMovie = (id, queryOptions) => {
    const query = useQuery({
        ...queryOptions,
        queryKey: ["movie", id],
        queryFn: async () => {
            const response = await axios.get(`${API_URL}/movie/${id}`, {
                params: {
                    api_key: "9a3aa95fe041964e50e7b225d0850380",
                },
            });
            return response.data;
        },
    });

    return {
        ...query,
    };
};

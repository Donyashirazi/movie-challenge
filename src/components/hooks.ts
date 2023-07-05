import { QueryFunctionContext, useQuery } from 'react-query';
import axios from 'axios';
import { log, error } from 'console';

export interface IPageNumber {
	pageNumber: number;
}

interface IApiError {
	message: string;
	description: string;
	statusCode: string | number;
}
export const SearchMovie = (pageNumber: IPageNumber) => {
	console.log(pageNumber, 'test1');
	return axios.get(
		`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5c82100499f1342644a408064bf5cecf&page=${pageNumber}`
	);
};

export const useAllMovieData = (pageNumber: any) => {
	return useQuery(
		['AllMovieData', pageNumber],
		() => SearchMovie(pageNumber),
		{
			select: (data) => {
				const allMovieData = data.data.results.map(
					(allMovies: any) => allMovies
				);
				return allMovieData;
			},
			keepPreviousData: true,
			onError: (err: IApiError) => err,
		}
	);
};

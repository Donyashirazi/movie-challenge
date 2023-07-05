import { Select } from '@mantine/core';
import axios from 'axios';
import { useQuery } from 'react-query';

export const searchBox = () => {
	return axios.get(
		'https://api.themoviedb.org/3/search/movie?api_key=5c82100499f1342644a408064bf5cecf&query'
	);
};
export const useSearchBox = () => {
	return useQuery('searchBox', () => searchBox(), {
		select: (data) => {
			const test = data.data.results.map((movie: any) => movie);
			return test;
		},
	});
};

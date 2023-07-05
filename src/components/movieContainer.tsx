import { Card, Flex, Pagination, ScrollArea, rem } from '@mantine/core';
import Image from 'next/image';
import React, { useState } from 'react';
import { SearchMovie, useAllMovieData } from './hooks';
import { error, log } from 'console';
import { MovieCard } from './MovieCard';
import Test from './test';
import { useInfiniteQuery, useQuery } from 'react-query';
import axios from 'axios';

const MovieContainer = () => {
	const [pageNumber, setPageNumber] = useState(1);
	const {
		data: MovieData,
		isLoading,
		isError,
		error,
		isFetching,
		isPreviousData,
	} = useAllMovieData(pageNumber);

	if (isLoading) return <p>loading</p>;
	if (isError) return <p>Error:{error.message}</p>;

	return (
		<Flex
			className="container"
			wrap={'nowrap'}
		>
			<ScrollArea>
				<Flex
					className="container"
					gap={{ base: 'lg', sm: 'xl' }}
					justify="space-between"
					wrap="wrap"
				>
					{MovieData?.map((movie: any, i: number) => (
						<MovieCard
							key={i}
							{...movie}
						/>
					))}
				</Flex>
				<Pagination
					total={500}
					position="center"
					m={40}
					value={pageNumber}
					onChange={setPageNumber}
				/>
			</ScrollArea>
		</Flex>
	);
};

export default MovieContainer;

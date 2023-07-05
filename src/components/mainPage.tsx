import React from 'react';
import SearchBox from './searchBox';
import {
	AppShell,
	Burger,
	Flex,
	Header,
	MediaQuery,
	Text,
} from '@mantine/core';
import MovieCard from './movieContainer';
import MovieContainer from './movieContainer';

const MainPage = () => {
	return (
		<div>
			<AppShell
				header={
					<Header
						height={{ base: 80 }}
						p="md"
					>
						<Flex
							justify="space-between"
							className="container"
							sx={{
								display: 'flex',
								alignItems: 'center',
								height: '100%',
							}}
						>
							<Text fz="lg">Movie Find</Text>
							<SearchBox />
						</Flex>
					</Header>
				}
			>
				<MovieContainer />
			</AppShell>
		</div>
	);
};

export default MainPage;

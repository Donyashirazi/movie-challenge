import { Card, Flex, Image, Text } from '@mantine/core';
import { IconStar, IconUserSearch } from '@tabler/icons-react';

export interface IMovieCardProps {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: null;
	vote_count: number;
}

export const MovieCard = ({
	adult,
	backdrop_path,
	genre_ids,
	id,
	original_language,
	original_title,
	overview,
	popularity,
	poster_path,
	release_date,
	title,
	video,
	vote_average,
	vote_count,
}: IMovieCardProps) => {
	const imgUrl = `https://image.tmdb.org/t/p/w300`;

	return (
		<Card sx={{ width: 330 }}>
			<Card.Section
				sx={{
					position: 'relative',
					flexWrap: 'wrap',
				}}
			>
				<Image
					src={imgUrl + poster_path}
					alt="test"
					style={{ objectFit: 'cover' }}
				/>
			</Card.Section>
			<Flex
				direction="column"
				justify="space-between"
				sx={{ height: 100 }}
			>
				<Text
					fz={24}
					fw={500}
				>
					{title}
				</Text>
				<Flex
					direction="row"
					align="flex-end"
					justify="right"
					gap={8}
				>
					<IconStar style={{ color: 'yellow' }} />
					<Text>{popularity}</Text>
				</Flex>
			</Flex>
		</Card>
	);
};

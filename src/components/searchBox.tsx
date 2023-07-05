import { Flex, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useState } from 'react';

const SearchBox = () => {
	const [movieInputValue, setMovieInputValue] = useState('');
	console.log('searchBox', movieInputValue);
	return (
		<Flex>
			<TextInput
				placeholder="Search For Your Movie"
				icon={<IconSearch />}
				size="lg"
				value={movieInputValue}
				onChange={(event) =>
					setMovieInputValue(event.currentTarget.value)
				}
			/>
		</Flex>
	);
};

export default SearchBox;

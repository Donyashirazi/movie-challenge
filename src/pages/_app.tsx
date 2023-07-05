import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

export default function App({ Component, pageProps }: AppProps) {
	const AnyComponent = Component as any;
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme={{
					colorScheme: 'dark',
				}}
			>
				<AnyComponent {...pageProps} />;
			</MantineProvider>
			<ReactQueryDevtools
				initialIsOpen={false}
				position="bottom-left"
			/>
		</QueryClientProvider>
	);
}

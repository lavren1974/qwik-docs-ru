import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import { ContentNav } from './../../components/content-nav/content-nav';
import type { DocumentHead } from '@builder.io/qwik-city';
import Menu from '~/components/menu/menu';
import OnThisPage from '~/components/on-this-page/on-this-page';
import styles from './docs.css';

export default component$(() => {
	useStyles$(styles);

	return (
		<div class="docs">
			<Menu />
			<div class="docs-container">
				<article>
					<Slot />
				</article>
				<ContentNav />
			</div>
			<OnThisPage />
		</div>
	);
});

export const head: DocumentHead = ({ head }) => {
	return {
		title: `${head.title} - Qwik docs`,
	};
};

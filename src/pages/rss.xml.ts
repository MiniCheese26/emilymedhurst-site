import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
import { isHidden } from '@lib/utils';
const parser = new MarkdownIt();

export const GET: APIRoute = async (context) => {
	const articles = await getCollection('articles');
	return rss({
		// `<title>` field in output xml
		title: 'Emily Medhurst',
		// `<description>` field in output xml
		description: 'A humble Astronaut’s guide to the stars',
		// Pull in your project "site" from the endpoint context
		// https://docs.astro.build/en/reference/api-reference/#contextsite
		site: context.site as URL,
		// Array of `<item>`s in output xml
		// See "Generating items" section for examples using content collections and glob imports
		items: articles
			.filter((article) => !isHidden(article))
			.map((article) => ({
				title: article.data.title,
				pubDate: article.data.created,
				description: article.data.description,
				link: `/blog/${article.slug}`,
				content: sanitizeHtml(parser.render(article.body))
			})),
		// (optional) inject custom xml
		customData: `<language>en-us</language>`
	});
};

/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { Redis } from 'ioredis';

interface Env {
	REDIS_URL: string;
	REDIS_PASSWORD: string;
	// ADD YOUR
}

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const re = new Redis('localhost:6379', { password: env.REDIS_PASSWORD });
		re.set('ping', 'asdsad');
		const val = await re.get('ping');

		return new Response(val);
	},
} satisfies ExportedHandler<Env>;

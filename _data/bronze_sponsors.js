import eleventyFetch from "@11ty/eleventy-fetch";

export default async function fetchSponsors(params) {
	const json = await eleventyFetch("https://opencollective.com/stride3d/tiers/bronze-strider/all.json", {
			duration: "7d",
			type: "json"
		});
		
	return json;
}
import eleventyFetch from "@11ty/eleventy-fetch";

// lastTransactionAt (optional): only show sponsors whose last donation is on or after this date
const tiers = [
	{ id: "diamond", title: "Diamond Striders", slug: "diamond-strider", lastTransactionAt: "2026-01-01" },
	{ id: "platinum", title: "Platinum Striders", slug: "platinum-strider" },
	{ id: "gold", title: "Gold Striders", slug: "gold-strider" },
	{ id: "silver", title: "Silver Striders", slug: "silver-strider" },
	{ id: "bronze", title: "Bronze Striders", slug: "bronze-strider" }
];

export default async function fetchSponsors() {
	return Promise.all(tiers.map(async (tier) => {
		const sponsors = await eleventyFetch(`https://opencollective.com/stride3d/tiers/${tier.slug}/all.json`, {
			duration: "7d",
			type: "json"
		});

		return {
			...tier,
			sponsors: tier.lastTransactionAt
				? sponsors.filter(s => s.lastTransactionAt && new Date(s.lastTransactionAt) >= new Date(tier.lastTransactionAt))
				: sponsors
		};
	}));
}

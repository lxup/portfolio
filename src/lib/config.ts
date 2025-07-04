import { getURL } from "./utils";

const config = {
	siteName: "Loup",
	tagline: "Random stuffer",
	url: getURL(),
	seo: {
		description: ""
	},
	socials: [
		{
			name: "github",
			username: "lxup",
		},
		{
			name: "instagram",
			username: "xmesky",
		},
	]
};

export default config;
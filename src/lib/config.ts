import { getURL } from "./utils";

const config = {
	siteName: "loup",
	tagline: "multitasker",
	url: getURL(),
	seo: {
		description: "i just do stuff, stay ethical without selling my soul to capitalism",
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
import { redirect } from "next/navigation";

const MusicPage = async () => {
	return redirect("https://open.spotify.com/intl-fr/artist/4MbXz8Kvr9wizslkKT4wvJ");
};

export default MusicPage;
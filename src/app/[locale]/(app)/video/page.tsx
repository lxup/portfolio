import { redirect } from "next/navigation";

const VideoPage = async () => {
	return redirect("https://www.youtube.com/@lxup");
};

export default VideoPage;
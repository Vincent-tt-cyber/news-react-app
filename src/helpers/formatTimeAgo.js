export const formatTimeAgo = (date) => {
	const now = new Date();
	const data = new Date(date);
	const secondPast = (now.getTime() - data.getTime()) / 1000;

	if (secondPast < 60) {
		return `${Math.round(secondPast)}s ago`;
	}

	if (secondPast < 3600) {
		return `${Math.round(secondPast / 60)}m ago`;
	}
	if (secondPast <= 86400) {
		return `${Math.floor(secondPast / 3600)}h ago`;
	}

	if (secondPast > 86400) {
		const day = Math.floor(secondPast / 86400);
		return day === 1 ? `${day} day ago` : `${day} days ago`;
	}
}
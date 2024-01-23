export const useInterval = (executor: Function, gap = 3000) => {
	const intervalId = setInterval(() => {
		executor();
		console.log(1);
	}, gap);
	return { intervalId };
};

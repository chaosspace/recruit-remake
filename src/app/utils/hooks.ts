import { useRef, useEffect } from "react";

export const useInterval = (executor: Function, delay = 3000) => {
	const intervalId = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		intervalId.current = setInterval(() => {
			executor();
		}, delay);
	}, [delay, executor]);

	const clear = () => {
		if (intervalId.current) {
			clearInterval(intervalId.current);
		}
	};

	const resetInterval = () => {
		if (intervalId.current) {
			clear();
			intervalId.current = setInterval(() => {
				executor();
			}, delay);
		}
	};

	return { clear, resetInterval };
};

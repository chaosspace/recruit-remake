"use client";

import React, { useEffect, useState } from "react";
import { useInterval } from "../utils/hooks";

export const Members = () => {
	const [index, setIndex] = useState(0);

	const pre = () => {};

	useEffect(() => {
		const { intervalId } = useInterval(pre, 5000);
		return () => {
			clearInterval(intervalId);
		};
	});

	return (
		<div id="members" className="h-screen p-8 sm:px-16 lg:px-36">
			<div className="flex flex-row-reverse text-xl sm:text-2xl lg:text-3xl">
				部门介绍
			</div>
			<div className="h-full"></div>
		</div>
	);
};

"use client";

import React, { useEffect, useState, forwardRef } from "react";

type Props = {
	duration?: number;
	x: string;
	y: string;
	endX: string;
	endY: string;
	children: React.ReactNode;
	threshold?: number;
};

export const WithShowUp = forwardRef<HTMLDivElement, Props>(
	({ x, endX, endY, y, duration = 1000, children, threshold = 1 }, ref) => {
		const [isShow, setIsShow] = useState(false);

		useEffect(() => {
			if (typeof ref !== "function" && ref?.current) {
				const observer = new IntersectionObserver(
					(entries) => {
						if (entries[0].isIntersecting) {
							setIsShow(true);
							if (ref.current) {
								observer.unobserve(ref.current);
							}
						}
					},
					{ threshold }
				);
				observer.observe(ref.current);
			}
		}, []);

		return (
			<div
				className={`${isShow ? endX : x} ${
					isShow ? endY : y
				} z-10 absolute transition-transform duration-[1000ms]`}
			>
				{children}
			</div>
		);
	}
);

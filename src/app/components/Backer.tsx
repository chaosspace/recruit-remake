"use client";

import React, { useEffect, useState, forwardRef } from "react";

export const Backer = forwardRef<HTMLDivElement>((_, ref) => {
	const [top, setTop] = useState(true);

	useEffect(() => {
		if (typeof ref !== "function" && ref?.current) {
			const observer = new IntersectionObserver(
				(entries) => {
					if (entries[0].isIntersecting) {
						setTop(true);
					} else {
						setTop(false);
					}
				},
				{ rootMargin: "-10px 0px 0px 0px" }
			);

			observer.observe(ref.current);
		}
	}, [ref]);

	return (
		<div
			className={`fixed animate-bounce cursor-pointer ${
				top ? "hidden" : "flex"
			} justify-center items-center z-20 h-[48px] right-6 bottom-[5%] rounded-full aspect-square border-4 border-[#cac8c8]`}
		>
			<p className="icon text-black -rotate-90">
				<a href="#">&#xe68b;</a>
			</p>
		</div>
	);
});

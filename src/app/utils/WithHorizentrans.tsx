import React, { FC } from "react";
import { cn } from ".";

type Props = {
	delay?: number;
	time?: number;
	children: React.ReactNode;
	top: string;
	direction?: "fromRight" | "fromLeft";
};

export const WithHorizenTrans: FC<Props> = ({
	children,
	time = 5,
	delay = 0,
	top,
	direction = "fromLeft",
}) => {
	return (
		<div
			className={cn(
				direction === "fromLeft"
					? "absolute transition-all animate-hori"
					: "absolute transition-all animate-horiRevert"
			)}
			style={{
				top,
				animationDelay: `${delay}s`,
				animationDuration: `${time}s`,
			}}
		>
			{children}
		</div>
	);
};

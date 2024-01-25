"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useInterval } from "../utils/hooks";
import frontEnd from "../../../public/assets/qianduan.png";
import backEnd from "../../../public/assets/houduan.png";
import chanpin from "../../../public/assets/chanpin.png";
import jiqixuexi from "../../../public/assets/jiqixuexi.png";
import anzhuo from "../../../public/assets/anzhuo.png";
import { StaticImageData } from "next/image";
import { escape } from "querystring";

type SliderItemType = {
	image: StaticImageData;
	title: string;
	description: string;
};

const sliderData: SliderItemType[] = [
	{
		image: frontEnd,
		title: "Web开发部",
		description:
			"前端即网站前台部分，运行在PC端，移动端等浏览器 上展现给用户浏览的网页。前端开发人员可以使用完美的动效设计和前端技术，给用 户带来极高的页面视觉体验和用户交互体验。",
	},
	{
		image: backEnd,
		title: "后端开发部",
		description:
			"后端开发指的是运行在后台并且控制前端的内容，它 负责程序设计架构以及数据库管理和处理相关的业务逻辑。 它主要考虑的是对于业务 的控制和处理，功能的实现以及数据的操作。",
	},
	{
		image: chanpin,
		title: "产品设计部",
		description:
			"捕捉事物间逻辑，倾听用户们需求，结合各平台数据，设计最好 用产品。来产品策划部, 培养更缜密的思维，学习产品设计，将从道术器三个层面，建 立自己与互联网产品的亲密联系。",
	},
	{
		image: jiqixuexi,
		title: "机器学习部",
		description:
			"机器学习从从历史数据中学习规律，将规律应用到未来中。我们致 力于研究如何 通过计算的手段，利用数据构建模型，量化过去，预测未来。",
	},
	{
		image: anzhuo,
		title: "Android开发部",
		description:
			"Android开发是指从事Android系统操作应用和各种Android平台功能 应用， 以安卓平台为对象，通过Android studio来布局设计界面与接口实现功能从而达到 开发手机软件app。",
	},
];

export const Members = () => {
	const [index, setIndex] = useState(0);
	const { clear, resetInterval } = useInterval(() => {
		console.log("execute");

		setIndex((pre) => {
			if (pre >= 4) return 0;
			else {
				return pre + 1;
			}
		});
	}, 4000);

	const to = (toIndex: number) => {
		console.log(toIndex);
		setIndex(toIndex);
		resetInterval();
	};

	useEffect(() => {
		return clear;
	}, []);

	return (
		<div id="members" className="h-screen p-8 sm:px-16 lg:px-36">
			<div className="flex flex-row-reverse text-xl sm:text-2xl lg:text-3xl">
				部门介绍
			</div>
			<div className="h-full w-[60vw] max-w-[800px] overflow-x-hidden mx-auto flex items-center relative">
				<div
					className="absolute transition-all duration-1000 flex"
					style={{ transform: `translateX(-${index * 20}%)` }}
				>
					{sliderData.map((item) => {
						return (
							<div
								key={item.title}
								className="flex w-[60vw] max-w-[800px] items-center justify-center"
							>
								<div>
									<Image src={item.image} width={350} alt={item.title} />
								</div>
								<div className="ml-[40px] lg:ml-[80px] flex-1">
									<div className="text-lg sm:text-2xl lg:text-4xl">
										{item.title}
									</div>
									<p className="mt-[20px] text-base sm:text-lg lg:text-xl">
										{item.description}
									</p>
								</div>
							</div>
						);
					})}
				</div>
				<div className="flex absolute gap-6 bottom-[20%] left-[50%] -translate-x-[50%]">
					{sliderData.map((item, idx) => {
						return (
							<span
								onClick={() => to(idx)}
								key={`${item.title}_span`}
								className={`select-none cursor-pointer transition-all duration-[500] h-[16px] rounded-2xl ${
									index === idx ? "bg-dark w-[48px]" : "bg-[#f2f2f2] w-[30px]"
								}`}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

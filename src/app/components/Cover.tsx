"use client";

import { Backer } from "./Backer";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";
import { createRef } from "react";

export const Cover = () => {
	const ref = createRef<HTMLDivElement>();

	return (
		<>
			<div ref={ref} className="sm:h-screen bg-slate-400 relative">
				<div className="absolute flex z-10 flex-col sm:flex-row w-full justify-between px-6 lg:min-h-[90px]">
					<div className="flex justify-center">
						<Image
							src={logo}
							priority
							alt="logo"
							className="w-[150px] md:w-[200px] lg:w-[350px]"
						/>
					</div>
					<div className="text-lg md:text-xl lg:text-2xl flex gap-[15%] sm:gap-8 sm:pt-2 md:pt-6 lg:pt-10">
						<a
							href="#aboutus"
							className="cursor-pointer text-white font-semibold sm:hover:text-textHover duration-200"
						>
							关于我们
						</a>
						<a
							href="#members"
							className="cursor-pointer text-white font-semibold sm:hover:text-textHover duration-200"
						>
							部门介绍
						</a>
						<a
							href="#product"
							className="cursor-pointer text-white font-semibold sm:hover:text-textHover duration-200"
						>
							产品介绍
						</a>
						<a
							href="#message"
							className="cursor-pointer text-white font-semibold sm:hover:text-textHover duration-200"
						>
							成员动态
						</a>
						<a
							href="#recruit"
							className="cursor-pointer text-white font-semibold sm:hover:text-textHover duration-200"
						>
							招新流程
						</a>
					</div>
				</div>
				<div>
					<video
						className="w-fit sm:w-full h-screen object-fill"
						src="/assets/shouyeshipin.mp4"
						autoPlay
						loop
						muted
					/>
				</div>
				<div className="w-full absolute left-[50%] bottom-[25%] -translate-x-[50%] text-white text-center text-xl lg:text-3xl z-10">
					信管工作室·年度邀请函
					<div className="flex justify-center gap-12 text-1xl lg:text-4xl py-6">
						<span>想和优秀的你</span>
						<span>一起改变世界</span>
					</div>
					<div className="flex justify-center gap-3 lg:gap-6 tracking-widest lg:tracking-[20px] items-center text-lg">
						<span className="w-[80px] h-[2px] bg-gradient-to-r from-slate-700/10 via-white to-slate-700/10" />
						JOINMISLAB
						<span className="w-[80px] h-[2px] bg-gradient-to-r from-slate-700/10 via-white to-slate-700/10" />
					</div>
					<div className="mt-12 text-lg p-2 w-fit mx-auto flex bg-white rounded-3xl items-center text-black cursor-pointer hover:text-textHover duration-300">
						<a href="#recruit">加入我们</a>
					</div>
				</div>
				<div className="hidden sm:block absolute bottom-[50px] left-[50%] cursor-pointer z-10 ">
					<div className="-translate-x-[50%] pt-3 w-[60px] h-[60px] rounded-full border-2 flex justify-center items-center">
						<a href="#aboutus" className="animate-bounce">
							<i className="icon">&#xe68a;</i>
						</a>
					</div>
				</div>
				<div className="hidden sm:block sm:absolute bottom-0 left-[50%] border-l-2 border-dashed translate-y-8 border-white h-[80px]" />
			</div>
			<Backer ref={ref} />
		</>
	);
};

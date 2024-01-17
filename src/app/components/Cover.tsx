import React from "react";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";

export const Cover = () => {
	return (
		<div className="sm:h-screen bg-slate-400">
			<div className="absolute flex z-10 flex-col sm:flex-row w-full justify-between px-6 lg:min-h-[90px]">
				<div className="flex justify-center">
					<Image
						src={logo}
						priority
						alt="logo"
						className="w-[150px] md:w-[200px] lg:w-[350px]"
					/>
				</div>
				<div className="flex sm:w-auto -translate-x-[50%] left-[50%] justify-around items-center top-[42px] sm:top-0 absolute sm:relative text-sm gap-8 md:text-lg lg:text-3xl">
					<a
						href="#"
						className="cursor-pointer text-white font-semibold sm:hover:text-textHover duration-200"
					>
						关于我们
					</a>
					<a
						href="#aboutus"
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
				<div className="mt-12 p-2 w-fit mx-auto flex bg-white rounded-3xl items-center text-black cursor-pointer hover:text-textHover duration-300">
					加入我们
				</div>
			</div>
			<div className="hidden sm:block absolute transform-gpu bottom-5 animate-bounce left-[50%] cursor-pointer z-10 ">
				<div className="-translate-x-[50%] w-[60px] h-[60px] rounded-full border-2 flex justify-center items-center">
					<i className="icon">&#xe68a;</i>
				</div>
			</div>
		</div>
	);
};

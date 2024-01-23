import React from "react";
import Image from "next/image";
import step1 from "../../../public/assets/liucheng1.png";
import step2 from "../../../public/assets/liucheng2.png";
import step3 from "../../../public/assets/liucheng3.png";
import joinus from "../../../public/assets/jiaru.png";

export const Schedule = () => {
	return (
		<div id="recruit" className="h-screen p-8 sm:px-36 lg:px-[10%]">
			<div className="text-xl mb-4 sm:mb-12 lg:mb-24 sm:text-2xl lg:text-3xl">
				招新流程
			</div>
			<div>
				<div className="flex sm:gap-8 flex-col sm:text-xl lg:text-2xl sm:text-center items-center sm:justify-center sm:flex-row">
					<div className="flex gap-4 items-center  sm:flex-col">
						<Image src={step1} alt="step1" className="w-[100px] sm:w-[200px]" />
						<div>
							<p>报名/预习</p>
							<p>8月中旬—9月中旬</p>
						</div>
					</div>
					<div className="icon text-black rotate-90 sm:rotate-0">&#xe68b;</div>
					<div className="flex gap-4 flex-row-reverse items-center sm:flex-col">
						<Image src={step2} alt="step2" className="w-[100px] sm:w-[200px]" />
						<div>
							<p>招新/培训</p>
							<p>9月中旬—12月中旬</p>
						</div>
					</div>
					<div className="icon text-black rotate-90 sm:rotate-0">&#xe68b;</div>
					<div className="flex gap-4 items-center sm:flex-col">
						<Image src={step3} alt="step3" className="w-[100px] sm:w-[200px]" />
						<div>
							<p className="">offer/项目</p>
							<p>12月中旬—长期</p>
						</div>
					</div>
				</div>
				<div className="mt-6 flex justify-center">
					<Image src={joinus} alt="joinus" width={400}></Image>
				</div>
				<div className="mt-4 flex justify-center text-xl tracking-widest lg:tracking-[10px] sm:text-2xl lg:text-4xl font-bold gap-8">
					<span>想和优秀的你</span>
					<span>一起改变世界</span>
				</div>
				<div className="mt-4 flex gap-8 lg:gap-16 justify-center text-sm sm:text-xl lg:text-2xl">
					<span className="bg-[#d6edee] p-1 rounded-lg sm:hover:text-textHover cursor-pointer">报名投递</span>
					<span className="bg-[#d6edee] p-1 rounded-lg sm:hover:text-textHover cursor-pointer">学员系统</span>
					<span className="bg-[#d6edee] p-1 rounded-lg sm:hover:text-textHover cursor-pointer">招新咨询</span>
				</div>
			</div>
		</div>
	);
};

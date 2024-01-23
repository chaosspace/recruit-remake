"use client";

import React, { createRef } from "react";
import Image from "next/image";
import us from "../../../public/assets/us.png";
import members from "../../../public/assets/members.png";
import { WithShowUp } from "../utils/WithShowUp";

export const AboutUs = () => {
	const leftRef = createRef<HTMLDivElement>();
	const rightRef = createRef<HTMLDivElement>();

	return (
		<div
			id="aboutus"
			className="h-screen flex flex-col sm:flex-row justify-center p-4 sm:p-10 lg:px-20 pb-0 gap-4 sm:gap-8 lg:gap-16"
		>
			<div ref={leftRef} className="relative flex-1">
				<div className="sm:h-fit bg-[#f2f2f2] p-4 sm:p-6 lg:p-10 rounded-lg md:rounded-2xl lg:rounded-3xl">
					<div className="text-xl sm:text-2xl lg:text-[40px] font-semibold">
						关于我们
					</div>
					<div className="text-sm sm:text-xl sm:leading-loose py-4 lg:py-8">
						信管工作室成立于2008年是一个以发展内部成员专业技能与专业素养、提升信管专业技术氛围的学生组织。不断探索、实践新的技术体系，在十余年的成长过程当中，逐渐完善自身技术体系，扩大团队规模。我们希望并也一直在努力将一些成功经验和有趣的团队文化传播出去影响更多的人。
					</div>
				</div>
				<div className="absolute bottom-2 sm:bottom-4 flex justify-center">
					<Image src={us} alt="us" width={500} className="w-[70%] sm:w-[90%]" />
				</div>
				<WithShowUp
					ref={leftRef}
					x="-translate-x-[50%] left-[50%]"
					endX="-translate-x-[160px] left-[50%]"
					y="bottom-2"
					endY="bottom-[25%]"
				>
					<span className="bg-[#f2f2f2] font-thin p-2 rounded-md">创新</span>
				</WithShowUp>
				<WithShowUp
					ref={leftRef}
					x="-translate-x-[50%] left-[50%]"
					endX="-translate-x-[90px] left-[50%]"
					y="bottom-2"
					endY="bottom-[23%]"
				>
					<span className="bg-[#f2f2f2] font-thin p-1 rounded-md">年轻</span>
				</WithShowUp>
				<WithShowUp
					ref={leftRef}
					x="-translate-x-[50%] left-[50%]"
					endX="-translate-x-[20px] left-[50%]"
					y="bottom-2"
					endY="bottom-[26%]"
				>
					<span className="bg-[#f2f2f2] font-thin p-1 rounded-md">周会</span>
				</WithShowUp>
				<WithShowUp
					ref={leftRef}
					x="-translate-x-[50%] left-[50%]"
					endX="translate-x-[50px] left-[50%]"
					y="bottom-2"
					endY="bottom-[23%]"
				>
					<span className="bg-[#f2f2f2] font-thin p-1 rounded-md">分享日</span>
				</WithShowUp>
				<WithShowUp
					ref={leftRef}
					x="-translate-x-[50%] left-[50%]"
					endX="-translate-x-[170px] left-[50%]"
					y="bottom-2"
					endY="bottom-[5%]"
				>
					<span className="bg-[#f2f2f2] font-thin p-1 rounded-md">
						黑客马拉松文化周
					</span>
				</WithShowUp>
				<WithShowUp
					ref={leftRef}
					x="-translate-x-[50%] left-[50%]"
					endX="-translate-x-[30px] left-[50%]"
					y="bottom-2"
					endY="bottom-0"
				>
					<span className="bg-[#f2f2f2] font-thin p-1 rounded-md">
						百名工程师
					</span>
				</WithShowUp>
				<WithShowUp
					ref={leftRef}
					x="-translate-x-[50%] left-[50%]"
					endX=" left-[50%]"
					y="bottom-2"
					endY="bottom-[10%]"
				>
					<span className="bg-[#f2f2f2] font-thin p-1 rounded-md">
						人才培养
					</span>
				</WithShowUp>
				<WithShowUp
					ref={leftRef}
					x="-translate-x-[50%] left-[50%]"
					endX="translate-x-[80px] left-[50%]"
					y="bottom-2"
					endY="bottom-[4%]"
				>
					<span className="bg-[#f2f2f2] font-thin p-1 rounded-md">
						技术应用
					</span>
				</WithShowUp>
			</div>
			<div
				ref={rightRef}
				className="bg-[#f2f2f2] sm:leading-loose relative leading-16 flex-1 p-4 sm:p-6 lg:p-10 text-sm sm:text-xl rounded-lg md:rounded-2xl lg:rounded-3xl overflow-hidden"
			>
				信管工作室永远都是一个温暖积极的大家庭
				这里承载着勤奋、进步、友爱、关怀、和谐与温馨
				这里汇聚了优秀的学长学姐，在学习和生活上伴你同行
				这里诞生了卓越的技术，新颖的产品和以学习至上的优秀理念
				<WithShowUp
					duration={1000}
					endY="translate-y-[15%]"
					endX="translate-x-[25%]"
					x="translate-x-full"
					y="translate-y-full"
					ref={rightRef}
					threshold={0.6}
				>
					<div className="w-[90%] border-l-[30px] border-t-[30px] border-[#535353] rounded-ss-[30px] bg-[#535353]">
						<Image src={members} alt="members" className="rounded-s-2xl" />
					</div>
				</WithShowUp>
			</div>
		</div>
	);
};

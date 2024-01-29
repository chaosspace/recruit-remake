"use client";

import React, { createRef } from "react";
import { WithHorizenTrans } from "../utils/WithHorizentrans";

export const Message = () => {
	const ref = createRef<HTMLDivElement>();

	return (
		<div
			id="message"
			className="h-screen overflow-hidden pt-4 px-2 sm:px-6 lg:px-20"
		>
			<div className="text-2xl sm:text-3xl lg:text-6xl text-center">
				成员动态
			</div>
			<div className="flex mt-6 h-full flex-col sm:flex-row gap-2 sm:gap-8 lg:gap-16">
				<div className="sm:max-w-[45%] justify-around">
					<p className="pb-4 lg:mb-16 font-bold text-xl sm:text-2xl lg:text-5xl">
						优秀学长采访
					</p>
					<div className="rounded-lg overflow-hidden">
						<video src="/assets/xuezhangcaifang.mp4" autoPlay controls muted />
					</div>
				</div>
				<div className="relative flex-1 text-xs h-[50%] sm:h-5/6 bg-[#f2f2f2] rounded-lg overflow-hidden">
					<WithHorizenTrans top="0">
						<span className="whitespace-nowrap">雷鹏-美团</span>
					</WithHorizenTrans>
					<WithHorizenTrans top="0" delay={1} direction="fromRight">
						<span className="whitespace-nowrap">吕海-阿里巴巴</span>
					</WithHorizenTrans>
					<WithHorizenTrans top="5%" delay={2}>
						<span className="whitespace-nowrap">百聪敏-腾讯</span>
					</WithHorizenTrans>
					<WithHorizenTrans top="5%" delay={4} time={3} direction="fromRight">
						<span className="whitespace-nowrap">肖航-YEX</span>
					</WithHorizenTrans>
					<WithHorizenTrans top="10%" delay={3}>
						<span className="whitespace-nowrap">曾祥雯-绿盟科技</span>
					</WithHorizenTrans>
					<WithHorizenTrans top="10%" delay={1} time={6} direction="fromRight">
						<span className="whitespace-nowrap">王欣瑜-云兴维智</span>
					</WithHorizenTrans>
					<WithHorizenTrans top="15%">
						<span className="whitespace-nowrap">冯迪-蚂蚁金服</span>
					</WithHorizenTrans>
					<WithHorizenTrans top="15%" delay={3} direction="fromRight">
						<span className="whitespace-nowrap">苏丹-阿里巴巴</span>
					</WithHorizenTrans>
					<WithHorizenTrans top="20%" delay={2}>
						<span className="whitespace-nowrap">张永聪-小米</span>
					</WithHorizenTrans>
					<WithHorizenTrans top="20%" time={7} direction="fromRight">
						<span className="whitespace-nowrap">黄若星-字节跳动</span>
					</WithHorizenTrans>
					<WithHorizenTrans top="25%" time={4} delay={1}>
						<span className="whitespace-nowrap">刘晓梅-美丽屋</span>
					</WithHorizenTrans>
					<WithHorizenTrans top="25%" time={6} direction="fromRight">
						<span className="whitespace-nowrap">陈英豪-云兴维智</span>
					</WithHorizenTrans>
					<WithHorizenTrans top="30%" delay={1}>
						<span className="whitespace-nowrap">唐德刚-蘑菇街</span>
					</WithHorizenTrans>
					<WithHorizenTrans top="30%" time={4} direction="fromRight">
						<span className="whitespace-nowrap">曹强-绿盟科技</span>
					</WithHorizenTrans>
					<WithHorizenTrans top="35%" time={6} delay={1}>
						<span className="whitespace-nowrap">朱珍珍-杏树林</span>
					</WithHorizenTrans>
					<WithHorizenTrans top="35%" delay={2} direction="fromRight">
						<span className="whitespace-nowrap">左逸飞-科大讯飞</span>
					</WithHorizenTrans>
					<WithHorizenTrans top="40%" delay={1}>
						<span className="whitespace-nowrap">刘启丽-第四范式</span>
					</WithHorizenTrans>
					<WithHorizenTrans top="40%" time={6} direction="fromRight">
						<span className="whitespace-nowrap">李敏-中信银行</span>
					</WithHorizenTrans>
					<WithHorizenTrans top="45%" time={6} delay={2}>
						<span className="whitespace-nowrap">袁乙文-字节跳动</span>
					</WithHorizenTrans>
					<WithHorizenTrans top="45%" delay={1} time={4} direction="fromRight">
						<span className="whitespace-nowrap">李博文-字节跳动</span>
					</WithHorizenTrans>
					<WithHorizenTrans top="50%">
						<span className="whitespace-nowrap">王昊岩-字节跳动</span>
					</WithHorizenTrans>
					<WithHorizenTrans top="50%" time={4} delay={3} direction="fromRight">
						<span className="whitespace-nowrap">李俭奇-字节跳动</span>
					</WithHorizenTrans>
					<WithHorizenTrans top="55%" time={6} delay={2}>
						<span className="whitespace-nowrap">邓思远-阿里巴巴</span>
					</WithHorizenTrans>
					<WithHorizenTrans top="55%" delay={1} direction="fromRight">
						<span className="whitespace-nowrap">姚秋鸿-邮科通信</span>
					</WithHorizenTrans>
					<WithHorizenTrans top="60%" time={3} delay={1}>
						<span className="whitespace-nowrap">曾钰洁-保研电子科技大学</span>
					</WithHorizenTrans>
					<WithHorizenTrans top="60%" time={8} delay={2} direction="fromRight">
						<span className="whitespace-nowrap">蒋璐遥-保研重庆大学</span>
					</WithHorizenTrans>
					<WithHorizenTrans top="65%" delay={1}>
						<span className="whitespace-nowrap">杨青-杭州有赞科技</span>
					</WithHorizenTrans>
					<WithHorizenTrans top="65%" time={7} direction="fromRight">
						<span className="whitespace-nowrap">何海源-字节跳动</span>
					</WithHorizenTrans>
					<WithHorizenTrans top="70%" time={4} delay={3}>
						<span className="whitespace-nowrap">方青-字节跳动</span>
					</WithHorizenTrans>
					<WithHorizenTrans top="70%" time={6} delay={3} direction="fromRight">
						<span className="whitespace-nowrap">张金胜-阿里巴巴</span>
					</WithHorizenTrans>
					<WithHorizenTrans top="75%">
						<span className="whitespace-nowrap">韩雨潇-百度</span>
					</WithHorizenTrans>
					<WithHorizenTrans top="75%" time={3} direction="fromRight">
						<span className="whitespace-nowrap">粱焕勋-oppo</span>
					</WithHorizenTrans>
					<WithHorizenTrans top="80%" delay={1}>
						<span className="whitespace-nowrap">马里杰-thoughtworks</span>
					</WithHorizenTrans>
					<WithHorizenTrans top="80%" time={4} direction="fromRight">
						<span className="whitespace-nowrap">戴林甫-华为</span>
					</WithHorizenTrans>
					<WithHorizenTrans top="85%" time={6} delay={1}>
						<span className="whitespace-nowrap">毛家杰-随手科技</span>
					</WithHorizenTrans>
					<WithHorizenTrans top="85%" delay={2} direction="fromRight">
						<span className="whitespace-nowrap">魏超-猪八戒</span>
					</WithHorizenTrans>
					<WithHorizenTrans top="95%" delay={1}>
						<span className="whitespace-nowrap">张怡斐-华为</span>
					</WithHorizenTrans>
					<WithHorizenTrans top="95%" time={7} direction="fromRight">
						<span className="whitespace-nowrap">周军-京东</span>
					</WithHorizenTrans>
					<WithHorizenTrans top="90%" time={4} delay={3}>
						<span className="whitespace-nowrap">牛勤艳-海尔小额贷款</span>
					</WithHorizenTrans>
					<WithHorizenTrans top="90%" delay={3} direction="fromRight">
						<span className="whitespace-nowrap">罗琴-途风网</span>
					</WithHorizenTrans>
				</div>
			</div>
		</div>
	);
};

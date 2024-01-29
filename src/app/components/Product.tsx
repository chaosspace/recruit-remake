import React from "react";
import youwen from "../../../public/assets/youwen.png";
import erp from "../../../public/assets/erp.png";
import Image from "next/image";

export const Product = () => {
	return (
		<div
			id="product"
			className="h-screen flex items-center sm:px-10 lg:px-20 text-sm sm:text-base md:text-lg"
		>
			<div className="h-[100%] sm:h-[80%] flex gap-2 sm:gap-4 lg:gap-12">
				<div className="flex-[2] rounded-xl sm:rounded-3xl lg:rounded-[40px] p-4 sm:p-8 md:p-10 lg:p-14 bg-gradient-to-l from-[#c9dae7] to-[#ebeff9]">
					<p className="font-bold text-center whitespace-nowrap text-base sm:text-2xl lg:text-3xl">
						ERP虚拟运营系统
					</p>
					<p className="font-bold text-center sm:whitespace-nowrap text-[#6593a8] mb-2 sm:mb-4 lg:mb-6">
						系统在信管必修课上长期使用
					</p>
					通过构建一个虚拟的市场环境， 让受训者充当企业的
					CEO，进行企业的模拟运营。 通过此虚拟过程，让受训者体会到如何管理企业
					中的物资流动、资 金流动和信息流动，以及相互之间的制约与转换关系。
					<div className="flex items-center justify-center">
						<Image src={erp} alt="erp" className="w-[100px] sm:h-[200px]" />
					</div>
				</div>
				<div className="sm:flex-[4] flex flex-col justify-between">
					<div className="flex gap-2 sm:gap-4 lg:gap-8 sm:mb-4 lg:sm:mb-8">
						<div className="hidden bg-[#f2f2f2] whitespace-nowrap rounded-xl sm:rounded-3xl lg:rounded-[40px] flex-1 sm:flex justify-center items-center font-bold text-base sm:text-2xl lg:text-3xl">
							产品介绍
						</div>
						<div className="hidden sm:block bg-[#f2f2f2] rounded-xl sm:rounded-3xl lg:rounded-[40px] flex-[2] indent-8 p-2 sm:p-4 lg:p-8 text-sm font-light sm:text-sm md:text-base">
							工作室目前主要有六个项目。
							分别是ERP虚拟运营系统，邮问必答，基于大数据的骨质质量评估系统，路径规划系统，智能广
							告识别项目，作业系统，以及其他小项目，用于保证工作室同学手里都可以利用项目进行实战学习。
						</div>
					</div>
					<div className="flex items-center flex-col sm:flex-row gap-2 sm:gap-4 lg:gap-8 flex-1 rounded-xl sm:rounded-3xl lg:rounded-[40px] p-2 sm:p-4 lg:p-6 bg-gradient-to-r from-[#f1f2d0] to-[#b1d8b4]">
						<div className="items-center flex">
							<Image src={youwen} alt="youwen" />
						</div>
						<div className="text-sm font-light sm:text-base">
							<p className="font-bold text-base sm:text-2xl lg:text-3xl">
								邮问必答
							</p>
							<p className="font-bold text-[#6a9b71] mb-2 sm:mb-4 sm:whitespace-nowrap">
								服务于重庆邮电大学学生处学业辅导中心
							</p>
							项目招募学业优秀、乐于助人的志愿者，针对数理类基础课程、
							英语公共课程和专业课程面向全校同学提供答疑服务，解决同学学习中的具体学业问题，搭建学习讨论交流平台，构
							建人人好学和人人学好的良好氛围。
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

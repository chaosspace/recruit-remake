import { Cover, AboutUs, Members, Product, Schedule } from "./components";
import leftLogo from "../../public/assets/logo1.png";
import rightCode from "../../public/assets/qrcode.png";
import Image from "next/image";

export default function Home() {
	return (
		<main className="">
			<Cover />
			<AboutUs />
			<Members />
			<Product />
			<Schedule />
			<div className="bg-[#f2f2f2] flex justify-around items-center flex-wrap sm:flex-row sm:justify-center sm:gap-12">
				<div className="w-[40%] sm:w-auto p-2 border-r-0 sm:border-r-[1px] border-black">
					<Image src={leftLogo} alt="leftLogo" width={150} height={60} />
				</div>
				<div className="w-[40%] sm:order-2 sm:w-auto p-2 relative sm:after:leftLine">
					<Image src={rightCode} alt="rightCode" width={120} />
				</div>
				<div className="basis-full sm:order-1 sm:basis-auto">
					<div className="flex text-lg text-center justify-between px-4 pt-2 border-t-[1px] border-black sm:border-t-0">
						<div>
							联系我们
							<p className="text-sm">报名投递</p>
							<p className="text-sm">招新咨询</p>
						</div>
						<div>
							我们的产品
							<p className="text-sm">ERP虚拟运营系统</p>
							<p className="text-sm">邮问必答</p>
							<p className="text-sm">邮读书馆</p>
							<p className="text-sm">学员系统</p>
						</div>
						<div>
							互联网时代
							<p className="text-sm">早已到来</p>
							<p className="text-sm">欢迎加入</p>
						</div>
					</div>
					<div className="mt-2 text-center text-xs sm:flex sm:gap-4">
						地址：重庆市南岸区崇文路2号重庆邮电大学经济管理学院2907
						<p>邮箱：join@mislab.team</p>
					</div>
				</div>
			</div>
		</main>
	);
}

import { ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import clsx from "clsx";
import { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
	selectToolbarTheme,
} from "app/store/fuse/settingsSlice";
import { useLocation, useNavigate } from "react-router-dom";
import logoNormal from "../images/logo_normal.png";
import iconActiveMenu from "../images/icon_active_menu.png";

type ToolbarLayout2Props = {
	className?: string;
};

/**
 * The toolbar layout 2.
 */
function ToolbarLayout2(props: ToolbarLayout2Props) {
	const { className = "" } = props;
	const navigate = useNavigate();
	const toolbarTheme = useSelector(selectToolbarTheme);
	const [activePage, setActivePage] = useState("/genealogy");

	const menuItems = [
		{
			id: Math.random(),
			name: "Gia phả",
			path: "genealogy",
		},
	];

	const location = useLocation();

	useEffect(() => {
		setActivePage(location.pathname);
	}, [navigate]);
	useEffect(() => {
		setActivePage(location.pathname);
	}, []);
	return (
		<ThemeProvider theme={toolbarTheme}>
			<AppBar
				id="fuse-toolbar"
				className={clsx("absolute z-20 flex shadow-none", className)}
			>
				<Toolbar className="absolute flex flex-row w-full sm:h-[130px] maxsm:h-[70px] min-h-48 px-0 md:min-h-64 lg:px-24 items-center place-content-center">
					<div className="maxsm:pl-[3%] sm:pl-0 max-w-[1200px] items-center justify-between flex flex-row w-full h-full">
						<img src={logoNormal} className="cursor-pointer sm:ml-[2%] xl:ml-[0%] sm:w-[95px] sm:h-[95px] maxsm:w-[45px] maxsm:h-[45px]" onClick={() => {
							navigate("/genealogy")
						}}></img>
						<div className="flex h-full flex-row items-center place-content-center max-w-md text-white">
							{menuItems.map((value) => (
								<div className="menu-item items-center flex flex-col">
									<div
										key={value.id}
										className={`cursor-pointer xl:text-[36px] lg:text-[32px] md:text-[32px] sm:text-[32px] maxsm:text-[24px] utm text-[#A02D27] font-bold h-full flex items-center cursor-pointer}`}
										onClick={() => {
											navigate(`/${value.path}`);
											setActivePage(`/${value.path}`);
										}}
									>
										{value.name}
									</div>
									{
										activePage.includes(`/${value.path}`) ? <img className="w-[40%]" src={iconActiveMenu}></img> : <img className="w-[40%] opacity-0" src={iconActiveMenu}></img>
									}
								</div>
							))}
						</div>
					</div>
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	);
}

export default memo(ToolbarLayout2);

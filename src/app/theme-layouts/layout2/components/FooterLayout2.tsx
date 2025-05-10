import AppBar from '@mui/material/AppBar';
import { ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import clsx from 'clsx';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectFooterTheme } from 'app/store/fuse/settingsSlice';
import logoThemeDark from '../images/logo_theme_dark.png';
import imageFooter from '../images/image_footer.png';

type FooterLayout2Props = {
	className?: string;
};

/**
 * The footer layout 2.
 */
function FooterLayout2(props: FooterLayout2Props) {
	const footerTheme = useSelector(selectFooterTheme);

	return (
		<ThemeProvider theme={footerTheme}>
			<AppBar
				className={clsx('relative z-20 shadow-md')}
				style={{backgroundColor: "#922620"}}
			>
				<Toolbar className="container w-full flex min-h-48 items-center sm:h-[370px] maxsm:h-[220px] overflow-x-auto px-8 py-0 sm:px-12 md:min-h-64">
					<div className='relative flex flex-col justify-center items-center pt-[2%] justify-around w-full h-full'>
						<img className='z-[5] sm:w-[95px] sm:h-[95px] maxsm:w-[50px] maxsm:h-[50px]' src={logoThemeDark}></img>
						<div className='z-[5] flex pt-[4.2%] sm:w-[40%] maxsm:w-[100%] flex-row justify-around'>
							<div>Trang chủ</div>
							<div>Giới thiệu</div>
							<div>Giả phả</div>
							<div>Tin tức</div>
							<div>Liên hệ</div>
						</div>
						<div className='z-[5] h-[1px] bg-white w-[55%]'></div>
						<div className='z-[5] xl:text-[14px] lg:text-[12px] md:text-[12px] sm:text-[12px] maxsm:text-[12px]'>© Gia Phả Họ Nguyễn</div>
						<img src={imageFooter} className='absolute sm:w-[27%] sm:h-[90%] sm:w-[25%] sm:h-[90%] maxsm:w-[25%] maxsm:h-[60%] right-0 buttom-0'></img>
					</div>
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	);
}

export default memo(FooterLayout2);

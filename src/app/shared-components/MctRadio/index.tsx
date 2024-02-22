import { Radio, RadioProps, styled } from "@mui/material";
const BpIcon = styled('span')(({ theme }) => ({
	borderRadius: '50%',
	width: 20,
	height: 20,
	boxShadow: 'inset 0 0 0 2px rgba(16,22,26,.2)',
	backgroundColor: 'white',
	backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
	'.Mui-focusVisible &': {
		boxShadow: 'none',
	},
	'input:disabled ~ &': {
		boxShadow: 'none',
		background: 'rgba(206,217,224,.5)',
	},
}));

const BpCheckedIcon = styled(BpIcon)({
	backgroundColor: '#0093F5',
	boxShadow: "0px 2px 4px 0px rgba(165, 163, 174, 0.30)",
	backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
	'&:before': {
		display: 'block',
		width: 20,
		height: 20,
		transition: "transform 150ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
		backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
		content: '""'
	}
});
function RadioMct(props: RadioProps) {
	return (
		<Radio
			disableRipple
			color="default"
			sx={{
				color: "#c9c7ce",
				'&:hover.MuiRadio-root': {
					backgroundColor: "rgb(0 147 245 / 7%)",
				},
			}}
			checkedIcon={<BpCheckedIcon />}
			icon={<BpIcon />}
			{...props}
		/>
	);
}

export { RadioMct };
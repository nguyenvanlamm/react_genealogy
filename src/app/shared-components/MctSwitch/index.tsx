import { Switch, styled } from "@mui/material";

const SwitchMct = styled(Switch)(({ theme }) => ({
	padding: 8,

	'& .Mui-checked': {
		'& .MuiSwitch-thumb': {
			color: "white",
		},
	},
	'& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
		backgroundColor: "#0093F5",
		border: "1px solid #0093F5",
	  },
	'& .MuiSwitch-track': {
		borderRadius: 22 / 2,
		backgroundColor: "white ",
		border: "1px solid #DBDADE",

		opacity: '1 !important',
		'&:before, &:after': {
			content: '""',
			position: 'absolute',
			top: '50%',
			transform: 'translateY(-50%)',
			width: 16,
			height: 16,
		},
		'&:before': {
			left: 12,
		},
		'&:after': {
			
			right: 12,
		},
	},
	'& .MuiSwitch-thumb': {
		boxShadow: 'none',
		width: 16,
		height: 16,
		color: "#DBDADE",
		margin: 2,
	},
}));

export { SwitchMct };
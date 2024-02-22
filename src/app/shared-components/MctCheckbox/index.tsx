import { Checkbox, CheckboxProps } from "@mui/material";
function CheckboxMct(props: CheckboxProps) {
	return (
		<Checkbox
			sx={{
				'&.Mui-checked': {
					color: "#0093F5",
				},
				'&.MuiCheckbox-indeterminate': {
					color: "#0093F5",
				}
			}}
			{...props}
		/>
	);
}

export { CheckboxMct };
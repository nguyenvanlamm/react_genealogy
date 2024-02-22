import DemoContent from '@fuse/core/DemoContent';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import { Controller, useForm } from 'react-hook-form';
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, RadioProps, Switch, TextField } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { InferType } from 'yup';
import { log } from 'console';
import { useState } from 'react';
import { ButtonMCT } from 'app/shared-components/MctButton';
import { TextFieldMct } from 'app/shared-components/MctTextField';
import { RadioMct } from 'app/shared-components/MctRadio';
import { CheckboxMct } from 'app/shared-components/MctCheckbox';
import { SwitchMct } from 'app/shared-components/MctSwitch';
import { Outlet } from 'react-router-dom';

const Root = styled(FusePageSimple)(({ theme }) => ({
	'& .FusePageSimple-header': {
		backgroundColor: theme.palette.common.white,
		borderBottomWidth: 1,
		borderStyle: 'solid',
		borderColor: theme.palette.divider
	},
	'& .FusePageSimple-content': {},
	'& .FusePageSimple-sidebarHeader': {},
	'& .FusePageSimple-sidebarContent': {}
}));

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
	email: yup.string().email('You must enter a valid email').required('You must enter a email'),
	checkbox: yup.string().required('You must enter a email'),
});

const defaultValues = {
	email: '',
	radio: '',
	checkbox: '',

};


function ComponentsDemo() {
	const { control, formState, handleSubmit, setError, setValue } = useForm({
		mode: 'onChange',
		defaultValues,
		resolver: yupResolver(schema)
	});
	const [valueRadio, setValueRadio] = useState('');
	const { isValid, dirtyFields, errors } = formState;
	function onSubmit({ email }: InferType<typeof schema>) {
		console.log(email);
	}
	const [checked, setChecked] = useState([true, false]);

	const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked([event.target.checked, event.target.checked]);
	};

	const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked([event.target.checked, checked[1]]);
	};

	const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked([checked[0], event.target.checked]);
	};
	const children = (
		<Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
			<FormControlLabel
				label="Child 1"
				control={<CheckboxMct checked={checked[0]} onChange={handleChange2} />}
			/>
			<FormControlLabel
				label="Child 2"
				control={<CheckboxMct checked={checked[1]} onChange={handleChange3} />}
			/>
		</Box>
	);

	return (
		<Root
			header={
				<div className="p-24">
				</div>
			}
			content={
				<div className="p-24 w-full bg-white flex grid grid-cols-2 gap-2">
					<div className="w-1/2 bg-white flex w-full justify-around ">
						<ButtonMCT typeButton={"primary"} text='Primary' onClick={() => {console.log("primary")}}>
						</ButtonMCT>
						<ButtonMCT typeButton={"secondary"} text='Secondary' onClick={() => {console.log("Secondary")}}>
						</ButtonMCT>
						<ButtonMCT typeButton={"tertiray"} text='Tertiray' onClick={() => {console.log("Tertiray")}}>
						</ButtonMCT>
						<ButtonMCT typeButton={"link"} text='Link' onClick={() => {console.log("Link")}}>
						</ButtonMCT>
					</div>


					<div className="w-1/2">
						<form
							name="inputForm"
							noValidate
							className="flex w-1/2 flex-col justify-center"
							onSubmit={handleSubmit(onSubmit)}
						>
							<Controller
								name="email"
								control={control}
								render={({ field }) => (
									<TextFieldMct
										{...field}
										className=""
										label="Email"
										type="email"
										error={!!errors.email}
										helperText={errors?.email?.message}
										variant="outlined"
										disabled={false}
										required
										fullWidth
									/>
								)}
							/>
							<br />

						</form>
					</div>
					<div className="w-1/2">
						<FormControl
							component="fieldset"
							className="FuseSettings-formControl"
						>
							<FormLabel
								component="legend"
								className="text-14"
							>
								RADIO
							</FormLabel>
							<RadioGroup
								aria-label={"Ratio"}
								value={valueRadio}
								onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
									setValueRadio((event.target as HTMLInputElement).value);
								}}
								className="FuseSettings-group"
								row={false}
							>
								<FormControlLabel
									key={"value1"}
									value={"value1"}
									control={<RadioMct />}
									label={"Toán"}
								/>
								<FormControlLabel
									key={"value2"}
									value={"value2"}
									control={<RadioMct />}
									label={"Văn"}
								/>
							</RadioGroup>
						</FormControl>
						<FormControl
							component="fieldset"
							className="FuseSettings-formControl"
						>
							<FormLabel
								component="legend"
								className="text-14"
							>
								CHECKED
							</FormLabel>
							<FormControlLabel
								label="Parent"
								control={
									<CheckboxMct
										checked={checked[0] && checked[1]}
										indeterminate={checked[0] !== checked[1]}
										onChange={handleChange1}
									/>
								}
							/>
							{children}
						</FormControl>
						<FormControl
							component="fieldset"
							className="FuseSettings-formControl"
						>
							<FormLabel
								component="legend"
								className="text-14"
							>
								SWITCH
							</FormLabel>
							<FormControlLabel
								control={<SwitchMct defaultChecked disabled={false}/>}
								label="Android 12"
							/>
						</FormControl>
					</div>
				</div>
			}
		/>
	);
}

export default ComponentsDemo;

import { TextField, TextFieldProps } from "@mui/material";

function TextFieldMct(props: TextFieldProps) {
    return (
        <TextField
            sx={{
                borderRadius: '16px',
                className: 'mct-font-body1',
                '&:focus-within label, &:focus-visible label': {
                    color: `#0093F5 !important`,
                },
                '&:focus-within .Mui-error, &:focus-visible .Mui-error': {
                    color: `#FF7777 !important`,
                },
            }}
            InputLabelProps={{
                sx: {

                },
            }}
            InputProps={{
                sx: {
                    'fieldset': {
                        border: `1px solid #C4C4C4`,
                    },
                    borderRadius: '16px',
                    '&:hover fieldset': {
                        border: `1px solid #C4C4C4 !important`,
                    },
                    '&:hover.Mui-error fieldset': {
                        border: `1px solid #FF7777 !important`,
                    },
                    '&:focus-within fieldset, &:focus-visible fieldset': {
                        border: `1px solid #0093F5 !important`,
                    },
                    '&:focus-within.Mui-error fieldset , &:focus-visible.Mui-error fieldset ': {
                        border: `1px solid #FF7777 !important`,
                    },
                    '&:focus-within input, &:focus-visible input': {
                        className: 'mct-font-body1',
                    },
                    'input': {
                        "-webkit-box-shadow": "0 0 0 100px #fff inset !important",
                        "-webkit-text-fill-color": "#000 !important",
                    }
                },
            }}
            inputProps={{

                sx: {
                    borderRadius: '16px',
                },
            }}
            {...props}
        />
    );
}

export { TextFieldMct };
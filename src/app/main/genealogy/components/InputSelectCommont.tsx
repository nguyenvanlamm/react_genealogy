import { Autocomplete } from "@mui/material";
import { styled, lighten, darken } from "@mui/system";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

const InputSelectCommont = (props) => {
    const {options, type, label, icon} = props;
  const GroupHeader = styled("div")(({ theme }) => ({
    position: "sticky",
    top: "-8px",
    padding: "4px 10px",
    "font-weight": "700",
    color: theme.palette.primary.main,
    backgroundColor:
      theme.palette.mode === "light"
        ? lighten(theme.palette.primary.light, 0.85)
        : darken(theme.palette.primary.main, 0.8),
  }));

  const GroupItems = styled("ul")({
    padding: 0,
  });

  return (
    <div className="w-auto min-w-[30%]">
      <Autocomplete
        id="grouped-saintName"
        options={options}
        disableClearable={true}
        groupBy={(option) => option.type}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <TextField
            {...params}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <img src={icon}></img>
                </InputAdornment>
              ),
            }}
            label="Tên thánh"
          />
        )}
        // sx={{ width: 300 }}
        renderGroup={(params) => (
          <li key={params.key}>
            <GroupHeader>{params.group}</GroupHeader>
            <GroupItems>{params.children}</GroupItems>
          </li>
        )}
      />
    </div>
  );
};

export default InputSelectCommont;

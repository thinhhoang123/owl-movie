import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import * as React from 'react';

export interface ISelectProps {
  onChange: (value: object) => void;
  data: IDropdownList[];
  inputLabel?: string;
  defaultValue?: number;
  name: string;
}

export interface IDropdownList {
  value: any;
  label: string;
}

export default function Dropdown(props: ISelectProps) {
  const [selected, setSelected] = React.useState(
    props.defaultValue ? props.defaultValue.toString() : ''
  );

  const handleChange = (event: SelectChangeEvent) => {
    setSelected(event.target.value as string);
    props.onChange({ key: props.name, value: event.target.value });
  };

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-label">{props.inputLabel}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selected}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {props.data.map((menu) => {
          return (
            <MenuItem key={menu.value} value={menu.value}>
              <em>{menu.label}</em>
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

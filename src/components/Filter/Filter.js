import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

const Filter = ({ type, setType }) => {
  return (
    <div>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="all"
          name="radio-buttons-group"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <FormControlLabel
            value="Gachimuchi"
            control={<Radio />}
            label="Gachi"
          />
          <FormControlLabel value="KG" control={<Radio />} label="KG" />

          <FormControlLabel value="all" control={<Radio />} label="Все" />
          <FormControlLabel
            value="Red Hair"
            control={<Radio />}
            label="Рыжие"
          />
          <FormControlLabel value="Blonde" control={<Radio />} label="Блонда" />
          <FormControlLabel value="Black" control={<Radio />} label="Black" />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Filter;

import React from "react";
import { TextField } from "@material-ui/core";

interface InputProps {
  label: string;
  value: string;
  id?: string;
  className?: string;
  rows?: number
  multiline?: boolean;
  onChange: (e) => void;
}

function TextInput({
  label,
  value,
  className,
  onChange,
  multiline,
  rows, 
  id,
}: InputProps) {
  return (
    <TextField
      id={id}
      className={className}
      label={label}
      variant="outlined"
      value={value}
      rows={rows}
      name={id}
      multiline={multiline}
      onChange={onChange}
    />
  );
}

export default TextInput;

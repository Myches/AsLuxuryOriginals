import Select, { StylesConfig } from "react-select";

export interface Option {
  value: string;
  label: string;
}

interface Props {
  handleChange: (selectedOption: Option | null, name: string) => void;
  defaultValue?: Option;
  options: Option[];
  placeholder?: string;
  name: string;
  value: Option | null;
  containerWidth?: string;
  containerHeight?: string;
}

const SelectInput = ({
  defaultValue,
  handleChange,
  options,
  placeholder,
  name,
  value,
  containerWidth = "100%",
  containerHeight = "50px",
}: Props) => {
  const customStyles: StylesConfig<{ value: string; label: string }, false> = {
    control: (base, state) => ({
      ...base,
      width: containerWidth,
      height: containerHeight,
      border: "0.5px solid #222",
      borderRadius: "8px",
      outline: state.isFocused ? "none" : base.outline,
      boxShadow: state.isFocused ? "none" : base.boxShadow,
      fontWeight: "600",
      fontSize: "14px",
      lineHeight: "20px",
      "&:hover": {
        outline: "none",
      },
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    menu: (base) => ({
      ...base,
      color: "#222",
      fontSize: "16px",
      lineHeight: "20px",
      marginTop: "-2px",
      borderColor: "transparent",
    }),
    option: (base) => ({
      ...base,
      backgroundColor: "transparent",
      color: "#222",
      fontSize: "16px",
      textTransform: "capitalize",
      lineHeight: "20px",
      "&:hover": {
        backgroundColor: "#f8f8f8",
      },
    }),
    placeholder: (base) => ({
      ...base,
      fontSize: "16px",
    }),
  };

  return (
    <Select
      name={name}
      defaultValue={defaultValue}
      onChange={(selectedOption) => handleChange(selectedOption, name)}
      options={options}
      styles={customStyles}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default SelectInput;

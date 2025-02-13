import { ComponentProps, ReactNode } from "react";
import { Input } from ".";
import { FieldWrapper } from "../field-wrapper";
import { Controller, useFormContext } from "react-hook-form";

type InputFieldProps = ComponentProps<typeof Input> & {
  label: string;
  name: string;
  containerClassName?: string
  extraContent?: (value: string) => ReactNode;
};

export const InputField = ({
  label,
  name,
  required,
  containerClassName,
  extraContent,
  ...props
}: InputFieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: required && "Campo obrigatório" }}
      render={({ field, fieldState }) => (
        <FieldWrapper label={label} className={containerClassName} error={fieldState?.error}>
          <Input {...props} {...field} value={field.value || ""}/>
          {extraContent && extraContent(field.value)}
        </FieldWrapper>
      )}
    />
  );
};

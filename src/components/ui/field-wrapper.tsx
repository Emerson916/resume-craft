import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { FieldError } from "react-hook-form";
import { Label } from "@radix-ui/react-label";

type FieldWrapperProps = {
  label: string;
  children: ReactNode;
  className?: string;
  error?: FieldError;
};

export const FieldWrapper = ({ label, children }: FieldWrapperProps) => {
  return (
    <div className={cn("flex flex-col gap-2")}>
      <Label>{label}</Label>
      {children}
    </div>
  );
};

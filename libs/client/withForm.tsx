// Thank you, ChatGPT!
import { useForm, UseFormProps, UseFormReturn } from "react-hook-form";

type UseFormWithDefaultMode = {
  <TFieldValues extends Record<string, any> = Record<string, any>>(
    defaultMode?: UseFormProps<TFieldValues>["mode"]
  ): UseFormReturn<TFieldValues>;
};

const useFormWithDefaultMode: UseFormWithDefaultMode = <
  TFieldValues extends Record<string, any> = Record<string, any>
>(
  defaultMode: UseFormProps<TFieldValues>["mode"] = "onSubmit"
) => {
  return useForm<TFieldValues>({ mode: defaultMode });
};

export default useFormWithDefaultMode;

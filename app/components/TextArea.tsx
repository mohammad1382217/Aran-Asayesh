import { Textarea } from "@material-tailwind/react";

export const TextArea: React.FC<TextareaProps> = ({
  TextAreaClass,
  MaxLength,
  Name,
  Value,
  Placeholder,
  onChange,
}) => {
  return (
    <Textarea
      className={TextAreaClass}
      maxLength={MaxLength}
      name={Name}
      value={Value}
      onChange={onChange}
      placeholder={Placeholder}
    />
  );
};

// Types
interface TextareaProps {
  TextAreaClass: string;
  MaxLength?: number;
  Name?: string;
  Value?: string | undefined;
  Placeholder: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

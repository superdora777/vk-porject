import { useState } from "react";

interface Props {
  onSubmit: (name: string) => Promise<void>;
}

type Status = "default" | "error" | "valid";

const modes = {
  button: "button",
  form: "form",
};

const statuses = {
  default: "default",
  error: "error",
} as Record<string, Status>;

export const useCreateForm = ({ onSubmit }: Props) => {
  const [mode, setMode] = useState(modes.button);
  const [name, setName] = useState("");
  const [status, setStatus] = useState(statuses.default);

  const onChangeInput = (event: any) => setName(event.target.value);
  const isButtonMode = mode === modes.button;

  const reset = () => {
    setStatus(statuses.default);
    setMode(modes.button);
    setName("");
  };

  const submit = (event: { preventDefault: () => void }) => {
    if (event) {
      event.preventDefault();
    }
    if (!name.trim().length) {
      setStatus(statuses.error);
      return;
    }
    onSubmit(name).then(reset);
  };

  const setFormMode = () => setMode(modes.form);

  return {
    name,
    status,
    reset,
    submit,
    setFormMode,
    onChangeInput,
    isButtonMode,
  };
};

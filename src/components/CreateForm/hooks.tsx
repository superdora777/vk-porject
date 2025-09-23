import { useCallback, useState } from "react";
import { UnknownAction } from "redux";

interface Props {
  onSubmit: (name: string) => Promise<UnknownAction>;
  initialName?: string;
  initialMode?: string;
  onCancel?: () => void;
}

type Status = "default" | "error" | "valid";

export const modes = {
  button: "button",
  form: "form",
};

const statuses = {
  default: "default",
  error: "error",
} as Record<string, Status>;

export const useCreateForm = ({
  onSubmit,
  initialName = "",
  initialMode = modes.button,
  onCancel,
}: Props) => {
  const [mode, setMode] = useState(initialMode);
  const [name, setName] = useState(initialName);
  const [status, setStatus] = useState(statuses.default);

  const onChangeInput = (event: any) => setName(event.target.value);
  const isButtonMode = mode === modes.button;

  const reset = useCallback(() => {
    onCancel && onCancel();
    setStatus(statuses.default);
    setMode(modes.button);
    setName("");
  }, [onCancel]);

  const submit = useCallback(
    (event: { preventDefault: () => void }) => {
      if (event) {
        event.preventDefault();
      }
      if (!name.trim().length) {
        setStatus(statuses.error);
        return;
      }
      onSubmit(name).then(reset);
    },
    [name, onSubmit, reset]
  );

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

import {
  Button,
  Card,
  CardGrid,
  FormLayoutGroup,
  Input,
  FormItem,
} from "@vkontakte/vkui";
import { Icon24Add } from "@vkontakte/icons";
import { useCreateForm } from "./hooks";
import { UnknownAction } from "redux";

interface Props {
  actionTitle: string;
  onSubmit: (name: string, id?: string) => Promise<UnknownAction>;
  placeholder: string;
  initialName?: string;
  initialMode?: string;
  onCancel?: () => void;
}

export const CreateForm = ({
  onSubmit,
  placeholder,
  actionTitle,
  initialName,
  initialMode,
  onCancel,
}: Props) => {
  const {
    name,
    status,
    reset,
    submit,
    setFormMode,
    onChangeInput,
    isButtonMode,
  } = useCreateForm({ initialName, onSubmit, initialMode, onCancel });

  if (isButtonMode) {
    return (
      <Button
        onClick={setFormMode}
        before={<Icon24Add />}
        mode="outline"
        size="l"
        style={{ width: "100%" }}
      >
        {actionTitle}
      </Button>
    );
  }

  return (
    <CardGrid size="l">
      <Card mode="shadow">
        <FormLayoutGroup>
          <FormItem htmlFor="name" top="Название колонки" onSubmit={submit}>
            <Input
              id="name"
              autoFocus
              value={name}
              onChange={onChangeInput}
              status={status}
              placeholder={placeholder}
            />
          </FormItem>
          <FormItem>
            <Button size="s" onClick={submit}>
              {actionTitle}
            </Button>
          </FormItem>
          <FormItem>
            <Button size="s" onClick={reset} mode="outline">
              Отменить
            </Button>
          </FormItem>
        </FormLayoutGroup>
      </Card>
    </CardGrid>
  );
};

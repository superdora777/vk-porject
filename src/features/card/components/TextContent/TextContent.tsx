import { Div } from "@vkontakte/vkui";
import { useSelector } from "react-redux";
import { getText } from "../../selectors";
import { marked } from "marked";
import { memo, useMemo } from "react";
import "./TextContent.scss";

const TextContent = () => {
  const cardText = useSelector(getText) ?? "";
  const content = useMemo(() => cardText.replace(/\\n/g, "\n"), [cardText]);

  if (!cardText) {
    return null;
  }

  console.log(content);

  return (
    <Div className="textContent">
      <span dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </Div>
  );
};

export default memo(TextContent);

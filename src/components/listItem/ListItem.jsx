// CUSTOM-HOOKS
import { useThem } from "../../hook/useThem";
// STYLES
import "./style.css";

export const ListItem = ({ item, index, clickItem }) => {
  const { themType } = useThem();

  const handleClick = () => {
    clickItem(index);
  };

  return (
    <li
      className={
        themType ? "list-item list-item_dark" : "list-item list-item_light"
      }
      onClick={handleClick}
    >
      {item.name}
    </li>
  );
};

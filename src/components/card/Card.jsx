// CUSTOM-HOOKS
import { useThem } from "../../hook/useThem";
// STYLES
import "./style.css";

export const Card = ({ item, itemType }) => {
  const { themType } = useThem();

  return (
    <>
      {itemType === "people" && (
        <div
          className={
            themType
              ? "card-container card-container_dark"
              : "card-container card-container_light"
          }
        >
          <h3>{item.name}</h3>
          <div>
            <p>Gender: {item.gender}</p>
            <p>Birth Year: {item.birth_year}</p>
            <p>Eye Color: {item.eye_color}</p>
          </div>
        </div>
      )}
      {itemType === "planets" && (
        <div
          className={
            themType
              ? "card-container card-container_dark"
              : "card-container card-container_light"
          }
        >
          <h3>{item.name}</h3>
          <div>
            <p>Population: {item.population}</p>
            <p>Rotation Period: {item.rotation_period}</p>
            <p>Diameter: {item.diameter}</p>
          </div>
        </div>
      )}
      {itemType === "starships" && (
        <div
          className={
            themType
              ? "card-container card-container_dark"
              : "card-container card-container_light"
          }
        >
          <h3 className="card-title">{item.name}</h3>
          <div>
            <p className="card-text">Model: {item.model}</p>
            <p className="card-text">Starship class: {item.starship_class}</p>
            <p className="card-text">Length: {item.length}</p>
          </div>
        </div>
      )}
    </>
  );
};

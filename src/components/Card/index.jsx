import "./styles.scss";

// eslint-disable-next-line react/prop-types
export const Card = ({ nameCard = "", phoneContact, delItemCard }) => {
  return (
    <div className="card-container">
      <div
        className="text-card"
        onClick={() => window.open("/" + phoneContact, "_self")}
      >
        <h2>{nameCard}</h2>
      </div>

      <button onClick={() => delItemCard()}>DEL</button>
    </div>
  );
};

import { StartScreenCard } from "../StartScreenCard";

export const StartScreenCardConfirm = () => {
  const cardNumber = 3;
  return (
    <StartScreenCard
      number={cardNumber}
      title={"Confirmation"}
      isActive={true}
      smoothScrollId={`card${cardNumber}`}
    >
      <div>Card {cardNumber}</div>
    </StartScreenCard>
  );
};

import { StartScreenCard } from "../StartScreenCard";

export const StartScreenCardSelect = () => {
  const cardNumber = 1;
  return (
    <StartScreenCard
      number={cardNumber}
      title={"Enter BoardGameGeek Username"}
      isActive={true}
      smoothScrollId={`card${cardNumber}`}
    >
      <div>Card {cardNumber}</div>
    </StartScreenCard>
  );
};

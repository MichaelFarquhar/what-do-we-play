import { StartScreenCard } from "../StartScreenCard";

export const StartScreenCardFilter = () => {
  const cardNumber = 2;
  return (
    <StartScreenCard
      number={cardNumber}
      title={"Filter Based on Preferences"}
      isActive={true}
      smoothScrollId={`card${cardNumber}`}
    >
      <div>Card {cardNumber}</div>
    </StartScreenCard>
  );
};

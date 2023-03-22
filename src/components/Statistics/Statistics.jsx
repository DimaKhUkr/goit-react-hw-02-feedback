export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <p>good:{good}</p>
      <p> neutral:{neutral}</p>
      <p> bad:{bad}</p>
      <p>total:{total}</p>
      <p>
        {!Number.isNaN(positivePercentage)
          ? ` positivePercentage: ${positivePercentage}`
          : 'Статистика недоступна'}
      </p>
    </div>
  );
};

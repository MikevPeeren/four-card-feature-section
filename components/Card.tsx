interface ICard {
  title: string;
  content: string;
  icon: any; //TODO: svg
}

const Card = ({ title, content, icon }: ICard) => {
  return (
    <div className="max-w-xs rounded-xl bg-white p-4">
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
};
export default Card;

import SupervisorIcon from "../public/icon-supervisor.svg";
import Image from "next/image";

interface ICard {
  title: string;
  content: string;
  Icon?: string;
  iconAlt: string;
}

const Card = ({ title, content, Icon, iconAlt }: ICard) => {
  console.log(typeof Icon);
  return (
    <div className="max-w-xs rounded-xl shadow-xl bg-white px-6 py-4">
      <h4 className="mt-4 text-left">{title}</h4>
      <p className="mb-6 mt-1 text-left">{content}</p>

      {Icon && (
        <div className="flex justify-end">
          <Image src={Icon} alt={iconAlt} priority width={64} height={64} />
        </div>
      )}
    </div>
  );
};
export default Card;

import Image from "next/image";
import Router from "next/router";

import clsx from "classnames";

import styles from "./Card.module.scss";

interface ICard {
  title: string;
  content: string;
  borderColor: string;
  Icon?: string;
  iconAlt: string;
}

const Card = ({ title, content, borderColor, Icon, iconAlt }: ICard) => {
  const borderStyle = clsx({
    [styles["Card__cyan"]]: borderColor === "cyan",
    [styles["Card__red"]]: borderColor === "red",
    [styles["Card__orange"]]: borderColor === "orange",
    [styles["Card__blue"]]: borderColor === "blue",
  });

  const handleClick = () => {
    Router.push("https://mikevpeeren.nl");
  };

  return (
    <div
      className={`${borderStyle} max-w-xs rounded-md shadow-xl bg-white px-6 py-4 transition duration-500 ease-in-out hover:-translate-y-1 hover:cursor-pointer`}
      onClick={handleClick}
    >
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

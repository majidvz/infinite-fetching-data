import { FC } from "react";
import { Flex } from "antd";
import { IProduct } from "../../models";
import { CardWrapper } from "./styles";

export const Card: FC<IProduct> = ({
  imageURL,
  title,
  description,
  price,
  id,
}) => {
  return (
    <CardWrapper
      vertical
      justify="flex-start"
      align="center"
      id={id.toString()}
    >
      <div className="cover-wrapper">
        <img className="cover" src={imageURL} alt={title} loading="lazy" />
      </div>
      <Flex vertical justify="flex-start" align="center" className="body">
        <h3 className="title popping-bold">{title}</h3>
        <span className="price popping-medium">Price: {price}</span>
        <p className="description">{description}</p>
      </Flex>
    </CardWrapper>
  );
};

import { FC } from "react";
import { Col } from "antd";
import { IProduct } from "../../models";
import { Card } from "../card";
import { ListWrapper } from "./styles";

interface IListProps {
  productList: IProduct[];
}

export const List: FC<IListProps> = ({ productList }) => {
  return (
    <ListWrapper gutter={16}>
      {productList?.map((product: IProduct, index: number) => (
        <Col className="column" key={index} xs={24} md={12} lg={8} xl={6}>
          <Card {...product} />
        </Col>
      ))}
    </ListWrapper>
  );
};

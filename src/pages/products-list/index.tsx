import { FC, useEffect, useState } from "react";
import { Pagination, PaginationProps, Spin } from "antd";
import { Header, List } from "../../components";
import { getProducts } from "../../service";
import { IProduct } from "../../models";
import { useInfiniteScroll } from "../../hooks";
import { ProductsListPageWrapper } from "./styles";

export const ProductsListPage: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [pagination, setPagination] = useState<{
    current: number;
    pageSize: number;
  }>({ current: 1, pageSize: 20 });
  const [productList, setProductList] = useState<IProduct[]>([]);
  const [allProducts, setAllProducts] = useState<IProduct[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const loadMoreProducts = async () => {
    if (loading) return;
    try {
      setLoading(true);
      const newProducts = await getProducts();
      setProductList((prev) => [...prev, ...newProducts]);
      setAllProducts((prev) => [...prev, ...newProducts]);
      setPagination((prev) => {
        if (prev.current + 1 > 10) {
          setHasMore(false);
        }
        return { ...prev, current: prev.current + 1 };
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useInfiniteScroll(loadMoreProducts, hasMore);

  useEffect(() => {
    if (!productList.length) {
      loadMoreProducts();
    }
  }, []);

  const onChange: PaginationProps["onChange"] = (current, size) => {
    const firstIndex = (current - 1) * size;
    const lastIndex = current * size;
    const newData = allProducts.slice(firstIndex, lastIndex);

    setPagination({ current, pageSize: size });
    setProductList(newData);

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <ProductsListPageWrapper
      justify="flex-start"
      align="center"
      vertical
      gap={40}
    >
      <Header />

      <List productList={productList} />
      {loading && <Spin spinning />}

      {!hasMore && (
        <Pagination
          onChange={onChange}
          current={pagination.current}
          size="default"
          pageSize={pagination.pageSize}
          total={200}
          responsive
        />
      )}
    </ProductsListPageWrapper>
  );
};

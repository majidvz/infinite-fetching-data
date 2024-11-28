import { useEffect } from "react";

export const useInfiniteScroll = (loadMore: () => void, hasMore: boolean) => {
  useEffect(() => {
    const handleScroll = () => {
      const { scrollHeight, clientHeight, scrollTop } =
        document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight && hasMore) {
        loadMore();
      }
    };

    if (hasMore) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loadMore, hasMore]);
};

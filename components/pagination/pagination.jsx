"use client";

import { useEffect, useState } from "react";
import { Box, Typography, Pagination, Stack } from "@mui/material";

const pageSize = 6;

export default function AppPagination({ data, setProducts }) {
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });

  useEffect(() => {
    const products = data.slice(pagination.from, pagination.to);
    setProducts(products);
  }, [pagination.from, pagination.to]);

  const count = data.length;

  const handelPageChange = (e, page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;
    setPagination({ ...pagination, from: from, to: to });
  };

  return (
    <Stack
      spacing={4}
      justifyContent={"center"}
      alignItems="center"
      display={"flex"}
      m={"50px 0px"}>
      <Pagination
        count={Math.ceil(count / pageSize)}
        onChange={handelPageChange}
        shape="rounded"
      />
    </Stack>
  );
}

import React from "react";
import { Pagination } from "../Pagination/Pagination";

export const PagintionWrapper = ({
  top,
  button,
  children,
  ...paginationProps
}) => {
  return (
    <>
      {top && <Pagination {...paginationProps} />}

      {children}

      {button && <Pagination {...paginationProps} />}
    </>
  );
};

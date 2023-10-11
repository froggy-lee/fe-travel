"use client";

import React from "react";
import * as S from "./styles";
import RingLoader from "react-spinners/RingLoader";
// import { useSelector } from "react-redux";
// import { selectIsLoadingpage } from "@/store/slice/loading";

function LoadingPage() {
  // const isLoading = useSelector(selectIsLoadingpage);
  return (
    <>
      {/* {isLoading && ( */}
      <S.Wrapper>
        <RingLoader
          color={"#fff"}
          loading={true}
          size={80}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </S.Wrapper>
      {/* )} */}
    </>
  );
}

export default LoadingPage;

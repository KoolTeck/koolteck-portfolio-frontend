import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "./Title";

import Carousell from "../components/Carousell";

function ReviewsSection() {
  return (
    <ReviewsStyled>
      <Title title={"Reviews"} span={"Reviews"} />
      <InnerLayout>
        <div className="reviews">
          <Carousell />
        </div>
      </InnerLayout>
    </ReviewsStyled>
  );
}

const ReviewsStyled = styled.section`
  .reviews {
    display: grid;
    width: 100%;
    justify-content: center;
  }
`;

export default ReviewsSection;

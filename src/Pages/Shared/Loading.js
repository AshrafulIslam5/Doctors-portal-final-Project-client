import React from 'react';
import ClipLoader from "react-spinners/PulseLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 40px auto;
  border-color: red;
`;
const Loading = () => {
    const color = '#0FCFEC';
    return (
        <div className='text-center mt-8'>
            <ClipLoader color={color} css={override} size={15} margin={2} />
        </div>
    );
};

export default Loading;
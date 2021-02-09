import React from 'react';
import { css } from '@emotion/react';

const Hello = () => {
  const breakpoints = [576, 768, 992, 1200];

  const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

  return (
    <div>
      <div
        css={{
          color: 'red',
          [mq[0]]: {
            color: 'blue',
          },
          [mq[1]]: {
            color: 'green',
          },
        }}
      >
        Some text!
      </div>
      <p
        css={css`
          color: yellow;
          ${mq[0]} {
            color: darkblue;
          }
          ${mq[1]} {
            color: green;
          }
        `}
      >
        Some other text!
      </p>
    </div>
  );
};

export default Hello;

import React, { Children, ReactNode } from 'react';
import classnames from 'classnames';
import { useStyles } from 'sku/treat';
import { Box } from '../Box/Box';
import { ResponsiveSpace } from '../Box/useBoxStyles';
import {
  useNegativeOffsetX,
  useNegativeOffsetY,
} from '../../hooks/useNegativeOffset/useNegativeOffset';
import * as styleRefs from './Inline.treat';

export interface InlineProps {
  space: ResponsiveSpace;
  wrap?: boolean;
  children: ReactNode;
}

export const Inline = ({
  space = 'none',
  wrap = true,
  children,
}: InlineProps) => {
  const styles = useStyles(styleRefs);
  const negativeOffsetX = useNegativeOffsetX(space);
  const negativeOffsetY = useNegativeOffsetY(space);

  return (
    <Box className={classnames(negativeOffsetY)}>
      <Box
        display="flex"
        className={classnames(
          wrap ? styles.flexWrap : undefined,
          negativeOffsetX,
        )}
      >
        {Children.map(children, child =>
          child !== null && child !== undefined ? (
            <Box paddingLeft={space} paddingTop={space}>
              {child}
            </Box>
          ) : null,
        )}
      </Box>
    </Box>
  );
};

import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconPrint } from './IconPrint';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  screenshotWidths: [],
  examples: [
    {
      label: 'Default',
      Example: () => <IconPrint />,
    },
  ],
};

export default docs;

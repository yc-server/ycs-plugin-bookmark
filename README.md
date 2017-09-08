# Installation

```bash
ycs add plugin bookmark
```

# configurations

```ts
import { IConfig } from 'ycs-plugin-bookmark';

export const development: IConfig = {
  endpoint: '/bookmark',
  categories: ['A', 'B', 'C'],
  errors: {
    empty: 'empty content'
  },
};

export const production: IConfig = {
  endpoint: '/bookmark',
  categories: ['A', 'B', 'C'],
  errors: {
    empty: 'empty content'
  },
};

```
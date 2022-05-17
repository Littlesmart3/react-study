// App.tsx
import React, { Suspense } from 'react';

import Routers from '@/router/index';

const App = () => {
  return (
    <Suspense fallback={<span>loading</span>}>
      <Routers />
    </Suspense>
  );
};

export default App;

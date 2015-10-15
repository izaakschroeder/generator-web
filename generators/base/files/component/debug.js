
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

export default function Debug(store) : Element {
  return !useDevtools ? null :
    <DebugPanel right bottom top>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>;
}

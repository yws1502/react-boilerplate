import { GlobalPortal } from 'components/common/GlobalPortal';
import OverlayProvider from 'components/common/OverlayProvider';
import Router from 'components/routers/Router';

function App() {
  return (
    <OverlayProvider>
      <GlobalPortal.Provider>
        <div className="h-svh" id="app">
          <Router />
        </div>
      </GlobalPortal.Provider>
    </OverlayProvider>
  );
}

export default App;

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import { AuthProvider } from './contexts/AuthContext'
import { LivesProvider } from './contexts/LivesContext'
import { GenerationsProvider } from './contexts/GenerationsContext'
import { ProgressProvider } from './contexts/ProgressContext'
import App from './App.jsx'

// Defer heavy, non-critical widget until after initial render
const LazyTawkToChat = React.lazy(() => import('./components/TawkToChat'))
import './index.css'
import './i18n/config'
import mixpanel from 'mixpanel-browser'

// Initialize Mixpanel (deferred to avoid blocking initial load)
const MIXPANEL_TOKEN = import.meta.env.VITE_MIXPANEL_TOKEN;
function initMixpanel() {
  if (MIXPANEL_TOKEN && MIXPANEL_TOKEN !== 'YOUR_MIXPANEL_TOKEN_HERE') {
    mixpanel.init(MIXPANEL_TOKEN, {
      debug: import.meta.env.DEV,
      track_pageview: true,
      persistence: 'localStorage',
      ignore_dnt: false,
    });
    console.log('✅ Mixpanel initialized successfully');
  } else {
    console.warn('⚠️ Mixpanel token not configured. Add VITE_MIXPANEL_TOKEN to your .env file.');
  }
}

if (typeof window !== 'undefined') {
  const schedule = window.requestIdleCallback || ((fn) => setTimeout(fn, 1500));
  schedule(initMixpanel);
}

// Deferred mount for TawkToChat
function DeferredTawk() {
  const [mount, setMount] = React.useState(false);
  React.useEffect(() => {
    const schedule = window.requestIdleCallback || ((fn) => setTimeout(fn, 2000));
    schedule(() => setMount(true));
  }, []);
  return mount ? (
    <React.Suspense fallback={null}>
      <LazyTawkToChat />
    </React.Suspense>
  ) : null;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <LivesProvider>
        <GenerationsProvider>
          <ProgressProvider>
            <App />
            <Analytics />
            <DeferredTawk />
          </ProgressProvider>
        </GenerationsProvider>
      </LivesProvider>
    </AuthProvider>
  </React.StrictMode>,
)

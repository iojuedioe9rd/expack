import logMessage from './js/logger'
import './css/style.css'

// Log message to console
logMessage('Its finished!!')

if ((module as any).hot)       // eslint-disable-line no-undef
  (module as any).hot.accept() // eslint-disable-line no-undef
import './polyfills';
import './config/integrated';

import React from 'react';
import ReactDOM from 'react-dom';

import { integratedContext } from '$config/integratedContext';
import { IntegratedApp } from '$ui/views/IntegratedApp';

integratedContext.initialize();
ReactDOM.render(<IntegratedApp />, integratedContext.element);

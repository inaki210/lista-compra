import React from 'react';

import { login } from '$core/domain/session';

export { Login };

function Login() {
  return <button onClick={handleClick}>login</button>;
}

function handleClick() {
  login('pwa', { username: 'daniel', password: '123456' });
}

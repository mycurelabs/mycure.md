import sdk from '@mycure/sdk-js';

const SDK_STORAGE_KEY_UID = 'sdk:uid';
const SDK_STORAGE_KEY_TOKEN = 'sdk:tok';
const SDK_STORAGE_KEY_REFRESH = 'sdk:ref';

function parseJWTPayload (token) {
  try {
    let payloadPart = token.split('.')[1];
    // Replace non-url compatible chars with base64 standard chars
    payloadPart = payloadPart.replace(/-/g, '+').replace(/_/g, '/');
    // Pad out with standard base64 required padding characters
    const pad = payloadPart.length % 4;
    if (pad) {
      if (pad === 1) throw new Error('InvalidLengthError: Input base64url string is the wrong length to determine padding');
      payloadPart += new Array(5 - pad).join('=');
    }
    return JSON.parse(window.atob(payloadPart));
  } catch (error) {
    error.message = 'Failed to parse JWT. ' + error.message;
    throw error;
  }
};

function loadUser (creds) {
  if (!creds?.uid) throw new Error('Invalid authenticated response. missing uid');
  if (!creds?.accessToken) throw new Error('Invalid authentication response. missing accessToken');
  if (!creds?.user?.uid) throw new Error('Invalid authenticated response. missing populated user');

  // save tokens
  globalThis.localStorage.setItem(SDK_STORAGE_KEY_UID, creds.uid);
  globalThis.localStorage.setItem(SDK_STORAGE_KEY_TOKEN, creds.accessToken);
  globalThis.localStorage.setItem(SDK_STORAGE_KEY_REFRESH, creds.refreshToken);

  // fetch account details
  const user = creds.user;
  return user;
};

// eslint-disable-next-line no-unused-vars
async function getToken () {
  const accessToken = globalThis.localStorage.getItem(SDK_STORAGE_KEY_TOKEN);
  if (!accessToken) return;
  const refreshToken = globalThis.localStorage.getItem(SDK_STORAGE_KEY_REFRESH);
  const expiresIn = parseJWTPayload(accessToken)?.exp;

  // no refresh/expiration, let the server check
  if (!refreshToken || !expiresIn) return accessToken;

  // not yet expired
  if ((Date.now() / 1000) < expiresIn) return accessToken;

  // refresh the token
  const body = { action: 'refreshAccessToken', refreshToken };
  // eslint-disable-next-line arrow-parens
  const creds = await sdk.service('authentication')
    .create(body)
    .catch((error) => {
      // handle network errors
      switch (error.message) {
        case 'Failed to fetch':
        case 'NetworkError when attempting to fetch resource.':
        case 'Network request failed': {
          throw error;
        }
      }

      // signout failed refresh
      return signout();
    });

  if (!creds?.accessToken) throw new Error('Invalid refresh response. missing accessToken');
  if (!creds?.refreshToken) throw new Error('Invalid refresh response. missing refreshToken');
  globalThis.localStorage.setItem(this.prefixKey(SDK_STORAGE_KEY_TOKEN), creds.accessToken);
  globalThis.localStorage.setItem(this.prefixKey(SDK_STORAGE_KEY_REFRESH), creds.refreshToken);

  this.log('token refreshed');
  return creds.accessToken;
};

export const signinWithToken = async (opts) => {
  try {
    if (!opts.token) {
      throw new Error('Token is required');
    }
    const user = await sdk.service('authentication').create({
      strategy: 'jwt',
      accessToken: opts.token,
    });
    loadUser(user);
    return user;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const getCurrentUser = async () => {
  const token = await getToken();
  if (!token) return null;
  const { user } = await signinWithToken({ token });
  return user;
};

export function signout () {
  globalThis.localStorage.removeItem(SDK_STORAGE_KEY_UID);
  globalThis.localStorage.removeItem(SDK_STORAGE_KEY_TOKEN);
  globalThis.localStorage.removeItem(SDK_STORAGE_KEY_REFRESH);
};

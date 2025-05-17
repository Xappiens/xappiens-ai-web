export const VERSION = {
  major: 1,
  minor: 0,
  patch: 0,
  build: 1new Date().getTime(),
  toString: () => `v${VERSION.major}.${VERSION.minor}.${VERSION.patch}`
}; 
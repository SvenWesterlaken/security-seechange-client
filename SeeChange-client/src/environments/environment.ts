// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  nodeServerUrl: 'http://localhost:3000/api/v1/',
  streamServerUrl:  'http://localhost:8000/api/streams/',
  seechangeApiUrl: 'http://localhost:8081/api/'
  // nodeServerUrl: 'http://localhost:3000/api/v1/',
  // streamServerUrl:  'http://localhost:8000/api/streams/',
  // seechangeApiUrl: 'http://localhost:8081/api/'

  nodeServerUrl: 'http://145.49.18.217:3000/api/v1/',
  streamServerUrl:  'http://145.49.18.217:8000/api/streams/',
  seechangeApiUrl: 'http://145.49.18.217:8081/api/'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

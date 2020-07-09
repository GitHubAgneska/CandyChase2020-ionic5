// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  candyListApi: 'https://world.openfoodfacts.org/cgi/search.pl?search_terms=bonbon&search_simple=1&action=process&json=1&page_size=',
  candyByIdApiUrl: 'https://world.openfoodfacts.org/api/v0/product/',
  graphicMat: 'assets/graphicMat/',

  firebaseConfig: {
    apiKey: 'AIzaSyBsz0Xdf7cJffF-WfK-r2SIgN4GE04MPNU',
    authDomain: 'candychase2020-ionic5.firebaseapp.com',
    databaseURL: 'https://candychase2020-ionic5.firebaseio.com',
    projectId: 'candychase2020-ionic5',
    storageBucket: 'candychase2020-ionic5.appspot.com',
    messagingSenderId: '743398085439'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  reproductor: [
    {
      lista: 'Lista1',
      list: ['1.mp4', '2.mp4', '3.mp4']
    },
    {
      lista: 'Lista2',
      list: ['1.mp4', '2.mp4', '3.mp4']
    },
    {
      lista: 'Lista3',
      list: ['1.mp4', '2.mp4', '3.mp4']
    }
  ],
  imagenes: ['c', 'b', 'a', 'c'],
  intevalo:10000,
  IntervaloImagen: 3000,
  rutaSrc: 'assets/video/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

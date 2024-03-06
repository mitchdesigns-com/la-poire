import createMiddleware from 'next-intl/middleware';
import { localePrefix, locales } from './navigation';
 
export default createMiddleware({
  // // A list of all locales that are supported
  // locales: ['ar', 'en'],
  // // localeDetection: false,
  // defaultLocale: 'en',
  // localePrefix: 'always'
    localeDetection: false,
    defaultLocale: 'en',
    locales,
    localePrefix
});
 
export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
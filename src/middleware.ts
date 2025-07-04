import { NextRequest } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';
import { routing } from './lib/i18n/routing';

const intlMiddleware = createIntlMiddleware(routing);

export async function middleware(request: NextRequest) {
  const response = intlMiddleware(request);
  return (response);
}

export const config = {
  matcher: [
    `/((?!api|_next|_vercel|favicon\\.ico|manifest\\.webmanifest|robots\\.txt|sitemaps/|opensearch\\.xml|assets/|.*\\.(?:json|xml|js)$).*)`,
  ],
};
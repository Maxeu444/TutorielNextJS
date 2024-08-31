/** @type {import('next').NextConfig} */
const nextConfig = {};


// next.config.mjs
export default {
    async headers() {
      return [
        {
          source: '/(.*)', // Appliquez cette règle à toutes les routes
          headers: [
            {
              key: 'Cache-Control',
              value: 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
            },
            {
              key: 'Pragma',
              value: 'no-cache',
            },
            {
              key: 'Expires',
              value: '0',
            },
          ],
        },
      ];
    },
  };
  
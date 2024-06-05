/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en', 'pt'],
        defaultLocale: 'en',
        localeDetection: true, // pode estar redirecionando automaticamente
    },
};

export default nextConfig;

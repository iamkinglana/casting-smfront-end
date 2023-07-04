import { createProxyMiddleware } from 'http-proxy-middleware';

export default {
  server: {
    middleware: {
      // proxy all requests starting with /casts to http://localhost:3000/casts
      '/casts': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
};

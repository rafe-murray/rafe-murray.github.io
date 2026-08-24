import { type RouteConfig, route, layout } from '@react-router/dev/routes';
// import Blog from './blog.md';
export default [
  // layout('./markdown.tsx', [route('/blog', Blog)]),
  layout('./pages/Layout.tsx', [
    route('/blog/*', 'BlogPage.tsx'),
    route('*?', 'catchall.tsx'),
  ]),
  // route('*?', 'catchall.tsx'),
] satisfies RouteConfig;

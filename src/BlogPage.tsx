import type { MDXComponents } from 'mdx/types'
import { a, h1, h2, h3, h4, p, ul } from './styles';
import { lazy } from 'react';
import { useParams } from 'react-router';

export default function BlogPage() {
  const params = useParams();
  const slug = params['*'] || 'index.mdx';

  const MDX = lazy(async () => {
    try {
      return await import(`../blog/${slug}.md`);
    } catch {
      return import('../404.md');
    }
  });

  const components: MDXComponents = {
    h1: (properties) => <h1 className={h1} {...properties} />,
    h2: (properties) => <h2 className={h2} {...properties} />,
    h3: (properties) => <h3 className={h3} {...properties} />,
    h4: (properties) => <h4 className={h4} {...properties} />,
    p: (properties) => <p className={p} {...properties} />,
    a: (properties) => <a className={a} {...properties} />,
    ul: (properties) => <ul className={ul} {...properties} />,
  }
  return (
    <MDX components={components} />
  )
}

import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { MarkdownDocument } from './types';
import { serialize } from 'next-mdx-remote/serialize';

export const getParsedFileContentBySlug = (
  slug: string,
  postsPath: string
): MarkdownDocument => {
  const postFilePath = join(postsPath, `${slug}.mdx`);
  const fileContents = fs.readFileSync(postFilePath);

  const { data, content } = matter(fileContents);

  return {
    frontMatter: data,
    content,
  };
};

export const renderMarkdown = (markdownContent: string) => {
  return serialize(markdownContent || '');
};

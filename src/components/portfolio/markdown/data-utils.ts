import matter from 'gray-matter';

export const getMarkdown = (filename: string) => {
    return matter.read(filename);
}
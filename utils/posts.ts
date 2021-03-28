const posts = require.context('../pages/posts/', true, /\.mdx$/);

function importAll(r: typeof posts) {
  return r
    .keys()
    .map((fileName) => {
      console.log(fileName);
      return {
      link: `/posts${fileName.substr(1).replace(/\/index\.mdx$/, '')}`,
      module: r(fileName),
    }})
}

function dateSortDesc(a: any, b: any) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

export default function getAllPosts() {
  return importAll(posts).sort((a, b) =>
    dateSortDesc(a.module.meta.date, b.module.meta.date)
  )
}
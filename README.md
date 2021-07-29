# A statically generated blog example using Next.js and Markdown

This example showcases Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using markdown files as the data source.

The blog posts are stored in `/_posts` as markdown files with front matter support. Adding a new markdown file in there will create a new blog post.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

# Todo
## Add dark mode
## Dark mode syntax highlight

## Syntax Highlighting Supported

```javascript
// Example of js
let arr = [3, 4, 5, 6];
for (let i = 0; i < arr.length; i++) {
  console.log(array[i]);
}
```
```python
arr = [3,4,5,6]
for num in arry:
  print(num)
```


## Demo

[https://blog.alexisdavalos.dev/](https://blog.alexisdavalos.dev/)

## Deployment

Deployed With [Vercel](https://vercel.com)

### Related examples


## How to use

With [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

- Install Dependencies
```bash
npm -i or npm install 
```
- Run Development server
```bash
npm run dev
```

Your blog should be up and running on [http://localhost:3000](http://localhost:3000)! If it doesn't work, post on [GitHub discussions](https://github.com/vercel/next.js/discussions).

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

# Notes

This blog-starter uses [Tailwind CSS](https://tailwindcss.com). To control the generated stylesheet's filesize, this example uses Tailwind CSS' v1.4 [`purge` option](https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css) to remove unused CSS.

# template-html-builder
This project is created to generate html files template which very useful when we are working with Server Rendering but do not use framework.

- **Lazy load module JS**: Each file HTML only contain 1 or some JS files. This has been build to auto lazy load module by config `module mapper` in `module/index.ts` and add attribute `load-module` to any element
- **Typescript**: Type mapping in JS is very important which help you reduce un-expect error while running application.
- **PostCss**: has a lot of plugins very useful. Ex: `autoprefix`
- **Tailwind**: With a ton of utilities class, which help improve css styling
- **View Engine EJS**: Support re-using template which we only need to change in one place. It will be applied to all other html files.
- **Hot Reload**: A live server which help us auto-refresh UI when we change anything in `src` folder
- **Minifier CSS, JS With Webpack**

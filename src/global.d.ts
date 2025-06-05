// Em src/global.d.ts (ou similar)

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

// Se você também usa CSS Modules com outros sufixos ou apenas .css:
declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
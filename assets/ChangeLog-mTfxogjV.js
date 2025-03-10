import{j as t}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as e}from"./index-CcnH5Kt0.js";import{ae as i,am as a}from"./index-CW4usuTM.js";import"./index-RYns6xqu.js";import"./iframe-Cpk0H_Z9.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./index-BwO1pRjM.js";import"./index-DrFu-skq.js";const r=`## V1.0.12-beta (2025/3/6)

✨ New Feature

🆙 Update

- Rename account_circle.svg to account.svg
- Update import paths and filenames in icons/index.ts
- Remove more_vert.svg
- Add toast positioning options in useToast.tsx
- Update toast positioning styles in \\_toast.scss
- Update toast positioning options in toast.stories.tsx
- Update ToastProps with position in toast.tsx
- Adjust transition time from .3s to 0.3s for accordion open and close animations in \\_accordion.scss
- Modify color value in \\_pagination.scss to use list.nth($link-default, $site)
- Comment out width property in \\_table.scss
- Add color property in \\_status_indicator.scss based on variant condition
- Update background color and text color in \\_tabs.scss :focus state
- Add responsive styling in \\_side_nav.scss
- Integrate useId() hook with dropdown.tsx and status-indicator.tsx
- Update input.tsx to use uniqueId for htmlFor attribute
- Update Table component columns width in table.stories.tsx
- Include useId() hook in status-indicator.stories.tsx and auth-flow.tsx

🪲 Bug Fix

- Improve radio.tsx logic to handle value changes based on selection
- Add useId() hook in checkbox.tsx, input.tsx, radio.tsx, textarea.tsx
`;function s(n){const o={h1:"h1",...e(),...n.components};return t.jsxs(t.Fragment,{children:[`
`,`
`,`
`,t.jsx(i,{title:"Introduction/Changelog"}),`
`,t.jsx(o.h1,{id:"changelog",children:"Changelog"}),`
`,t.jsx(a,{children:r})]})}function f(n={}){const{wrapper:o}={...e(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(s,{...n})}):s(n)}export{f as default};

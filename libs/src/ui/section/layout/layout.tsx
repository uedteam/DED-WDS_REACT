import React from 'react';

/* 組件介面參數 props */
interface LayoutProps {
  children?: React.ReactNode;
  className?: string;
}

interface LayoutComponent extends React.FC<LayoutProps> {
  Header: (props: HeaderProps) => JSX.Element;
  Footer: (props: FooterProps) => JSX.Element;
  Content: (props: ContentProps) => JSX.Element;
  Side: (props: SideProps) => JSX.Element;
}

export const Layout: LayoutComponent = (props: LayoutProps) => {
  const { children, className, ...rest } = props;

  return (
    <div className="ded-layout" {...rest}>
      {children}
    </div>
  );
};

interface HeaderProps {
  children?: React.ReactNode;
}
const header = (props: HeaderProps) => {
  const { children } = props;

  return <header className="ded-header">{children}</header>;
};

interface FooterProps {
  children?: React.ReactNode;
}
const footer = (props: FooterProps) => {
  const { children } = props;

  return <footer className="ded-footer">{children}</footer>;
};

interface ContentProps {
  children?: React.ReactNode;
}
const content = (props: ContentProps) => {
  const { children } = props;

  return <main className="ded-content">{children}</main>;
};

interface SideProps {
  children?: React.ReactNode;
}
const side = (props: SideProps) => {
  const { children } = props;
  return <aside className="ded-side">{children}</aside>;
};

Layout.Header = header;
Layout.Footer = footer;
Layout.Content = content;
Layout.Side = side;

export { header, footer, content };
export default Layout;

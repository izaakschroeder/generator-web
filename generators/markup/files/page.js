
import { createElement, Element } from 'react';

function script({ path, content, type, id }, i) : Element {
  return path ?
    <script type={type} src={path} key={i}/> :
    <script type={type} key={i} id={id} dangerouslySetInnerHTML={{
      __html: content,
    }}/>;
}

function style({ path, type, content }, i) : Element {
  return path ?
    <link rel='stylesheet' href={path} key={i}/> :
    <style type={type} key={i} dangerouslySetInnerHTML={{
      __html: content,
    }}/>;
}

/**
 * Global 'page' object used to render every page.
 * @returns {Element} Generated page.
 */
export default function Page({
  markup = '',
  scripts = [],
  styles = [],
  title = '',
  path = '/',
  locale = 'en-US',
}) : Element {
  return (
    <html lang={locale}>
      <head>
        <meta charSet='utf-8'/>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1'/>
        <meta name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1'/>
        <meta name='apple-mobile-web-app-capable' content='yes'/>

        <title>{title}</title>
        {scripts.filter(script => script.head).map(script)}
        {styles.map(style)}
      </head>
      <body data-path={path}>
        <div id='content' dangerouslySetInnerHTML={{ __html: markup }}/>
        {scripts.filter(script => !script.head).map(script)}
      </body>
    </html>
  );
}

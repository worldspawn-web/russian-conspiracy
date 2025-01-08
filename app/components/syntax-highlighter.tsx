'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  language: string;
  value: string;
}

export function CodeBlock({ language, value }: CodeBlockProps) {
  // Creating a modified theme based on vscDarkPlus
  const customStyle = {
    ...vscDarkPlus,
    'pre[class*="language-"]': {
      ...vscDarkPlus['pre[class*="language-"]'],
      background: 'transparent',
      margin: 0,
      padding: 0,
    },
    'code[class*="language-"]': {
      ...vscDarkPlus['code[class*="language-"]'],
      background: 'transparent',
    },
  };

  return (
    <div className="rounded-lg border border-green-900/20 p-4">
      <SyntaxHighlighter
        language={language}
        style={customStyle}
        customStyle={{
          background: 'transparent',
          margin: 0,
          padding: 24,
        }}
      >
        {value}
      </SyntaxHighlighter>
    </div>
  );
}

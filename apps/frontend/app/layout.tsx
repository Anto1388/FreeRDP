import './globals.css';
import Link from 'next/link';
import React from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav style={{ display: 'flex', gap: 12, padding: 12, borderBottom: '1px solid #eee' }}>
          <Link href="/">Home</Link>
          <Link href="/creator">Creator Dashboard</Link>
          <Link href="/business">Business Dashboard</Link>
          <Link href="/login">Login</Link>
        </nav>
        <main style={{ padding: 16 }}>{children}</main>
      </body>
    </html>
  );
}

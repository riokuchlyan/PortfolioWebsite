'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  color: string;
}

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export default function BlogModal({ post, onClose }: BlogModalProps) {
  const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchContent = useCallback(async (slug: string) => {
    setIsLoading(true);
    setError(null);
    setMdxSource(null);

    try {
      const res = await fetch(`/api/blog/${slug}`);
      if (!res.ok) throw new Error('Failed to load post');
      const data = await res.json();
      const serialized = await serialize(data.content);
      setMdxSource(serialized);
    } catch {
      setError('Could not load this blog post.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (post) {
      fetchContent(post.slug);
    } else {
      setMdxSource(null);
      setError(null);
    }
  }, [post, fetchContent]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (post) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [post, onClose]);

  if (!post) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-background border border-border rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="sticky top-4 float-right mr-4 mt-4 text-muted hover:text-foreground transition-colors bg-background/80 backdrop-blur-sm rounded-full p-2 z-10"
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {/* Header */}
        <div className="px-8 pt-8 pb-4">
          <span className="text-xs text-muted font-mono">{post.date}</span>
          <h2 className="text-2xl font-bold text-foreground mt-2 mb-1">{post.title}</h2>
          <p className="text-sm text-muted">{post.excerpt}</p>
          <div className="border-b border-border mt-6"></div>
        </div>

        {/* Content */}
        <div className="px-8 pb-8">
          {isLoading && (
            <div className="flex items-center justify-center py-16">
              <div className="w-6 h-6 border-2 border-border border-t-foreground rounded-full animate-spin"></div>
            </div>
          )}
          {error && (
            <p className="text-center text-muted py-16">{error}</p>
          )}
          {mdxSource && (
            <div className="blog-content">
              <MDXRemote {...mdxSource} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

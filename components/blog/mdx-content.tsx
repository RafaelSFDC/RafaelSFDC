import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";
import {
  Info,
  Lightbulb,
  AlertTriangle,
  Flame,
  AlertCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import remarkGfm from "remark-gfm";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Import new rich content components
import { Callout } from "@/components/blog/content/Callout";
import { Stats } from "@/components/blog/content/Stats";
import { Quote } from "@/components/blog/content/Quote";
import { CodeBlock } from "@/components/blog/content/CodeBlock";
import { ImageWithCaption } from "@/components/blog/content/ImageWithCaption";
import { VideoEmbed } from "@/components/blog/content/VideoEmbed";
import { ComparisonTable } from "@/components/blog/content/ComparisonTable";
import {
  BlogBarChart,
  BlogLineChart,
  BlogPieChart,
} from "@/components/blog/content/Charts";

// Import conversion components
import { InlineCTA } from "@/components/blog/conversion/InlineCTA";
import { NewsletterBox } from "@/components/blog/conversion/NewsletterBox";
import { ResourceCard } from "@/components/blog/conversion/ResourceCard";
import { Formula } from "@/components/blog/content/Formula";
import { LottieAnimation } from "@/components/blog/content/LottieAnimation";
import { BlogIcon } from "@/components/blog/content/BlogIcon";
import { Step } from "@/components/blog/content/Step";
import { Highlight } from "@/components/blog/content/Highlight";
import { FAQSection } from "@/components/blog/content/FAQSection";

// Helper function to check for GFM alerts, adapted for MDX structure
function getAlertProps(children: React.ReactNode): {
  type: "note" | "tip" | "important" | "warning" | "caution";
  content: React.ReactNode;
} | null {
  const childrenArray = React.Children.toArray(children);
  if (childrenArray.length === 0) return null;

  // Search for the marker in the deep content
  let alertType: string | null = null;
  let firstTextNode: string | null = null;
  let pIndex = -1;

  for (let i = 0; i < childrenArray.length; i++) {
    const child = childrenArray[i];
    if (React.isValidElement(child)) {
      const subChildren = React.Children.toArray((child.props as any).children);
      if (typeof subChildren[0] === "string") {
        const match = subChildren[0].match(
          /^\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\](?:\s*>\s*|\s*)/i,
        );
        if (match) {
          alertType = match[1];
          firstTextNode = subChildren[0];
          pIndex = i;
          break;
        }
      }
    } else if (typeof child === "string") {
      const match = child.match(
        /^\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\](?:\s*>\s*|\s*)/i,
      );
      if (match) {
        alertType = match[1];
        firstTextNode = child;
        pIndex = i;
        break;
      }
    }
  }

  if (!alertType || pIndex === -1 || firstTextNode === null) return null;

  const type = alertType.toLowerCase() as any;
  const match = firstTextNode.match(
    /^\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\](?:\s*>\s*|\s*)/i,
  )!;
  const remaining = firstTextNode.slice(match[0].length);

  const reconstructP = (child: any) => {
    if (typeof child === "string") return remaining;
    const subChildren = React.Children.toArray(child.props.children);
    const newSubChildren = remaining
      ? [remaining, ...subChildren.slice(1)]
      : subChildren.slice(1);
    return React.cloneElement(child, {
      children: newSubChildren,
      className: cn(child.props.className, "my-0!"),
    });
  };

  const newChildren = [...childrenArray];
  newChildren[pIndex] = reconstructP(childrenArray[pIndex]);

  return { type, content: newChildren };
}

const components = {
  // Rich content components
  Callout,
  Stats,
  Quote,
  CodeBlock,
  ImageWithCaption,
  VideoEmbed,
  ComparisonTable,
  Lottie: LottieAnimation,
  Icon: BlogIcon,
  Step,
  Highlight,
  Mark: Highlight,

  // Charts
  BarChart: BlogBarChart,
  LineChart: BlogLineChart,
  PieChart: BlogPieChart,

  // Conversion components
  InlineCTA,
  NewsletterBox,
  ResourceCard,
  Formula,
  FAQSection,
  WebStory: () => null,
  StoryPage: () => null,

  // UI components
  Button,

  // Enhanced HTML elements
  h1: (props: any) => (
    <h1
      id={props.children
        ?.toString()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]/g, "")}
      className="mt-12 mb-6 text-4xl font-bold tracking-tight md:text-5xl scroll-mt-20"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      id={props.children
        ?.toString()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]/g, "")}
      className="mt-10 mb-4 text-3xl font-bold tracking-tight md:text-4xl border-b pb-3 scroll-mt-20"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      id={props.children
        ?.toString()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]/g, "")}
      className="mt-8 mb-3 text-2xl font-bold tracking-tight md:text-3xl scroll-mt-20"
      {...props}
    />
  ),
  h4: (props: any) => (
    <h4
      className="mt-6 mb-2 text-xl font-bold tracking-tight md:text-2xl"
      {...props}
    />
  ),
  p: (props: any) => (
    <p className="mb-6 leading-relaxed text-lg text-foreground/90" {...props} />
  ),
  ul: (props: any) => (
    <ul
      className="mb-6 ml-6 list-disc space-y-2 text-lg text-foreground/90 marker:text-primary"
      {...props}
    />
  ),
  ol: (props: any) => (
    <ol
      className="mb-6 ml-6 list-decimal space-y-2 text-lg text-foreground/90 marker:text-primary marker:font-semibold"
      {...props}
    />
  ),
  li: (props: any) => <li className="pl-2" {...props} />,
  blockquote: (props: any) => {
    const alert = getAlertProps(props.children);

    if (alert) {
      const { type, content } = alert;
      const config = {
        note: {
          icon: Info,
          styles:
            "border-blue-500! bg-blue-500/10! text-blue-900! dark:text-blue-100!",
          iconStyles: "text-blue-600 dark:text-blue-400",
        },
        tip: {
          icon: Lightbulb,
          styles:
            "border-emerald-500! bg-emerald-500/10! text-emerald-900! dark:text-emerald-100!",
          iconStyles: "text-emerald-600 dark:text-emerald-400",
        },
        important: {
          icon: Flame,
          styles:
            "border-purple-500! bg-purple-500/10! text-purple-900! dark:text-purple-100!",
          iconStyles: "text-purple-600 dark:text-purple-400",
        },
        warning: {
          icon: AlertTriangle,
          styles:
            "border-amber-500! bg-amber-500/10! text-amber-900! dark:text-amber-100!",
          iconStyles: "text-amber-600 dark:text-amber-400",
        },
        caution: {
          icon: AlertCircle,
          styles:
            "border-red-500! bg-red-500/10! text-red-900! dark:text-red-100!",
          iconStyles: "text-red-600 dark:text-red-400",
        },
      };

      const { icon: Icon, styles, iconStyles } = config[type] || config.note;

      return (
        <div
          className={cn(
            "relative my-8 overflow-hidden rounded-r-xl border-l-[6px] p-6 shadow-sm flex items-start gap-4 transition-all hover:shadow-md",
            styles,
          )}
        >
          <div className={cn("shrink-0 pt-1", iconStyles)}>
            <Icon className="h-6 w-6" />
          </div>
          <div className="text-lg! leading-relaxed! flex-1 prose-p:my-0! prose-p:leading-relaxed!">
            {content}
          </div>
        </div>
      );
    }

    return (
      <blockquote
        className="mb-8 border-l-4 border-primary pl-6 italic text-foreground/80 bg-muted/50 py-4 rounded-r-lg prose-p:before:content-none prose-p:after:content-none"
        {...props}
      />
    );
  },
  hr: (props: any) => <hr className="my-10 border-border" {...props} />,
  a: (props: any) => (
    <a
      className="font-medium text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
      {...props}
    />
  ),
  img: (props: any) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="my-8 rounded-xl border bg-muted shadow-lg transition-shadow hover:shadow-xl"
      alt={props.alt}
      {...props}
    />
  ),
  code: (props: any) => {
    const { className, children, ...rest } = props;
    const isInline = !className?.includes("language-");

    if (isInline) {
      return (
        <code
          className="relative rounded bg-muted px-[0.4rem] py-1 font-mono text-sm font-semibold text-primary border border-primary/20"
          {...rest}
        >
          {children}
        </code>
      );
    }

    return (
      <div className="relative my-6 overflow-hidden rounded-xl bg-zinc-950 p-4 shadow-lg dark:bg-zinc-900 border border-border/10">
        <code
          className="relative block font-mono text-sm text-gray-50 overflow-x-auto"
          {...rest}
        >
          {children}
        </code>
      </div>
    );
  },
  table: (props: any) => (
    <div className="my-8 rounded border bg-background/50 overflow-hidden shadow-sm">
      <Table className="w-full text-sm m-0!" {...props} />
    </div>
  ),
  thead: (props: any) => <TableHeader {...props} />,
  tbody: (props: any) => <TableBody {...props} />,
  tr: (props: any) => <TableRow {...props} />,
  th: (props: any) => <TableHead {...props} />,
  td: (props: any) => <TableCell {...props} />,
};

interface MDXContentProps {
  source: string;
}

export function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none">
      <MDXRemote
        source={source}
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [
              // @ts-ignore - vercel/next.js issue with types
              remarkGfm,
            ],
          },
        }}
      />
    </div>
  );
}

"use client";

import { useState } from "react";
import { Search, Eye } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Post } from "@/lib/blog";
import { formatDate } from "@/lib/utils";

interface BlogsListProps {
  allPosts: Partial<Post>[];
  initialFeaturedPost: Partial<Post> | undefined;
  initialRegularPosts: Partial<Post>[];
}

export function BlogsList({
  allPosts,
  initialFeaturedPost,
  initialRegularPosts,
}: BlogsListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  // Get unique categories from all posts
  const categories = [
    "Todos",
    ...Array.from(
      new Set(
        allPosts
          .map((post) => post.category)
          .filter((category): category is string => !!category)
      )
    ).sort(),
  ];

  const activePosts =
    searchQuery || selectedCategory !== "Todos"
      ? allPosts
      : initialRegularPosts;

  const filteredPosts = activePosts.filter((post) => {
    const matchesSearch =
      post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "Todos" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const showFeatured =
    !searchQuery && selectedCategory === "Todos" && initialFeaturedPost;

  return (
    <div className="space-y-8">
      {/* Search and Filter */}
      <div className="space-y-4">
        <div className="relative max-w-xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            placeholder="Buscar por tema, artigo ou tutorial..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <Tabs
          value={selectedCategory}
          onValueChange={setSelectedCategory}
          className="w-full"
        >
          <TabsList className="w-full justify-start overflow-x-auto h-auto p-1 bg-transparent gap-2">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="rounded-full border border-transparent data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:border-primary/20 hover:bg-muted"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Featured Post */}
      {showFeatured && (
        <Link href={`/blog/${initialFeaturedPost.slug}`}>
          <Card className="overflow-hidden border-primary/20 hover:border-primary/40 transition-all cursor-pointer group hover:shadow-lg py-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img
                  alt={initialFeaturedPost.title}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  src={initialFeaturedPost.coverImage}
                />
                <div className="absolute top-6 left-6">
                  <Badge className="bg-primary/90 backdrop-blur text-white hover:bg-primary border-none shadow-sm">
                    Destaque
                  </Badge>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4 text-xs font-medium text-muted-foreground">
                  <span className="text-primary">
                    {initialFeaturedPost.category}
                  </span>
                  <span>•</span>
                  <span>
                    {initialFeaturedPost.date &&
                      formatDate(initialFeaturedPost.date)}
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                  {initialFeaturedPost.title}
                </h3>
                <p className="text-muted-foreground mb-8 text-base leading-relaxed line-clamp-3">
                  {initialFeaturedPost.excerpt}
                </p>
                <div className="flex items-center gap-3">
                  <Avatar className="border-2 border-background shadow-sm">
                    <AvatarImage src={initialFeaturedPost.author?.picture} />
                    <AvatarFallback>
                      {initialFeaturedPost.author?.name?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-sm">
                    <p className="font-semibold">
                      {initialFeaturedPost.author?.name}
                    </p>
                    <p className="text-muted-foreground">
                      {initialFeaturedPost.author?.bio?.substring(0, 50)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Link>
      )}

      {/* Posts Grid */}
      <div>
        <div className="flex items-end justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Posts Recentes</h3>
            <p className="text-muted-foreground">
              Conteúdos práticos para seu negócio.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="flex py-0 flex-col group h-full hover:shadow-lg transition-all cursor-pointer overflow-hidden border-transparent hover:border-primary/20 bg-card hover:bg-accent/5">
                <div className="relative h-56 overflow-hidden rounded-t-xl ">
                  <img
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    src={post.coverImage}
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardHeader className="flex-1 flex flex-col p-6">
                  <div className="flex items-center gap-2 mb-3 text-xs font-medium text-primary">
                    <span>{post.category}</span>
                  </div>
                  <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm mt-3 line-clamp-3 flex-1">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div className="pt-4 border-t flex items-center justify-between text-xs text-muted-foreground">
                    <span>{post.date && formatDate(post.date)}</span>
                    <span className="flex items-center gap-1">
                      <Eye className="size-3" />
                      {Math.floor(Math.random() * 3000) + 1000}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <Card className="p-12 text-center border-dashed">
            <div className="flex justify-center mb-4">
              <div className="bg-muted p-4 rounded-full">
                <Search className="size-8 text-muted-foreground" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Nenhum post encontrado
            </h3>
            <p className="text-muted-foreground max-w-sm mx-auto">
              Não encontramos nenhum post com os filtros atuais. Tente buscar
              por outros termos ou categorias.
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}

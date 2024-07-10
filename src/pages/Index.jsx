import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    date: "2024-03-15",
    author: "John Doe",
    excerpt: "Learn the basics of React and start building your first component-based application.",
  },
  {
    id: 2,
    title: "Advanced CSS Techniques",
    date: "2024-03-10",
    author: "Jane Smith",
    excerpt: "Discover powerful CSS techniques to create stunning and responsive layouts.",
  },
  {
    id: 3,
    title: "JavaScript ES6+ Features",
    date: "2024-03-05",
    author: "Mike Johnson",
    excerpt: "Explore the latest features in JavaScript and how they can improve your code.",
  },
];

const Index = () => {
  return (
    <div className="space-y-8">
      <LatestPost post={blogPosts[0]} />
      <Separator />
      <RecentPosts posts={blogPosts.slice(1)} />
    </div>
  );
};

const LatestPost = ({ post }) => (
  <Card>
    <CardHeader>
      <CardTitle>{post.title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground mb-2">
        {post.date} | By {post.author}
      </p>
      <p>{post.excerpt}</p>
    </CardContent>
    <CardFooter>
      <Button>Read More</Button>
    </CardFooter>
  </Card>
);

const RecentPosts = ({ posts }) => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
    <div className="space-y-4">
      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <CardTitle className="text-lg">{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              {post.date} | By {post.author}
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline">Read More</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  </div>
);

export default Index;
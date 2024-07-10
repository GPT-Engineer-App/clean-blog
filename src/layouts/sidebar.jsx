import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu, Package2 } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { navItems } from "../App";

const Layout = () => {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr_280px]">
      <Sidebar />
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-6 lg:h-[60px]">
          <MobileSidebar />
          <div className="w-full flex-1">
            <nav className="hidden md:flex md:items-center md:gap-6 text-lg font-medium">
              {navItems.map((item) => (
                <NavItem key={item.to} to={item.to}>
                  {item.title}
                </NavItem>
              ))}
            </nav>
          </div>
        </header>
        <main className="flex-grow p-6 overflow-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
      <RightSidebar />
    </div>
  );
};

const Sidebar = () => (
  <div className="hidden border-r bg-muted/40 lg:block">
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-[60px] items-center border-b px-6">
        <NavLink to="/" className="flex items-center gap-2 font-semibold">
          <Package2 className="h-6 w-6" />
          <span>My Blog</span>
        </NavLink>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-4 text-sm font-medium">
          {navItems.map((item) => (
            <NavItem key={item.to} to={item.to}>
              {item.icon}
              {item.title}
            </NavItem>
          ))}
        </nav>
      </div>
    </div>
  </div>
);

const MobileSidebar = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon" className="shrink-0 lg:hidden">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left" className="flex flex-col">
      <nav className="grid gap-2 text-lg font-medium">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-semibold mb-4"
        >
          <Package2 className="h-6 w-6" />
          <span>My Blog</span>
        </NavLink>
        {navItems.map((item) => (
          <NavItem key={item.to} to={item.to}>
            {item.icon}
            {item.title}
          </NavItem>
        ))}
      </nav>
    </SheetContent>
  </Sheet>
);

const RightSidebar = () => (
  <div className="hidden border-l bg-muted/40 lg:block p-6">
    <div className="flex flex-col gap-6">
      <AboutMe />
      <Categories />
      <Tags />
    </div>
  </div>
);

const AboutMe = () => (
  <div>
    <h3 className="font-semibold mb-2">About Me</h3>
    <img src="/placeholder.svg" alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-2" />
    <p className="text-sm">A passionate blogger sharing thoughts and ideas.</p>
  </div>
);

const Categories = () => (
  <div>
    <h3 className="font-semibold mb-2">Categories</h3>
    <ul className="text-sm">
      <li><a href="#" className="hover:underline">Technology</a></li>
      <li><a href="#" className="hover:underline">Lifestyle</a></li>
      <li><a href="#" className="hover:underline">Travel</a></li>
    </ul>
  </div>
);

const Tags = () => (
  <div>
    <h3 className="font-semibold mb-2">Tags</h3>
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" size="sm">React</Button>
      <Button variant="outline" size="sm">JavaScript</Button>
      <Button variant="outline" size="sm">Web Dev</Button>
    </div>
  </div>
);

const Footer = () => (
  <footer className="border-t py-4 px-6">
    <div className="flex justify-between items-center">
      <p className="text-sm">&copy; 2024 My Blog. All rights reserved.</p>
      <div className="flex gap-4">
        <a href="#" className="text-muted-foreground hover:text-foreground">Twitter</a>
        <a href="#" className="text-muted-foreground hover:text-foreground">GitHub</a>
        <a href="#" className="text-muted-foreground hover:text-foreground">LinkedIn</a>
      </div>
    </div>
  </footer>
);

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
        isActive ? "text-primary bg-muted" : "text-muted-foreground"
      )
    }
  >
    {children}
  </NavLink>
);

export default Layout;
export default function Footer() {
  return (
    <footer className="py-16 px-6 md:px-12 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-editorial text-xl text-foreground tracking-wider">FACES101</p>
        <p className="text-ui text-muted-foreground">
          © {new Date().getFullYear()} Faces101. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

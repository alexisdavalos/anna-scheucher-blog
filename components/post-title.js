export default function PostTitle({ children }) {
  return (
    <h1 className="text-left text-3xl sm:text-3xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none mb-12 md:text-left">
      {children}
    </h1>
  );
}

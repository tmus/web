export function Header() {
  return (
    <header className="text-gray-700 dark:text-white py-16">
      <h1 className="text-2xl font-semibold mb-2">Thomas Smith</h1>
      <h2 className="text-xl mb-2">Software Engineer</h2>
      <nav>
        <li className="list-none">
          <a
            className="hover:text-purple-600 transition-colors duration-100"
            href="https://twitter.com/_tmus"
          >
            Twitter {"->"}
          </a>
        </li>
      </nav>
    </header>
  );
}

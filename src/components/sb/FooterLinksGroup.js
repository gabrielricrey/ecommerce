export default function FooterLinksGroup({ blok }) {
  return (
    <div className="flex-1 md:px-4">
      <h3 className="font-bold mb-4 text-center md:text-start">{blok.title}</h3>
      <div className="flex flex-col items-center md:items-start">
        {blok.links.map((link, i) => (
          <a key={i} className="mb-2 text-sm cursor-not-allowed">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}

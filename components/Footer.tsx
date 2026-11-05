export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-page flex-col items-center justify-between gap-4 text-xs text-mute sm:flex-row">
        <p>© {new Date().getFullYear()} Plaquinhas NFC</p>
        <p>
          Um projeto de{' '}
          <a href="https://www.instagram.com/cavalcanti.dev/" target="_blank" rel="noopener noreferrer" className="text-paper hover:underline">
            @cavalcanti.dev
          </a>
        </p>
      </div>
    </footer>
  );
}

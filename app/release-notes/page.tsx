export default function ReleaseNotesPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-4xl font-bold mb-4 text-white">Release Notes</h1>
      <p className="text-lg text-gray-300 mb-2">
        Our release notes will be available soon.
      </p>
      <p className="text-sm text-gray-400">
        We're preparing detailed information about our latest updates and
        features.
      </p>
      <div className="mt-6 border-t border-gray-800 pt-4 w-64 text-center">
        <p className="text-xs text-gray-500">Check back for updates</p>
      </div>
    </div>
  );
}

export default function Loading() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 rounded-full border-4 border-brand-100" />
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-brand-600 border-t-transparent" />
        </div>
        <p className="text-sm font-medium text-slate-500">Loading Ilm Sync...</p>
      </div>
    </div>
  );
}

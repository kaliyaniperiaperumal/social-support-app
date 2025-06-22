"use client";
export default function FullPageLoader() {
  return (
    <div className="fixed inset-0 z-50 bg-black/70 bg-opacity-40 flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-white border-t-blue-500 rounded-full animate-spin" />
    </div>
  );
}
export const getAssetUrl = (path: string): string => {
  const basePath = import.meta.env.VITE_BASE_PATH || '/';
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${basePath}${cleanPath}`;
};

export function getApiUrl() {
  const url = process.env.NEXT_PUBLIC_LOCAL_API;
  return `${url}`;
}

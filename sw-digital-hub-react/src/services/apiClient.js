const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

export async function apiRequest(path, options = {}) {
  if (!API_BASE_URL) {
    return Promise.resolve({ ok: true, data: null, message: 'API base URL is not configured yet.' });
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    ...options
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(data?.message || 'Request failed');
  }

  return data;
}

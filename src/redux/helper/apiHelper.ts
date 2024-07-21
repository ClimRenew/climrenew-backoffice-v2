interface ApiOptions extends RequestInit {
    headers?: Record<string, string>;
  }
  
  let isRedirecting = false;
  
  export async function apiRequest<T>(url: string, options: ApiOptions = {}): Promise<T> {
    const token = localStorage.getItem("token");
  
    const defaultHeaders: Record<string, string> = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...options.headers,
    };
  
    const defaultOptions: ApiOptions = {
      ...options,
      headers: defaultHeaders,
    };
  
  
    const response = await fetch(url, defaultOptions);
  
    if (!response.ok) {
      if (response.status === 401) {
        if (!isRedirecting) {
          isRedirecting = true;
          window.location.href = "/";
        }
        throw new Error("Session expired. Redirecting to login page.");
      }
  
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to fetch data");
    }
  
    return response.json();
  }
  
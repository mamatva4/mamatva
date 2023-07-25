const API_DOMAIN = "https://gnews.io/api/v4/top-headlines?country="
const API_SEARCH_DOMAIN = "https://gnews.io/api/v4/search?q="
const API_KEY = "4df6328c08f6cc29ce3c260b8412bd86"
export const endpointPath = (country, category) => `${API_DOMAIN}${country}&category=${category}&apikey=${API_KEY}`;
export const endpointSearch = (searchQuery) => `${API_SEARCH_DOMAIN}${searchQuery}&apikey=${API_KEY}`;




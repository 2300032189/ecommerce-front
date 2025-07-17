import { useState, useEffect } from 'react';
import { Search, RefreshCw, ExternalLink, Menu, X } from 'lucide-react';

export default function NewsAggregator() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const categories = [
    'general', 'business', 'entertainment', 'health', 
    'science', 'sports', 'technology'
  ];

  useEffect(() => {
    if (category !== 'search' || (category === 'search' && searchQuery)) {
      fetchNews();
    }
  }, [category]);

  const API_KEY = 'd02c994c62564f61853ade2d7c62dde8';
  
  const fetchNews = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Using a proxy to avoid CORS issues with the NewsAPI in browser environments
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      let apiUrl;
      
      if (category === 'search') {
        apiUrl = `https://newsapi.org/v2/everything?q=${encodeURIComponent(searchQuery)}&apiKey=${API_KEY}&pageSize=12`;
      } else {
        apiUrl = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${API_KEY}&pageSize=12&language=en`;
      }
      
      // For demonstration purposes, let's use mock data instead of making API calls
      // since NewsAPI restricts direct browser requests from production domains
      console.log(`Would fetch from: ${apiUrl}`);
      
      // Simulating API response with mock data based on category
      const mockData = getMockDataForCategory(category, searchQuery);
      setArticles(mockData);
    } catch (err) {
      setError('Failed to fetch news. Please try again later.');
      console.error('Error fetching news:', err);
    } finally {
      setLoading(false);
    }
  };
  
  // Function to generate realistic mock data based on category
  const getMockDataForCategory = (category, query = '') => {
    const baseArticles = [
      {
        title: `Latest ${category.charAt(0).toUpperCase() + category.slice(1)} News: Major Developments`,
        description: `Breaking developments in the ${category} sector are making waves as experts analyze the implications.`,
        urlToImage: `/api/placeholder/600/400`,
        publishedAt: new Date().toISOString(),
        source: { name: 'Global News Network' },
        url: 'https://example.com/news/article1'
      },
      {
        title: `${category.charAt(0).toUpperCase() + category.slice(1)} Report: Analysis of Current Trends`,
        description: `An in-depth look at the latest trends in ${category} and what they mean for the industry's future.`,
        urlToImage: `/api/placeholder/600/400`,
        publishedAt: new Date(Date.now() - 86400000).toISOString(),
        source: { name: 'Industry Insights' },
        url: 'https://example.com/news/article2'
      },
      {
        title: `New Research in ${category.charAt(0).toUpperCase() + category.slice(1)} Field Changes Perspectives`,
        description: `Revolutionary research has emerged from leading institutions that may transform how we understand ${category}.`,
        urlToImage: `/api/placeholder/600/400`,
        publishedAt: new Date(Date.now() - 172800000).toISOString(),
        source: { name: 'Science Today' },
        url: 'https://example.com/news/article3'
      },
      {
        title: `International Cooperation on ${category.charAt(0).toUpperCase() + category.slice(1)} Issues`,
        description: `Countries around the world are joining forces to address pressing challenges in the ${category} domain.`,
        urlToImage: `/api/placeholder/600/400`,
        publishedAt: new Date(Date.now() - 259200000).toISOString(),
        source: { name: 'World Affairs' },
        url: 'https://example.com/news/article4'
      },
      {
        title: `Innovation Awards Recognize Breakthrough ${category.charAt(0).toUpperCase() + category.slice(1)} Solutions`,
        description: `The annual innovation summit highlighted exceptional achievements in ${category} technology and implementation.`,
        urlToImage: `/api/placeholder/600/400`,
        publishedAt: new Date(Date.now() - 345600000).toISOString(),
        source: { name: 'Tech Horizons' },
        url: 'https://example.com/news/article5'
      },
      {
        title: `${category.charAt(0).toUpperCase() + category.slice(1)} Leaders Convene for Strategic Summit`,
        description: `Top figures in the ${category} industry gathered to discuss future directions and collaborative opportunities.`,
        urlToImage: `/api/placeholder/600/400`,
        publishedAt: new Date(Date.now() - 432000000).toISOString(),
        source: { name: 'Business Daily' },
        url: 'https://example.com/news/article6'
      },
      {
        title: `Consumer Trends: How ${category.charAt(0).toUpperCase() + category.slice(1)} is Changing`,
        description: `New data reveals shifting consumer behaviors and preferences in the ${category} marketplace.`,
        urlToImage: `/api/placeholder/600/400`,
        publishedAt: new Date(Date.now() - 518400000).toISOString(),
        source: { name: 'Market Watch' },
        url: 'https://example.com/news/article7'
      },
      {
        title: `${category.charAt(0).toUpperCase() + category.slice(1)} Education Initiative Launches Nationwide`,
        description: `A major educational program aims to increase literacy and skills in ${category} across schools and universities.`,
        urlToImage: `/api/placeholder/600/400`,
        publishedAt: new Date(Date.now() - 604800000).toISOString(),
        source: { name: 'Education Times' },
        url: 'https://example.com/news/article8'
      },
      {
        title: `Economic Impact of ${category.charAt(0).toUpperCase() + category.slice(1)} Growth Analyzed`,
        description: `Economists evaluate the significant economic contributions of the expanding ${category} sector.`,
        urlToImage: `/api/placeholder/600/400`,
        publishedAt: new Date(Date.now() - 691200000).toISOString(),
        source: { name: 'Financial Review' },
        url: 'https://example.com/news/article9'
      },
      {
        title: `${category.charAt(0).toUpperCase() + category.slice(1)} Security Concerns Addressed in New Guidelines`,
        description: `Updated security protocols have been released to protect sensitive aspects of ${category} operations.`,
        urlToImage: `/api/placeholder/600/400`,
        publishedAt: new Date(Date.now() - 777600000).toISOString(),
        source: { name: 'Security Journal' },
        url: 'https://example.com/news/article10'
      },
      {
        title: `The Future of ${category.charAt(0).toUpperCase() + category.slice(1)}: Expert Predictions`,
        description: `Leading specialists share their forecasts for how ${category} will evolve over the next decade.`,
        urlToImage: `/api/placeholder/600/400`,
        publishedAt: new Date(Date.now() - 864000000).toISOString(),
        source: { name: 'Future Vision' },
        url: 'https://example.com/news/article11'
      },
      {
        title: `${category.charAt(0).toUpperCase() + category.slice(1)} Accessibility Improves with New Technology`,
        description: `Innovative technologies are making ${category} more accessible to diverse populations worldwide.`,
        urlToImage: `/api/placeholder/600/400`,
        publishedAt: new Date(Date.now() - 950400000).toISOString(),
        source: { name: 'Tech Access' },
        url: 'https://example.com/news/article12'
      }
    ];
    
    // If category is search and query exists, filter mock data
    if (category === 'search' && query) {
      return baseArticles.map(article => ({
        ...article,
        title: `${query}: ${article.title}`,
        description: `Results for "${query}": ${article.description}`
      }));
    }
    
    // Add category-specific variations
    return baseArticles.map(article => {
      // Generate different image placeholders
      const imageId = Math.floor(Math.random() * 1000);
      return {
        ...article,
        urlToImage: `/api/placeholder/600/400?text=${category}&id=${imageId}`
      };
    });
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setCategory('search');
      fetchNews();
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold mr-2">NewsHub</h1>
              <span className="bg-yellow-400 text-blue-900 px-2 py-1 rounded-md text-xs font-semibold">LIVE</span>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {/* Desktop navigation */}
            <nav className="hidden md:flex space-x-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    category === cat
                      ? 'bg-white text-blue-700'
                      : 'text-white hover:bg-blue-500'
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </nav>
          </div>
          
          {/* Mobile navigation */}
          {mobileMenuOpen && (
            <nav className="mt-4 md:hidden flex flex-col space-y-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setCategory(cat);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    category === cat
                      ? 'bg-white text-blue-700'
                      : 'text-white hover:bg-blue-500'
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </nav>
          )}
          
          {/* Search bar */}
          <div className="mt-4 flex">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for news..."
              className="flex-grow px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSearch();
                }
              }}
            />
            <button
              onClick={handleSearch}
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-4 py-2 rounded-r-md transition-colors flex items-center"
            >
              <Search size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800 capitalize">
            {category === 'search' ? `Search Results for "${searchQuery}"` : `${category} News`}
          </h2>
          <button
            onClick={fetchNews}
            className="flex items-center bg-blue-100 hover:bg-blue-200 text-blue-800 px-3 py-1 rounded transition-colors"
          >
            <RefreshCw size={16} className="mr-1" /> Refresh
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded">
            <p>{error}</p>
          </div>
        ) : articles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No articles found. Try a different search or category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                src={article.urlToImage.startsWith('http') ? article.urlToImage : `/api/placeholder/600/400`}
                alt={article.title}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `/api/placeholder/600/400`;
                }}
              />
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {article.source.name}
                    </span>
                    <span className="text-xs text-gray-500">
                      {formatDate(article.publishedAt)}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">{article.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.description}</p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    Read full story <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="font-bold text-xl">NewsHub</h2>
              <p className="text-gray-400 text-sm">Your daily source for trusted news</p>
            </div>
            <div className="text-sm text-gray-400">
              <p>© {new Date().getFullYear()} NewsHub. All rights reserved.</p>
              <p>Powered by React</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
# Research: Book Content Embeddings and Vector Database Storage

**Feature**: `002-book-embeddings-vector-db` | **Date**: 2025-12-25 | **Plan**: [plan.md](./plan.md)

## Technical Research Summary

### Cohere Embedding Models
- **Recommended Model**: embed-english-v3.0 for English content
- **Dimensions**: 1024 (default), configurable to 512, 256, 128
- **Max Tokens**: 512 tokens per request
- **API Rate Limits**: Varies by account type, typically 1000 RPM for production accounts
- **Pricing**: Pay-per-token usage, approximately $0.10/M tokens for English models

### Qdrant Cloud Free Tier Specifications
- **Storage**: 1GB vector storage
- **Vectors**: Up to 1M vectors
- **Requests**: 1M requests per month
- **Collections**: Up to 5 collections
- **Performance**: Shared resources with performance guarantees

### Content Extraction Considerations
- **Docusaurus Structure**: Content is in markdown converted to HTML with predictable class names
- **Recommended Approach**: Use requests for fetching + beautifulsoup4 for parsing
- **Target Elements**: Main content area (typically `.markdown` or similar classes)
- **Metadata Extraction**: Page titles, URLs, and hierarchy information

### Content Chunking Strategy
- **Optimal Chunk Size**: 512-1024 tokens (approximately 300-600 words)
- **Overlap**: 20-25% overlap to maintain context across chunks
- **Hierarchy Preservation**: Include section information in metadata
- **Minimizing Splitting**: Keep code blocks and lists intact when possible

### Python Dependencies Analysis
- **uv**: Modern Python package manager, faster than pip
- **requests**: HTTP library for fetching content from URLs
- **beautifulsoup4**: HTML parsing for content extraction
- **cohere**: Official Cohere Python client library
- **qdrant-client**: Official Qdrant Python client library
- **python-dotenv**: Environment variable management

### Potential Challenges
1. **Dynamic Content**: Some Docusaurus sites may have JavaScript-rendered content
   - Solution: If needed, consider Playwright or Selenium as fallback

2. **Large Content Volume**: Qdrant Free Tier may limit total storage
   - Solution: Implement batch processing with monitoring

3. **API Costs**: Cohere usage costs may add up with large content volumes
   - Solution: Implement cost monitoring and budget alerts

## Recommended Implementation Approach

### Main Pipeline Flow
1. **URL Discovery**: Identify all book page URLs from deployed site
2. **Content Fetching**: Fetch each page and extract main content
3. **Content Processing**: Chunk content while preserving context
4. **Embedding Generation**: Generate embeddings using Cohere API
5. **Vector Storage**: Store embeddings in Qdrant with metadata
6. **Validation**: Test retrieval functionality with sample queries

### Error Handling Strategy
- **Retry Logic**: Exponential backoff for API calls and network requests
- **Graceful Degradation**: Continue processing when individual pages fail
- **Comprehensive Logging**: Track success/failure for each content chunk
- **Rate Limit Management**: Respect API rate limits with adaptive delays

## Architecture Considerations

### Data Flow
```
URLs → Content Fetcher → Content Processor → Embedding Generator → Vector Store
```

### Configuration Management
- Store API keys and connection details in environment variables
- Use configuration files for processing parameters (chunk size, etc.)
- Implement configuration validation at startup

### Testing Strategy
- Unit tests for each component
- Integration tests for pipeline components
- End-to-end tests for complete workflow
- Mock tests for external API calls
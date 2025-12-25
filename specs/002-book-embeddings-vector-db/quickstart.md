# Quickstart Guide: Book Content Embeddings and Vector Database Storage

**Feature**: `002-book-embeddings-vector-db` | **Date**: 2025-12-25 | **Plan**: [plan.md](./plan.md)

## Prerequisites

### System Requirements
- Python 3.10 or higher
- uv package manager installed (`pip install uv` or follow uv installation guide)
- Git for version control
- Access to Cohere API with production keys
- Qdrant Cloud account (Free Tier sufficient for this project)

### Environment Setup
1. Create a `.env` file in the backend directory with the following:
```
COHERE_API_KEY=your_cohere_api_key_here
QDRANT_URL=your_qdrant_cluster_url
QDRANT_API_KEY=your_qdrant_api_key
BOOK_BASE_URL=https://your-book-url.vercel.app
```

2. Install dependencies using uv:
```bash
cd backend
uv venv  # Create virtual environment
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
uv pip install requests beautifulsoup4 cohere qdrant-client python-dotenv
```

## Project Structure Setup

1. Create the backend directory and initial structure:
```
backend/
├── pyproject.toml
├── main.py
├── src/
│   ├── __init__.py
│   ├── content_fetcher.py
│   ├── content_processor.py
│   ├── embedding_generator.py
│   └── vector_store.py
└── .env
```

2. Initialize uv project:
```bash
cd backend
uv init
```

## Implementation Steps

### Step 1: Content Fetching Module
Create `src/content_fetcher.py`:
- Implement URL fetching using requests
- Extract main content using beautifulsoup4
- Handle different page types and error cases

### Step 2: Content Processing Module
Create `src/content_processor.py`:
- Implement content chunking logic
- Preserve hierarchy and metadata
- Handle different content types (text, code, lists)

### Step 3: Embedding Generation Module
Create `src/embedding_generator.py`:
- Integrate with Cohere API
- Generate embeddings for content chunks
- Handle rate limits and errors

### Step 4: Vector Storage Module
Create `src/vector_store.py`:
- Connect to Qdrant Cloud
- Store embeddings with metadata
- Implement retrieval functionality

### Step 5: Main Pipeline
Create `main.py` with the workflow:
```python
def main():
    # 1. Fetch all book URLs
    # 2. Extract content from each URL
    # 3. Process and chunk content
    # 4. Generate embeddings
    # 5. Store in Qdrant
    # 6. Validate with sample retrieval
```

## Running the Pipeline

1. Set up environment variables in `.env`
2. Install dependencies with uv
3. Run the main pipeline:
```bash
python main.py
```

## Testing the Implementation

### Unit Tests
- Test content fetching with mock URLs
- Test content chunking with sample text
- Test embedding generation with mock Cohere API
- Test vector storage with mock Qdrant

### Integration Tests
- Test complete pipeline with a few sample pages
- Validate that embeddings are correctly stored
- Verify retrieval functionality works as expected

## Validation Steps

### Content Extraction Validation
1. Verify all book URLs are accessible
2. Check that content is properly extracted (not empty)
3. Confirm metadata (title, hierarchy) is captured

### Embedding Validation
1. Verify embeddings are generated without errors
2. Check that vectors have correct dimensions (1024 for Cohere)
3. Confirm embeddings are stored in Qdrant

### Retrieval Validation
1. Perform sample similarity searches
2. Verify relevant results are returned
3. Check that metadata is properly retrieved

## Common Issues and Solutions

### API Rate Limits
- **Issue**: Cohere API rate limiting during processing
- **Solution**: Implement exponential backoff and retry logic

### Content Extraction Issues
- **Issue**: Some pages don't extract content properly
- **Solution**: Check for JavaScript-rendered content, implement fallback selectors

### Qdrant Connection Issues
- **Issue**: Unable to connect to Qdrant Cloud
- **Solution**: Verify API keys and URL, check network connectivity

## Next Steps

1. Implement the core modules following the architecture
2. Integrate all components into the main pipeline
3. Add comprehensive error handling and logging
4. Run validation tests with sample data
5. Scale up to process all book content
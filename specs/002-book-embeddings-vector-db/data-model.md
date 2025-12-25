# Data Model: Book Content Embeddings and Vector Database Storage

**Feature**: `002-book-embeddings-vector-db` | **Date**: 2025-12-25 | **Plan**: [plan.md](./plan.md)

## Entity Definitions

### BookContent
**Description**: Represents the raw content extracted from a book page

**Attributes**:
- `url` (string): The source URL of the content
- `title` (string): The page title
- `content` (string): The main text content extracted from the page
- `hierarchy` (string): The section hierarchy (e.g., "Module 1/Chapter 2")
- `metadata` (dict): Additional page metadata
- `created_at` (datetime): Timestamp when content was extracted

### ContentChunk
**Description**: Represents a processed chunk of book content ready for embedding

**Attributes**:
- `id` (string): Unique identifier for the chunk
- `content` (string): The text content chunk
- `source_url` (string): Original URL of the content
- `source_title` (string): Original page title
- `hierarchy` (string): Section hierarchy information
- `chunk_index` (integer): Position of this chunk within the original content
- `chunk_count` (integer): Total number of chunks from the original content
- `created_at` (datetime): Timestamp when chunk was created

### Embedding
**Description**: Represents an embedding vector with associated metadata

**Attributes**:
- `id` (string): Unique identifier for the embedding
- `vector` (list[float]): The embedding vector values
- `chunk_id` (string): Reference to the source content chunk
- `model` (string): The model used to generate the embedding
- `created_at` (datetime): Timestamp when embedding was generated

### VectorRecord
**Description**: Represents a record stored in the vector database

**Attributes**:
- `id` (string): Unique identifier for the vector record
- `vector` (list[float]): The embedding vector values
- `payload` (dict): Metadata associated with the vector
  - `content`: The original content text
  - `url`: Source URL
  - `title`: Source title
  - `hierarchy`: Section hierarchy
  - `chunk_index`: Position in original content
- `created_at` (datetime): Timestamp when record was stored

## Relationships

### BookContent → ContentChunk
- **Type**: One-to-Many
- **Description**: A single book content item can be chunked into multiple content chunks

### ContentChunk → Embedding
- **Type**: One-to-One
- **Description**: Each content chunk generates exactly one embedding

### Embedding → VectorRecord
- **Type**: One-to-One
- **Description**: Each embedding is stored as one vector record in the database

## Qdrant Collection Schema

### Collection: `book_embeddings`
**Configuration**:
- `vector_size`: 1024 (for Cohere embed-english-v3.0)
- `distance`: Cosine
- `hnsw_config`: Optimized for similarity search

### Payload Structure:
```json
{
  "content": "string",
  "url": "string",
  "title": "string",
  "hierarchy": "string",
  "chunk_index": "integer",
  "created_at": "datetime"
}
```

## Processing Pipeline Data Flow

### Stage 1: URL Discovery
- Input: List of URLs from deployed book
- Output: BookContent entities

### Stage 2: Content Processing
- Input: BookContent entities
- Output: ContentChunk entities

### Stage 3: Embedding Generation
- Input: ContentChunk entities
- Output: Embedding entities

### Stage 4: Vector Storage
- Input: Embedding entities
- Output: VectorRecord entities stored in Qdrant

## Validation Requirements

### Content Extraction Validation
- Verify content is not empty
- Verify content contains meaningful text (not just HTML tags)
- Verify metadata extraction is complete

### Chunking Validation
- Verify chunk size is within acceptable limits (minimum 50 tokens)
- Verify no chunks exceed maximum token count (512 tokens for Cohere)
- Verify all original content is preserved across chunks

### Embedding Validation
- Verify vector dimensions match expected size (1024 for embed-english-v3.0)
- Verify vector contains valid float values
- Verify embedding model is correctly recorded

### Storage Validation
- Verify records are successfully stored in Qdrant
- Verify all payload data is correctly associated with vectors
- Verify retrieval functionality works with stored records
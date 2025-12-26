from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Any
import networkx as nx

app = FastAPI()

# 1. CORS SETUP (Critical for React connection)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Allow ALL origins to fix connection issues
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 2. DATA MODEL (Relaxed Validation)
# We use List[Any] and defaults (= []) to prevent 422 Errors
class PipelineData(BaseModel):
    nodes: List[Any] = []
    edges: List[Any] = []

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

# 3. PROCESSING ENDPOINT
@app.post('/pipelines/parse')
def parse_pipeline(pipeline: PipelineData):
    nodes = pipeline.nodes
    edges = pipeline.edges
    
    # Build the Graph using NetworkX
    G = nx.DiGraph()
    
    # Add Nodes
    for node in nodes:
        # We handle cases where 'id' might be missing (safety check)
        if isinstance(node, dict) and 'id' in node:
            G.add_node(node['id'])
    
    # Add Edges
    for edge in edges:
        if isinstance(edge, dict) and 'source' in edge and 'target' in edge:
            G.add_edge(edge['source'], edge['target'])
    
    # Calculate DAG status
    # is_directed_acyclic_graph returns True if there are NO loops
    is_dag = nx.is_directed_acyclic_graph(G)
    
    return {
        'num_nodes': len(nodes),
        'num_edges': len(edges),
        'is_dag': is_dag
    }
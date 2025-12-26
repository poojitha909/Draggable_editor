// src/nodes/demoNodes.js
import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';

// 1. Email Node (Action)
export const EmailNode = ({ id, data }) => (
  <BaseNode 
    id={id} 
    title="📧 Send Email" 
    handles={[
      { type: 'target', position: Position.Left, id: 'trigger' },
      { type: 'target', position: Position.Left, id: 'recipient', style: { top: '60%' } }
    ]}
  >
    <div style={{ fontSize: '12px', color: '#555' }}>
      <div>To: <span style={{ fontWeight: 'bold' }}>{data.email || '{{ email }}'}</span></div>
      <div style={{ marginTop: '5px' }}>Subject: <em>{data.subject || 'Alert'}</em></div>
    </div>
  </BaseNode>
);

// 2. Database Node (Resource)
export const DatabaseNode = ({ id, data }) => (
  <BaseNode 
    id={id} 
    title="🗄️ Database Query" 
    handles={[
      { type: 'target', position: Position.Left, id: 'query_in' },
      { type: 'source', position: Position.Right, id: 'result' }
    ]}
  >
    <div style={{ fontSize: '12px' }}>
      <label>Table:</label>
      <select style={{ width: '100%', marginTop: '4px', padding: '2px' }}>
        <option>Users</option>
        <option>Transactions</option>
        <option>Logs</option>
      </select>
    </div>
  </BaseNode>
);

// 3. API Node (Integration)
export const APINode = ({ id, data }) => (
  <BaseNode 
    id={id} 
    title="🌐 API Request" 
    handles={[
      { type: 'target', position: Position.Left, id: 'params' },
      { type: 'source', position: Position.Right, id: 'response' }
    ]}
  >
    <div style={{ fontSize: '12px' }}>
      <div>Method: <strong>POST</strong></div>
      <div style={{ marginTop: '5px' }}>Endpoint:</div>
      <input type="text" placeholder="https://api..." style={{ width: '100%', border: '1px solid #ddd' }} />
    </div>
  </BaseNode>
);

// 4. Transform Node (Logic)
export const TransformNode = ({ id, data }) => (
  <BaseNode 
    id={id} 
    title="🔄 Transform Data" 
    handles={[
      { type: 'target', position: Position.Left, id: 'input' },
      { type: 'source', position: Position.Right, id: 'output' }
    ]}
  >
    <div style={{ fontSize: '12px', color: '#666' }}>
      Convert format:
      <select style={{ width: '100%', marginTop: '4px' }}>
        <option>JSON to CSV</option>
        <option>Text to Uppercase</option>
      </select>
    </div>
  </BaseNode>
);

// 5. Note Node (Utility)
export const NoteNode = ({ id, data }) => (
  <BaseNode 
    id={id} 
    title="📝 Note" 
    handles={[]} // No handles, just a sticky note
  >
    <textarea 
      placeholder="Type notes here..." 
      style={{ 
        width: '100%', height: '60px', border: 'none', resize: 'none', background: '#ffffa0', padding: '5px' 
      }} 
    />
  </BaseNode>
);
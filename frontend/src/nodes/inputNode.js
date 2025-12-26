// frontend/src/nodes/inputNode.js
import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode'; // Import your new abstraction

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => setCurrName(e.target.value);
  const handleTypeChange = (e) => setInputType(e.target.value);

  // Define the connection points for this specific node
  const inputHandles = [
    { type: 'source', position: Position.Right, id: 'value' }
  ];

  return (
    <BaseNode 
      id={id} 
      data={data} 
      title="Input" 
      handles={inputHandles}
    >
      {/* Only the unique logic goes here */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label style={{ fontSize: '12px', color: '#666' }}>
          Name:
          <input 
            type="text" 
            value={currName} 
            onChange={handleNameChange} 
            style={{ width: '100%', marginTop: '4px', padding: '4px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </label>
        <label style={{ fontSize: '12px', color: '#666' }}>
          Type:
          <select 
            value={inputType} 
            onChange={handleTypeChange}
            style={{ width: '100%', marginTop: '4px', padding: '4px', border: '1px solid #ccc', borderRadius: '4px' }}
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
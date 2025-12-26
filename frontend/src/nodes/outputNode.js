import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';

export const OutputNode = ({ id, data }) => {
  return (
    <BaseNode 
      id={id} 
      data={data} 
      title="Output"
      handles={[
        { type: 'target', position: Position.Left, id: 'value' }
      ]}
    >
      <div style={{ padding: '5px' }}>
        <label style={{ fontSize: '12px', color: '#555' }}>
          Name:
          <input 
            type="text" 
            defaultValue={data.outputName || id.replace('customOutput-', 'output_')}
            style={{ width: '100%', marginTop: '5px', padding: '4px', border: '1px solid #ddd', borderRadius: '4px' }} 
          />
        </label>
        <label style={{ fontSize: '12px', color: '#555', marginTop: '10px', display: 'block' }}>
          Type:
          <select defaultValue={data.outputType || 'Text'} style={{ width: '100%', marginTop: '5px' }}>
            <option value="Text">Text</option>
            <option value="Image">Image</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};

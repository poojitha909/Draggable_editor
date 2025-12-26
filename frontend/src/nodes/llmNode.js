import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode 
      id={id} 
      data={data} 
      title="LLM"
      handles={[
        { type: 'target', position: Position.Left, id: 'system', style: { top: '33%' } },
        { type: 'target', position: Position.Left, id: 'prompt', style: { top: '66%' } },
        { type: 'source', position: Position.Right, id: 'response' }
      ]}
    >
      <div style={{ fontSize: '12px', color: '#555' }}>
        <span>This is a LLM.</span>
      </div>
    </BaseNode>
  );
};

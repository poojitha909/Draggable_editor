// frontend/src/components/BaseNode.js
import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, data, title, children, handles = [] }) => {
  return (
    <div 
      style={{ 
        width: 200, 
        height: 'auto', 
        border: '1px solid #1a192b', 
        borderRadius: '8px', 
        backgroundColor: 'white',
        display: 'flex', 
        flexDirection: 'column',
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        position: 'relative'
      }}
    >
      {/* --- DYNAMIC HANDLES --- */}
      {handles.map((handle, index) => (
        <Handle
          key={index}
          type={handle.type} // 'source' or 'target'
          position={handle.position} // Position.Left or Position.Right
          id={`${id}-${handle.id}`}
          style={handle.style || {}} // Allow custom styles (like for the variable handles later)
        />
      ))}

      {/* --- TITLE HEADER --- */}
      <div style={{ 
        padding: '8px 12px', 
        backgroundColor: '#f3f4f6', 
        borderBottom: '1px solid #e5e7eb',
        fontWeight: '600',
        color: '#374151',
        fontSize: '14px'
      }}>
        {title}
      </div>

      {/* --- NODE CONTENT (The Unique Part) --- */}
      <div style={{ padding: '12px' }}>
        {children}
      </div>
    </div>
  );
};
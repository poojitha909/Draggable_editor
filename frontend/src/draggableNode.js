import React from 'react';

export const DraggableNode = ({ type, label }) => {
   
    const onDragStart = (event, nodeType) => {
      // Send JSON string so we can pass more data if needed
      const appData = { nodeType }
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        className={type}
        onDragStart={(event) => onDragStart(event, type)}
        draggable
        style={{ 
            cursor: 'grab', 
            // WIDTH UPGRADE:
            minWidth: '80px', 
            height: '60px', /* Taller for better clickability */
            display: 'flex', 
            alignItems: 'center', 
            borderRadius: '8px',
            backgroundColor: '#fff',
            justifyContent: 'center', 
            flexDirection: 'column',
            border: '1px solid #3300CC', 
            color: '#3300CC',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            // FLEXIBLE WIDTH:
            flex: '1 0 40%' /* Grow to fill space, min width 40% */
        }}
      >
          <span style={{ fontWeight: '600', fontSize: '13px' }}>{label}</span>
      </div>
    );
};
import { useState, useEffect, useRef } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{ input }}');
  const [handles, setHandles] = useState([]);
  const textareaRef = useRef(null);

  // 1. VARIABLE DETECTION LOGIC (The "Smart" Part)
  useEffect(() => {
    // Regex to find text inside {{ }}
    const regex = /\{\{(.*?)\}\}/g;
    const matches = [];
    let match;

    // Extract all unique variables
    while ((match = regex.exec(currText)) !== null) {
      const variableName = match[1].trim();
      if (variableName && !matches.includes(variableName)) {
        matches.push(variableName);
      }
    }

    // Generate Dynamic Handles based on matches
    const dynamicHandles = matches.map((varName, index) => ({
      type: 'target', 
      position: Position.Left, 
      id: `${id}-${varName}`, 
      // Offset handles vertically so they don't overlap (start at 70px down)
      style: { top: `${index * 25 + 70}px`, background: '#FF5733' }, // Red/Orange to stand out
      label: varName 
    }));

    // Always add the default Output handle on the right
    dynamicHandles.push({ 
      type: 'source', 
      position: Position.Right, 
      id: 'output' 
    });

    setHandles(dynamicHandles);
  }, [currText, id]);

  // 2. AUTO-RESIZE LOGIC (The "UX" Part)
  useEffect(() => {
    if (textareaRef.current) {
      // Reset height to shrink if text is deleted
      textareaRef.current.style.height = 'auto';
      // Set height to content height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode 
      id={id} 
      data={data} 
      title="Text" 
      handles={handles} // Pass dynamic handles to BaseNode
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        
        <label style={{ fontSize: '12px', color: '#666', fontWeight: '500' }}>
          Text:
        </label>
        
        <textarea 
          ref={textareaRef}
          value={currText} 
          onChange={handleTextChange} 
          style={{ 
            // 3. THE CSS FIX FOR OVERFLOW
            width: '100%', 
            boxSizing: 'border-box', // <--- CRITICAL FIX
            
            minHeight: '40px',
            resize: 'none', 
            overflow: 'hidden', 
            padding: '8px',
            border: '1px solid #eee',
            borderRadius: '4px',
            fontSize: '12px',
            fontFamily: 'monospace',
            lineHeight: '1.4'
          }}
        />
        
        {/* Helper text to show it's working */}
        <div style={{ fontSize: '10px', color: '#aaa', marginTop: '2px', textAlign: 'right' }}>
          {handles.length - 1} variable(s) detected
        </div>

      </div>
    </BaseNode>
  );
};
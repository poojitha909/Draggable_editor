import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
// SubmitButton is REMOVED from here

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex' }}>
        
        {/* LEFT COLUMN: The Toolbar */}
        <div style={{ 
            width: '250px', 
            minWidth: '250px',
            borderRight: '1px solid #ddd', 
            backgroundColor: '#fcfcfc',
            overflowY: 'auto'
        }}>
          <PipelineToolbar />
        </div>

        {/* RIGHT COLUMN: The Canvas (Button is inside here now) */}
        <div style={{ flex: 1, height: '100%' }}>
          <PipelineUI />
        </div>
        
    </div>
  );
}

export default App;

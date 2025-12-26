// frontend/src/submit.js
import { useReactFlow } from 'reactflow'; // <--- Import the official hook

export const SubmitButton = () => {
    // Get the accessor functions from the React Flow instance
    const { getNodes, getEdges } = useReactFlow();

    const handleSubmit = async () => {
        // 1. GET FRESH DATA DIRECTLY FROM THE CANVAS
        const nodes = getNodes();
        const edges = getEdges();

        console.log("Submitting Nodes:", nodes); // Check your console to verify!
        console.log("Submitting Edges:", edges);

        try {
            // 2. Prepare Payload
            const payload = {
                nodes: nodes || [],
                edges: edges || []
            };

            // 3. Send to Backend
            const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            // 4. Alert Result
            if (!response.ok) {
                alert(`Backend Error: ${JSON.stringify(data)}`);
            } else {
                alert(
                    `Pipeline Analysis:\n` +
                    `------------------\n` +
                    `Number of Nodes: ${data.num_nodes}\n` +
                    `Number of Edges: ${data.num_edges}\n` +
                    `Is DAG: ${data.is_dag}`
                );
            }

        } catch (error) {
            console.error(error);
            alert("Network Error: Is the backend running?");
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button 
                type="submit" 
                onClick={handleSubmit}
                style={{
                    padding: '8px 16px',
                    backgroundColor: '#3300CC', // VectorShift Purple
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: '600'
                }}
            >
                Submit
            </button>
        </div>
    );
}
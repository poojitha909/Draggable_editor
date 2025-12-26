import React from 'react';
import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', color: '#1A192B' }}>
                Build Pipeline
            </h2>
            
            {/* GENERAL */}
            <div style={{ marginBottom: '25px' }}>
                <h3 style={{ fontSize: '11px', color: '#888', fontWeight: '600', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>General</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    <DraggableNode type='customInput' label='Input' />
                    <DraggableNode type='customOutput' label='Output' />
                    <DraggableNode type='text' label='Text' />
                </div>
            </div>

            {/* AI & LOGIC */}
            <div style={{ marginBottom: '25px' }}>
                <h3 style={{ fontSize: '11px', color: '#888', fontWeight: '600', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>AI & Logic</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    <DraggableNode type='llm' label='LLM Engine' />
                    <DraggableNode type='transform' label='Transform' />
                </div>
            </div>

            {/* INTEGRATIONS (The Missing Ones) */}
            <div>
                <h3 style={{ fontSize: '11px', color: '#888', fontWeight: '600', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Integrations</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    <DraggableNode type='email' label='Send Email' />
                    <DraggableNode type='database' label='Database' />
                    <DraggableNode type='api' label='API Request' />
                    <DraggableNode type='note' label='Sticky Note' />
                </div>
            </div>
        </div>
    );
};
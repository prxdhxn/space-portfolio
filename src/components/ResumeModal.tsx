import { motion, AnimatePresence } from 'framer-motion';

export default function ResumeModal() {
  return (
    <dialog id="resume-modal" style={{
      background: 'transparent',
      border: 'none',
      width: '100vw',
      height: '100vh',
      maxWidth: '100vw',
      maxHeight: '100vh',
      margin: 0,
      padding: 0,
    }}>
      <div style={{
        width: '100vw',
        height: '100vh',
        background: 'rgba(0,0,0,0.8)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}>
        <div className="glass-panel" style={{
          width: '100%',
          maxWidth: '900px',
          height: '85vh',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          padding: '1rem'
        }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', padding: '0 1rem' }}>
            <h3 style={{ color: 'var(--color-neon-cyan)', margin: 0 }}>Resume Details</h3>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="/pradhan-general-cv.pdf" download className="btn-primary hover-target" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                Download
              </a>
              <button 
                className="btn-primary hover-target" 
                style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', borderColor: 'var(--color-neon-pink)' }}
                onClick={() => {
                  const modal = document.getElementById('resume-modal') as any;
                  if (modal) modal.close();
                }}
              >
                Close
              </button>
            </div>
          </div>
          
          {/* PDF Viewer */}
          <div style={{ flex: 1, borderRadius: '8px', overflow: 'hidden', background: '#e0e0e0' }}>
            <object data="/pradhan-general-cv.pdf" type="application/pdf" width="100%" height="100%">
              <p>Your browser does not support PDFs. <a href="/pradhan-general-cv.pdf">Download the PDF</a>.</p>
            </object>
          </div>
        </div>
      </div>
    </dialog>
  );
}

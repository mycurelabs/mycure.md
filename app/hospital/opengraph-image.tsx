import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'MYCURE Hospital - Hospital Management System'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)',
          padding: '60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              color: '#22d3ee',
              marginBottom: 24,
              letterSpacing: '-2px',
            }}
          >
            MYCURE Hospital
          </div>
          <div
            style={{
              fontSize: 36,
              color: '#ffffff',
              marginBottom: 16,
              fontWeight: 600,
            }}
          >
            Hospital Management System
          </div>
          <div
            style={{
              fontSize: 24,
              color: '#94a3b8',
              maxWidth: 800,
              lineHeight: 1.4,
            }}
          >
            Enterprise-grade healthcare management for hospitals
          </div>
          <div
            style={{
              display: 'flex',
              gap: 32,
              marginTop: 40,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 8, height: 8, backgroundColor: '#22c55e', borderRadius: '50%' }} />
              <span style={{ color: '#e2e8f0', fontSize: 18 }}>Multi-Department</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 8, height: 8, backgroundColor: '#22c55e', borderRadius: '50%' }} />
              <span style={{ color: '#e2e8f0', fontSize: 18 }}>Inpatient Management</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 8, height: 8, backgroundColor: '#22c55e', borderRadius: '50%' }} />
              <span style={{ color: '#e2e8f0', fontSize: 18 }}>Lab & Pharmacy</span>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}

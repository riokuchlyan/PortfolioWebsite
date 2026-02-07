import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

// Image generation
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            marginBottom: 20,
          }}
        >
          Rio Kuchlyan
        </div>
        <div
          style={{
            fontSize: 32,
            opacity: 0.9,
            textAlign: 'center',
            maxWidth: 800,
          }}
        >
          Computer Science & Business @ UNC Chapel Hill
        </div>
        <div
          style={{
            fontSize: 24,
            opacity: 0.8,
            marginTop: 20,
          }}
        >
          Developer • Business Analyst • Researcher
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  )
}

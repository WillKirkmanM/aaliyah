import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import fs from "fs/promises";
import path from "path";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    const title = searchParams.get('title') || 'AALIYAH';
    const subtitle = searchParams.get('subtitle') || 'THE RED ALBUM';
    const pageType = searchParams.get('type') || 'default';
    
    let dataURI;
    if (pageType === 'unreleased' || pageType === 'slowed') {
      dataURI = "https://aaliyah.parson.dev/about/red-back.jpg";
    } else if (pageType === 'lyrics') {
      dataURI = "https://aaliyah.parson.dev/we-need-a-resolution-cover.jpg";
    } else if (pageType === 'tracklist') {
      dataURI = "https://aaliyah.parson.dev/more-than-a-woman-visualizer.jpg";
    } else {
      dataURI = "https://aaliyah.parson.dev/aaliyah.jpg";
    }

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            backgroundColor: 'black',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              overflow: 'hidden',
            }}
          >
            <img
              src={dataURI}
              alt="Background"
              width="1200"
              height="630"
              style={{
                width: '100%',
                height: '170%',
                objectFit: 'cover',
                objectPosition: 'top',
                filter: 'blur(8px)',
                opacity: 0.6,
              }}
            />
          </div>
          
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 40px',
              position: 'relative',
              zIndex: 10,
            }}
          >
            <h1
              style={{
                fontSize: 120,
                fontWeight: 700,
                letterSpacing: '0.05em',
                color: 'white',
                margin: 0,
                marginBottom: 16,
                textAlign: 'center',
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: 48,
                fontWeight: 300,
                letterSpacing: '0.2em',
                color: 'rgba(255, 255, 255, 0.8)',
                margin: 0,
                textAlign: 'center',
              }}
            >
              {subtitle}
            </p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    console.error('Error generating OG image:', error);
    
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'black',
            color: 'white',
            padding: '40px',
          }}
        >
          <div style={{ fontSize: 60, fontWeight: 700, marginBottom: 20 }}>AALIYAH</div>
          <div style={{ fontSize: 24, color: 'red' }}>Error generating custom OG image</div>
          <div style={{ fontSize: 18, color: '#999', marginTop: 10 }}>{String(error)}</div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  }
}
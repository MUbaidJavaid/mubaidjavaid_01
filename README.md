<!--
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  PREMIUM PORTFOLIO INTERFACE :: ARCHITECTURE ENGINEERED FOR IMPACT
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Designed for dark-mode excellence | Agentic color palette integrated
  Every element engineered for visual hierarchy and technical credibility
-->

<!--
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  01. HERO SECTION :: AGENTIC SIGNATURE
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
-->

<div align="center">

  <!-- Animated Gradient Banner -->
  <svg width="100%" height="280" viewBox="0 0 1200 280" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Premium Cyber Gradient -->
      <linearGradient id="cyberGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#00e0ff">
          <animate attributeName="stop-color" values="#00e0ff;#00ff9d;#c5b6e3;#ffb300;#00e0ff" dur="8s" repeatCount="indefinite"/>
        </stop>
        <stop offset="100%" stop-color="#00ff9d">
          <animate attributeName="stop-color" values="#00ff9d;#c5b6e3;#ffb300;#00e0ff;#00ff9d" dur="8s" repeatCount="indefinite"/>
        </stop>
      </linearGradient>

      <!-- Glow Effect -->
      <radialGradient id="heroGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#0b0f19" stop-opacity="0"/>
        <stop offset="100%" stop-color="#0b0f19" stop-opacity="1"/>
      </radialGradient>

      <!-- Grid Pattern -->
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00e0ff" stroke-width="0.5" stroke-opacity="0.1"/>
      </pattern>
    </defs>

    <!-- Background -->
    <rect width="100%" height="100%" fill="#0b0f19"/>
    <rect width="100%" height="100%" fill="url(#grid)"/>

    <!-- Glow Center -->
    <ellipse cx="600" cy="140" rx="400" ry="60" fill="url(#heroGlow)"/>

    <!-- Main Text -->
    <text x="600" y="120" text-anchor="middle" fill="url(#cyberGradient)" font-family="'Inter', -apple-system, sans-serif" font-size="52" font-weight="700">
      UBAID JAVAID
    </text>

    <!-- Subtitle -->
    <text x="600" y="170" text-anchor="middle" fill="#9ca3af" font-family="'Inter', sans-serif" font-size="18" font-weight="300" letter-spacing="1">
      SENIOR MERN ARCHITECT • NEXT.JS PERFORMANCE ENGINEER • SYSTEMS DESIGNER
    </text>

    <!-- Animated Dots -->
    <circle cx="480" cy="200" r="3" fill="#00e0ff">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="520" cy="200" r="3" fill="#00ff9d">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" begin="0.4s"/>
    </circle>
    <circle cx="560" cy="200" r="3" fill="#c5b6e3">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" begin="0.8s"/>
    </circle>
    <circle cx="600" cy="200" r="3" fill="#ffb300">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" begin="1.2s"/>
    </circle>
    <circle cx="640" cy="200" r="3" fill="#c5b6e3">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" begin="1.6s"/>
    </circle>
    <circle cx="680" cy="200" r="3" fill="#00ff9d">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" begin="2s"/>
    </circle>
    <circle cx="720" cy="200" r="3" fill="#00e0ff">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" begin="2.4s"/>
    </circle>

  </svg>

  <!-- Navigation Badges -->
  <div align="center" style="margin: 24px 0 32px 0;">
    <a href="https://mubaidjavaid.vercel.app">
      <img src="https://img.shields.io/badge/Portfolio-0b0f19?style=for-the-badge&logo=vercel&logoColor=00e0ff&labelColor=111827" alt="Portfolio"/>
    </a>
    <a href="https://github.com/MUbaidJavaid">
      <img src="https://img.shields.io/badge/GitHub-0b0f19?style=for-the-badge&logo=github&logoColor=00ff9d&labelColor=111827" alt="GitHub"/>
    </a>
    <a href="mailto:ubaidjaved500@gmail.com">
      <img src="https://img.shields.io/badge/Email-0b0f19?style=for-the-badge&logo=gmail&logoColor=ffb300&labelColor=111827" alt="Email"/>
    </a>
  </div>

  <!-- Core Mantra -->
  <div style="max-width: 800px; margin: 0 auto; padding: 0 20px;">
    <p style="color: #c5b6e3; font-size: 18px; line-height: 1.6; text-align: center;">
      <em>"I don't write features — I engineer digital systems that scale, convert, and survive real-world pressure."</em>
    </p>
  </div>
</div>

<!--
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  02. ARCHITECTURE PHILOSOPHY :: ENGINEERED PRINCIPLES
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
-->

<div align="center">
  <!-- Section Divider -->
  <svg width="80%" height="20" xmlns="http://www.w3.org/2000/svg">
    <line x1="0" y1="10" x2="100%" y2="10" stroke="url(#cyberGradient)" stroke-width="1" stroke-dasharray="5,5"/>
  </svg>

  <h2 style="color: #00e0ff; margin: 40px 0 24px 0; font-family: 'Inter', sans-serif; font-weight: 600;">
    ⚙️ ENGINEERING PHILOSOPHY — EFFICIENCY BY DESIGN
  </h2>
</div>

<div align="center" style="max-width: 1000px; margin: 0 auto; padding: 0 20px;">

  <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 24px; margin-bottom: 48px;">

    <!-- Principle 1 -->
    <div style="flex: 1; min-width: 280px; background: linear-gradient(145deg, #111827, #0b0f19); border: 1px solid rgba(0, 224, 255, 0.1); border-radius: 12px; padding: 28px; text-align: left;">
      <div style="display: flex; align-items: center; margin-bottom: 16px;">
        <div style="width: 36px; height: 36px; background: linear-gradient(135deg, #00e0ff, #0b0f19); border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-right: 12px;">
          <span style="color: #0b0f19; font-weight: 700;">01</span>
        </div>
        <h3 style="color: #00e0ff; margin: 0; font-size: 18px;">PERFORMANCE AS FEATURE</h3>
      </div>
      <p style="color: #9ca3af; line-height: 1.6; margin: 0;">
        If it isn't fast, it's broken. I architect with Next.js 16.1 and React 19 primitives for sub-1s LCP and frictionless UX — even under production load.
      </p>
    </div>

    <!-- Principle 2 -->
    <div style="flex: 1; min-width: 280px; background: linear-gradient(145deg, #111827, #0b0f19); border: 1px solid rgba(0, 255, 157, 0.1); border-radius: 12px; padding: 28px; text-align: left;">
      <div style="display: flex; align-items: center; margin-bottom: 16px;">
        <div style="width: 36px; height: 36px; background: linear-gradient(135deg, #00ff9d, #0b0f19); border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-right: 12px;">
          <span style="color: #0b0f19; font-weight: 700;">02</span>
        </div>
        <h3 style="color: #00ff9d; margin: 0; font-size: 18px;">SYSTEMS OVER FEATURES</h3>
      </div>
      <p style="color: #9ca3af; line-height: 1.6; margin: 0;">
        I don't ship pages — I ship architecture. Modular Express.js services reduce API latency by ~35% while improving long-term maintainability.
      </p>
    </div>

    <!-- Principle 3 -->
    <div style="flex: 1; min-width: 280px; background: linear-gradient(145deg, #111827, #0b0f19); border: 1px solid rgba(255, 179, 0, 0.1); border-radius: 12px; padding: 28px; text-align: left;">
      <div style="display: flex; align-items: center; margin-bottom: 16px;">
        <div style="width: 36px; height: 36px; background: linear-gradient(135deg, #ffb300, #0b0f19); border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-right: 12px;">
          <span style="color: #0b0f19; font-weight: 700;">03</span>
        </div>
        <h3 style="color: #ffb300; margin: 0; font-size: 18px;">RISK REDUCTION BY DEFAULT</h3>
      </div>
      <p style="color: #9ca3af; line-height: 1.6; margin: 0;">
        Type-safe TypeScript, automated CI/CD, and strict standards reduce deployment friction by ~40% and prevent costly production regressions.
      </p>
    </div>

  </div>
</div>

<!--
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  03. TECHNICAL EXPERTISE :: BUSINESS IMPACT MATRIX
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
-->

<div align="center">
  <!-- Section Divider -->
  <svg width="80%" height="20" xmlns="http://www.w3.org/2000/svg">
    <line x1="0" y1="10" x2="100%" y2="10" stroke="url(#cyberGradient)" stroke-width="1" stroke-dasharray="5,5"/>
  </svg>

  <h2 style="color: #00e0ff; margin: 40px 0 24px 0; font-family: 'Inter', sans-serif; font-weight: 600;">
    🛠️ TECHNICAL EXPERTISE → BUSINESS IMPACT
  </h2>
</div>

<div align="center">
  <table style="width: 100%; max-width: 1000px; margin: 0 auto; border-collapse: separate; border-spacing: 0 12px; background: transparent;">
    <thead>
      <tr>
        <th style="background: linear-gradient(90deg, #0b0f19, #111827); color: #00e0ff; padding: 16px; text-align: left; border-radius: 8px 0 0 8px; border: 1px solid rgba(0, 224, 255, 0.2);">DOMAIN</th>
        <th style="background: linear-gradient(90deg, #111827, #0b0f19); color: #00ff9d; padding: 16px; text-align: left; border-radius: 0 8px 8px 0; border: 1px solid rgba(0, 255, 157, 0.2);">BUSINESS VALUE</th>
      </tr>
    </thead>
    <tbody>

      <tr>
        <td style="background: rgba(17, 24, 39, 0.6); padding: 20px; border: 1px solid rgba(0, 224, 255, 0.1); border-radius: 8px 0 0 8px;">
          <div style="display: flex; align-items: center; margin-bottom: 8px;">
            <div style="width: 6px; height: 24px; background: #00e0ff; border-radius: 3px; margin-right: 12px;"></div>
            <h3 style="color: #f8fafc; margin: 0; font-size: 16px;">Frontend Architecture</h3>
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px;">
            <span style="background: rgba(0, 224, 255, 0.1); color: #00e0ff; padding: 4px 10px; border-radius: 4px; font-size: 12px;">Next.js 16.1</span>
            <span style="background: rgba(0, 224, 255, 0.1); color: #00e0ff; padding: 4px 10px; border-radius: 4px; font-size: 12px;">React 19</span>
            <span style="background: rgba(0, 224, 255, 0.1); color: #00e0ff; padding: 4px 10px; border-radius: 4px; font-size: 12px;">TypeScript</span>
          </div>
        </td>
        <td style="background: rgba(17, 24, 39, 0.6); padding: 20px; border: 1px solid rgba(0, 255, 157, 0.1); border-radius: 0 8px 8px 0;">
          <p style="color: #c5b6e3; margin: 0 0 12px 0;">Higher retention through smooth UX and faster hydration</p>
          <div style="display: flex; align-items: center;">
            <div style="width: 80%; height: 4px; background: rgba(0, 255, 157, 0.2); border-radius: 2px; margin-right: 12px;">
              <div style="width: 90%; height: 100%; background: #00ff9d; border-radius: 2px;"></div>
            </div>
            <span style="color: #00ff9d; font-size: 12px;">90%+ score</span>
          </div>
        </td>
      </tr>

      <tr>
        <td style="background: rgba(17, 24, 39, 0.6); padding: 20px; border: 1px solid rgba(0, 224, 255, 0.1); border-radius: 8px 0 0 8px;">
          <div style="display: flex; align-items: center; margin-bottom: 8px;">
            <div style="width: 6px; height: 24px; background: #00ff9d; border-radius: 3px; margin-right: 12px;"></div>
            <h3 style="color: #f8fafc; margin: 0; font-size: 16px;">Backend Engineering</h3>
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px;">
            <span style="background: rgba(0, 255, 157, 0.1); color: #00ff9d; padding: 4px 10px; border-radius: 4px; font-size: 12px;">Node.js</span>
            <span style="background: rgba(0, 255, 157, 0.1); color: #00ff9d; padding: 4px 10px; border-radius: 4px; font-size: 12px;">Express</span>
            <span style="background: rgba(0, 255, 157, 0.1); color: #00ff9d; padding: 4px 10px; border-radius: 4px; font-size: 12px;">MongoDB</span>
          </div>
        </td>
        <td style="background: rgba(17, 24, 39, 0.6); padding: 20px; border: 1px solid rgba(0, 255, 157, 0.1); border-radius: 0 8px 8px 0;">
          <p style="color: #c5b6e3; margin: 0 0 12px 0;">Reliable APIs engineered for real traffic spikes and high concurrency</p>
          <div style="display: flex; align-items: center;">
            <div style="width: 80%; height: 4px; background: rgba(0, 255, 157, 0.2); border-radius: 2px; margin-right: 12px;">
              <div style="width: 85%; height: 100%; background: #00ff9d; border-radius: 2px;"></div>
            </div>
            <span style="color: #00ff9d; font-size: 12px;">85% efficiency</span>
          </div>
        </td>
      </tr>

      <tr>
        <td style="background: rgba(17, 24, 39, 0.6); padding: 20px; border: 1px solid rgba(0, 224, 255, 0.1); border-radius: 8px 0 0 8px;">
          <div style="display: flex; align-items: center; margin-bottom: 8px;">
            <div style="width: 6px; height: 24px; background: #c5b6e3; border-radius: 3px; margin-right: 12px;"></div>
            <h3 style="color: #f8fafc; margin: 0; font-size: 16px;">Security & Authentication</h3>
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px;">
            <span style="background: rgba(197, 182, 227, 0.1); color: #c5b6e3; padding: 4px 10px; border-radius: 4px; font-size: 12px;">JWT</span>
            <span style="background: rgba(197, 182, 227, 0.1); color: #c5b6e3; padding: 4px 10px; border-radius: 4px; font-size: 12px;">Sessions</span>
            <span style="background: rgba(197, 182, 227, 0.1); color: #c5b6e3; padding: 4px 10px; border-radius: 4px; font-size: 12px;">RBAC</span>
          </div>
        </td>
        <td style="background: rgba(17, 24, 39, 0.6); padding: 20px; border: 1px solid rgba(0, 255, 157, 0.1); border-radius: 0 8px 8px 0;">
          <p style="color: #c5b6e3; margin: 0 0 12px 0;">Hardened authentication flows that protect sensitive user data</p>
          <div style="display: flex; align-items: center;">
            <div style="width: 80%; height: 4px; background: rgba(197, 182, 227, 0.2); border-radius: 2px; margin-right: 12px;">
              <div style="width: 95%; height: 100%; background: #c5b6e3; border-radius: 2px;"></div>
            </div>
            <span style="color: #c5b6e3; font-size: 12px;">95% secure</span>
          </div>
        </td>
      </tr>

      <tr>
        <td style="background: rgba(17, 24, 39, 0.6); padding: 20px; border: 1px solid rgba(0, 224, 255, 0.1); border-radius: 8px 0 0 8px;">
          <div style="display: flex; align-items: center; margin-bottom: 8px;">
            <div style="width: 6px; height: 24px; background: #ffb300; border-radius: 3px; margin-right: 12px;"></div>
            <h3 style="color: #f8fafc; margin: 0; font-size: 16px;">UX & Interaction Design</h3>
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px;">
            <span style="background: rgba(255, 179, 0, 0.1); color: #ffb300; padding: 4px 10px; border-radius: 4px; font-size: 12px;">Tailwind</span>
            <span style="background: rgba(255, 179, 0, 0.1); color: #ffb300; padding: 4px 10px; border-radius: 4px; font-size: 12px;">Shadcn UI</span>
            <span style="background: rgba(255, 179, 0, 0.1); color: #ffb300; padding: 4px 10px; border-radius: 4px; font-size: 12px;">Three.js</span>
          </div>
        </td>
        <td style="background: rgba(17, 24, 39, 0.6); padding: 20px; border: 1px solid rgba(0, 255, 157, 0.1); border-radius: 0 8px 8px 0;">
          <p style="color: #c5b6e3; margin: 0 0 12px 0;">Premium, high-tech interfaces that elevate brand perception</p>
          <div style="display: flex; align-items: center;">
            <div style="width: 80%; height: 4px; background: rgba(255, 179, 0, 0.2); border-radius: 2px; margin-right: 12px;">
              <div style="width: 88%; height: 100%; background: #ffb300; border-radius: 2px;"></div>
            </div>
            <span style="color: #ffb300; font-size: 12px;">88% satisfaction</span>
          </div>
        </td>
      </tr>

    </tbody>

  </table>
</div>

<!--
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  04. SOLUTIONS ENGINEERED :: PROBLEMS I SOLVE
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
-->

<div align="center">
  <!-- Section Divider -->
  <svg width="80%" height="20" xmlns="http://www.w3.org/2000/svg">
    <line x1="0" y1="10" x2="100%" y2="10" stroke="url(#cyberGradient)" stroke-width="1" stroke-dasharray="5,5"/>
  </svg>

  <h2 style="color: #00e0ff; margin: 40px 0 24px 0; font-family: 'Inter', sans-serif; font-weight: 600;">
    🎯 ENGINEERED SOLUTIONS FOR SERIOUS TEAMS
  </h2>
</div>

<div align="center" style="max-width: 1000px; margin: 0 auto; padding: 0 20px;">
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; margin-bottom: 48px;">

    <div style="background: linear-gradient(145deg, #111827, #0b0f19); border-left: 4px solid #00e0ff; padding: 24px; border-radius: 0 12px 12px 0; text-align: left;">
      <div style="display: flex; align-items: start; margin-bottom: 16px;">
        <div style="background: rgba(0, 224, 255, 0.1); padding: 8px; border-radius: 8px; margin-right: 16px;">
          <span style="color: #00e0ff; font-size: 20px;">⚡</span>
        </div>
        <div>
          <h3 style="color: #f8fafc; margin: 0 0 8px 0;">Slow & Outdated Product</h3>
          <p style="color: #9ca3af; margin: 0; line-height: 1.5;">
            Redesign rendering pipelines, animations, and asset loading for a liquid, modern UI that converts.
          </p>
        </div>
      </div>
    </div>

    <div style="background: linear-gradient(145deg, #111827, #0b0f19); border-left: 4px solid #00ff9d; padding: 24px; border-radius: 0 12px 12px 0; text-align: left;">
      <div style="display: flex; align-items: start; margin-bottom: 16px;">
        <div style="background: rgba(0, 255, 157, 0.1); padding: 8px; border-radius: 8px; margin-right: 16px;">
          <span style="color: #00ff9d; font-size: 20px;">📈</span>
        </div>
        <div>
          <h3 style="color: #f8fafc; margin: 0 0 8px 0;">Declining Velocity</h3>
          <p style="color: #9ca3af; margin: 0; line-height: 1.5;">
            Introduce reusable component systems (50+ components) that speed up future releases by ~40%.
          </p>
        </div>
      </div>
    </div>

    <div style="background: linear-gradient(145deg, #111827, #0b0f19); border-left: 4px solid #c5b6e3; padding: 24px; border-radius: 0 12px 12px 0; text-align: left;">
      <div style="display: flex; align-items: start; margin-bottom: 16px;">
        <div style="background: rgba(197, 182, 227, 0.1); padding: 8px; border-radius: 8px; margin-right: 16px;">
          <span style="color: #c5b6e3; font-size: 20px;">🔐</span>
        </div>
        <div>
          <h3 style="color: #f8fafc; margin: 0 0 8px 0;">Broken Auth Experience</h3>
          <p style="color: #9ca3af; margin: 0; line-height: 1.5;">
            Refactor authentication flows using modern React patterns for zero-flicker, seamless interactions.
          </p>
        </div>
      </div>
    </div>

    <div style="background: linear-gradient(145deg, #111827, #0b0f19); border-left: 4px solid #ffb300; padding: 24px; border-radius: 0 12px 12px 0; text-align: left;">
      <div style="display: flex; align-items: start; margin-bottom: 16px;">
        <div style="background: rgba(255, 179, 0, 0.1); padding: 8px; border-radius: 8px; margin-right: 16px;">
          <span style="color: #ffb300; font-size: 20px;">💸</span>
        </div>
        <div>
          <h3 style="color: #f8fafc; margin: 0 0 8px 0;">Rising Infrastructure Costs</h3>
          <p style="color: #9ca3af; margin: 0; line-height: 1.5;">
            Optimize queries, serverless execution, and caching to reduce compute overhead and latency.
          </p>
        </div>
      </div>
    </div>

  </div>
</div>

<!--
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  05. PROOF OF COMPETENCE :: ENGINEERED SYSTEMS
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
-->

<div align="center">
  <!-- Section Divider -->
  <svg width="80%" height="20" xmlns="http://www.w3.org/2000/svg">
    <line x1="0" y1="10" x2="100%" y2="10" stroke="url(#cyberGradient)" stroke-width="1" stroke-dasharray="5,5"/>
  </svg>

  <h2 style="color: #00e0ff; margin: 40px 0 24px 0; font-family: 'Inter', sans-serif; font-weight: 600;">
    📈 PROOF OF COMPETENCE — ENGINEERED SYSTEMS
  </h2>
</div>

<div align="center" style="max-width: 1000px; margin: 0 auto; padding: 0 20px;">
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; margin-bottom: 48px;">

    <!-- Project 1 -->
    <div style="background: linear-gradient(145deg, #111827, #0b0f19); border: 1px solid rgba(0, 224, 255, 0.2); border-radius: 12px; padding: 28px; text-align: left; position: relative; overflow: hidden;">
      <div style="position: absolute; top: 0; right: 0; width: 60px; height: 60px; background: linear-gradient(135deg, rgba(0, 224, 255, 0.1), transparent); border-radius: 0 12px 0 60px;"></div>
      <div style="display: flex; align-items: center; margin-bottom: 20px;">
        <div style="background: rgba(0, 224, 255, 0.1); width: 48px; height: 48px; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-right: 16px;">
          <span style="color: #00e0ff; font-size: 24px;">🧩</span>
        </div>
        <div>
          <h3 style="color: #f8fafc; margin: 0 0 4px 0;">High-Security Booking Platform</h3>
          <p style="color: #00e0ff; margin: 0; font-size: 14px;">Full-Stack MERN • JWT/Session Auth</p>
        </div>
      </div>
      <p style="color: #9ca3af; line-height: 1.6; margin-bottom: 24px;">
        Architected a full-stack MERN booking engine with dual authentication systems for enterprise-level security.
      </p>
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span style="background: rgba(0, 224, 255, 0.1); color: #00e0ff; padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: 600;">
          ~35% Efficiency Gain
        </span>
        <a href="https://github.com/MUbaidJavaid" style="color: #00e0ff; text-decoration: none; font-size: 14px; display: flex; align-items: center;">
          Explore →
        </a>
      </div>
    </div>

    <!-- Project 2 -->
    <div style="background: linear-gradient(145deg, #111827, #0b0f19); border: 1px solid rgba(0, 255, 157, 0.2); border-radius: 12px; padding: 28px; text-align: left; position: relative; overflow: hidden;">
      <div style="position: absolute; top: 0; right: 0; width: 60px; height: 60px; background: linear-gradient(135deg, rgba(0, 255, 157, 0.1), transparent); border-radius: 0 12px 0 60px;"></div>
      <div style="display: flex; align-items: center; margin-bottom: 20px;">
        <div style="background: rgba(0, 255, 157, 0.1); width: 48px; height: 48px; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-right: 16px;">
          <span style="color: #00ff9d; font-size: 24px;">🌍</span>
        </div>
        <div>
          <h3 style="color: #f8fafc; margin: 0 0 4px 0;">High-Traffic Content System</h3>
          <p style="color: #00ff9d; margin: 0; font-size: 14px;">Accessibility-First • Global UX</p>
        </div>
      </div>
      <p style="color: #9ca3af; line-height: 1.6; margin-bottom: 24px;">
        Built an accessibility-first platform with perfect 100/100 A11y scores, optimized for global user reach.
      </p>
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span style="background: rgba(0, 255, 157, 0.1); color: #00ff9d; padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: 600;">
          100/100 A11y Score
        </span>
        <a href="https://github.com/MUbaidJavaid" style="color: #00ff9d; text-decoration: none; font-size: 14px; display: flex; align-items: center;">
          Explore →
        </a>
      </div>
    </div>

    <!-- Project 3 -->
    <div style="background: linear-gradient(145deg, #111827, #0b0f19); border: 1px solid rgba(255, 179, 0, 0.2); border-radius: 12px; padding: 28px; text-align: left; position: relative; overflow: hidden;">
      <div style="position: absolute; top: 0; right: 0; width: 60px; height: 60px; background: linear-gradient(135deg, rgba(255, 179, 0, 0.1), transparent); border-radius: 0 12px 0 60px;"></div>
      <div style="display: flex; align-items: center; margin-bottom: 20px;">
        <div style="background: rgba(255, 179, 0, 0.1); width: 48px; height: 48px; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-right: 16px;">
          <span style="color: #ffb300; font-size: 24px;">⚙️</span>
        </div>
        <div>
          <h3 style="color: #f8fafc; margin: 0 0 4px 0;">CI/CD & Legacy Refactor</h3>
          <p style="color: #ffb300; margin: 0; font-size: 14px;">TypeScript Migration • Automation</p>
        </div>
      </div>
      <p style="color: #9ca3af; line-height: 1.6; margin-bottom: 24px;">
        Migrated legacy JavaScript codebases to TypeScript and automated deployment pipelines for enterprise teams.
      </p>
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span style="background: rgba(255, 179, 0, 0.1); color: #ffb300; padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: 600;">
          ~40% Friction Reduction
        </span>
        <a href="https://github.com/MUbaidJavaid" style="color: #ffb300; text-decoration: none; font-size: 14px; display: flex; align-items: center;">
          Explore →
        </a>
      </div>
    </div>

  </div>
</div>

<!--
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  06. VALUE PROPOSITION :: WHY TEAMS CHOOSE ME
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
-->

<div align="center">
  <!-- Section Divider -->
  <svg width="80%" height="20" xmlns="http://www.w3.org/2000/svg">
    <line x1="0" y1="10" x2="100%" y2="10" stroke="url(#cyberGradient)" stroke-width="1" stroke-dasharray="5,5"/>
  </svg>

  <h2 style="color: #00e0ff; margin: 40px 0 24px 0; font-family: 'Inter', sans-serif; font-weight: 600;">
    🤝 WHY SERIOUS TEAMS CHOOSE MY ENGINEERING
  </h2>
</div>

<div align="center" style="max-width: 800px; margin: 0 auto; padding: 0 20px;">
  <div style="display: flex; flex-direction: column; gap: 20px; margin-bottom: 48px;">

    <div style="display: flex; align-items: center; background: linear-gradient(90deg, rgba(0, 224, 255, 0.05), transparent); padding: 20px; border-radius: 12px; text-align: left;">
      <div style="margin-right: 20px;">
        <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #00e0ff, #0b0f19); border-radius: 10px; display: flex; align-items: center; justify-content: center;">
          <span style="color: #0b0f19; font-size: 20px;">🎯</span>
        </div>
      </div>
      <div>
        <h3 style="color: #f8fafc; margin: 0 0 8px 0;">Architectural Foresight</h3>
        <p style="color: #9ca3af; margin: 0; line-height: 1.6;">
          I anticipate bottlenecks before they become expensive problems—engineering systems that scale predictably.
        </p>
      </div>
    </div>

    <div style="display: flex; align-items: center; background: linear-gradient(90deg, rgba(0, 255, 157, 0.05), transparent); padding: 20px; border-radius: 12px; text-align: left;">
      <div style="margin-right: 20px;">
        <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #00ff9d, #0b0f19); border-radius: 10px; display: flex; align-items: center; justify-content: center;">
          <span style="color: #0b0f19; font-size: 20px;">💬</span>
        </div>
      </div>
      <div>
        <h3 style="color: #f8fafc; margin: 0 0 8px 0;">Clear Business Communication</h3>
        <p style="color: #9ca3af; margin: 0; line-height: 1.6;">
          I translate technical debt into clear risk-vs-reward decisions that align with business objectives.
        </p>
      </div>
    </div>

    <div style="display: flex; align-items: center; background: linear-gradient(90deg, rgba(197, 182, 227, 0.05), transparent); padding: 20px; border-radius: 12px; text-align: left;">
      <div style="margin-right: 20px;">
        <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #c5b6e3, #0b0f19); border-radius: 10px; display: flex; align-items: center; justify-content: center;">
          <span style="color: #0b0f19; font-size: 20px;">⚡</span>
        </div>
      </div>
      <div>
        <h3 style="color: #f8fafc; margin: 0 0 8px 0;">High Execution Velocity</h3>
        <p style="color: #9ca3af; margin: 0; line-height: 1.6;">
          pnpm, Turbopack caching, and clean workflows keep development velocity high without sacrificing quality.
        </p>
      </div>
    </div>

    <div style="display: flex; align-items: center; background: linear-gradient(90deg, rgba(255, 179, 0, 0.05), transparent); padding: 20px; border-radius: 12px; text-align: left;">
      <div style="margin-right: 20px;">
        <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #ffb300, #0b0f19); border-radius: 10px; display: flex; align-items: center; justify-content: center;">
          <span style="color: #0b0f19; font-size: 20px;">🏛️</span>
        </div>
      </div>
      <div>
        <h3 style="color: #f8fafc; margin: 0 0 8px 0;">Strong Engineering Standards</h3>
        <p style="color: #9ca3af; margin: 0; line-height: 1.6;">
          ESLint, Prettier, and consistent design systems are enforced by default—reducing cognitive load and bugs.
        </p>
      </div>
    </div>

  </div>
</div>

<!--
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  07. FINAL CTA :: ENGINEERED CONNECTION
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
-->

<div align="center">
  <!-- Section Divider -->
  <svg width="80%" height="20" xmlns="http://www.w3.org/2000/svg">
    <line x1="0" y1="10" x2="100%" y2="10" stroke="url(#cyberGradient)" stroke-width="1" stroke-dasharray="5,5"/>
  </svg>

  <div style="max-width: 700px; margin: 60px auto 40px; padding: 40px; background: linear-gradient(145deg, #111827, #0b0f19); border: 1px solid rgba(0, 224, 255, 0.2); border-radius: 16px; position: relative; overflow: hidden;">

    <!-- Animated Background Elements -->
    <div style="position: absolute; top: 0; left: 0; width: 100px; height: 100px; background: radial-gradient(circle, rgba(0, 224, 255, 0.1), transparent 70%);"></div>
    <div style="position: absolute; bottom: 0; right: 0; width: 150px; height: 150px; background: radial-gradient(circle, rgba(0, 255, 157, 0.1), transparent 70%);"></div>

    <h2 style="color: #00e0ff; margin: 0 0 16px 0; font-family: 'Inter', sans-serif; font-weight: 600; position: relative;">
      THE NEXT STEP
    </h2>

    <p style="color: #c5b6e3; margin: 0 0 32px 0; line-height: 1.6; font-size: 18px; position: relative;">
      I work with a limited number of high-impact teams who value performance, clarity, and long-term thinking.
    </p>

    <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 24px; margin-bottom: 32px; position: relative;">
      <a href="mailto:ubaidjaved500@gmail.com" style="display: inline-flex; align-items: center; background: linear-gradient(135deg, #00e0ff, #0b0f19); color: #0b0f19; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; transition: all 0.3s ease;">
        <span style="margin-right: 10px;">📧</span> ubaidjaved500@gmail.com
      </a>
      <a href="https://mubaidjavaid.vercel.app" style="display: inline-flex; align-items: center; background: linear-gradient(135deg, #00ff9d, #0b0f19); color: #0b0f19; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; transition: all 0.3s ease;">
        <span style="margin-right: 10px;">🌐</span> mubaidjavaid.vercel.app
      </a>
    </div>

    <p style="color: #9ca3af; font-style: italic; margin: 0; font-size: 14px; position: relative;">
      "Software is easy. Engineering is hard. Let's do the latter."
    </p>

  </div>
</div>

<!--
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  08. FOOTER :: ARCHITECTURE SIGNATURE
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
-->

<div align="center" style="margin-top: 60px; padding: 30px 0; border-top: 1px solid rgba(0, 224, 255, 0.1);">

  <div style="display: flex; justify-content: center; align-items: center; gap: 20px; margin-bottom: 20px;">
    <span style="width: 40px; height: 1px; background: linear-gradient(90deg, transparent, #00e0ff, transparent);"></span>
    <span style="color: #00e0ff; font-size: 14px;">ENGINEERED WITH PRECISION</span>
    <span style="width: 40px; height: 1px; background: linear-gradient(90deg, transparent, #00e0ff, transparent);"></span>
  </div>

  <div style="color: #6b7280; font-size: 12px; letter-spacing: 1px;">
    © 2024 UBAID JAVAID • SENIOR MERN ARCHITECT • SYSTEMS DESIGNER
  </div>

  <div style="margin-top: 20px;">
    <a href="https://github.com/MUbaidJavaid" style="text-decoration: none;">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle; margin-right: 8px;">
        <path d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z" fill="#9ca3af"/>
      </svg>
      <span style="color: #9ca3af; font-size: 12px;">github.com/MUbaidJavaid</span>
    </a>
  </div>

</div>

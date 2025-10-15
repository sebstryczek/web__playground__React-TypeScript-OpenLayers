# React TypeScript OpenLayers Playground

## 🏗️ Project Structure

```
├── public/
│   ├── linie.geojson              # Input data
│   └── wojewodztwa.geojson        # Input data
├── src/
│   ├── App.tsx                    # Main application component
│   ├── main.tsx                   # Application entry point
│   ├── index.css                  # Global styles
│   ├── map/                       # Map-related modules
│   │   ├── core/                  # Core map functionality
│   │   │   ├── constants.ts
│   │   │   ├── createMap.ts
│   │   │   ├── typeGuards.ts
│   │   │   └── types.ts
│   │   ├── layers/                # Map layer implementations
│   │   │   ├── index.ts
│   │   │   ├── linesLayer/
│   │   │   ├── maskLayer/
│   │   │   ├── osmLayer/
│   │   │   └── voivodeshipsLayer/
│   │   ├── react/                 # React integration
│   │   │   ├── components/        # Map-related React components
│   │   │   │   └── MapComponent.tsx
│   │   │   ├── context/           # React context for map state
│   │   │   │   └── MapContext.tsx
│   │   │   └── hooks/             # Custom React hooks
│   │   │       ├── useMap.ts
│   │   │       └── useMapInitializer.ts
│   │   └── utils/                 # Map utility functions
│   │       ├── createWorldPolygon.ts
│   │       ├── extractCoordinates.ts
│   │       ├── getLayerId.ts
│   │       ├── getLayerTitle.ts
│   │       ├── getProjection.ts
│   │       ├── mergeFeatureGeometries.ts
│   │       └── setupProj4.ts
│   └── ui/                        # User interface components
│       └── layout/
│           └── Sidebar/           # Sidebar component with styling
├── docker-compose.yml             # Docker configuration
├── vite.config.ts                 # Vite build configuration
├── tsconfig.json                  # TypeScript configuration
├── eslint.config.js               # ESLint configuration
└── package.json                   # Project dependencies and scripts
```

## 📋 Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn package manager

## 🚀 Getting Started

### Development Mode

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to `http://localhost:3000` to see the application running.

### Building for Production

1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Preview the production build**:
   ```bash
   npm run preview
   ```

The built files will be generated in the `dist/` directory.

## 🧰 Available Scripts

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run lint:fix` - Run ESLint and automatically fix issues

## 🐳 Docker Support

To run project in docker container:

```bash
docker-compose up
```

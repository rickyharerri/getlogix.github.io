# ZX Homepage - VitePress Project

A VitePress-based recreation of the zx homepage with custom theme and styling.

## Features

- **Hero Section**: Prominent display of zx branding and call-to-action
- **Features Grid**: Showcases the three main benefits (Simple, Powerful, Batteries included)
- **Custom Theme**: Gradient styling and responsive design
- **Navigation**: Clean navigation with documentation links
- **Footer**: Project disclaimer and social links

## Development

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

This will start the VitePress development server at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Build

```bash
npm run serve
```

## Project Structure

```
├── docs/
│   ├── .vitepress/
│   │   ├── config.ts          # VitePress configuration
│   │   └── theme/
│   │       ├── index.js       # Theme entry point
│   │       └── custom.css     # Custom styling
│   ├── public/
│   │   └── img/
│   │       ├── logo.svg       # ZX logo
│   │       └── logo.png       # ZX logo (PNG)
│   ├── index.md               # Homepage content
│   ├── getting-started.md     # Documentation page
│   └── setup.md               # Documentation page
├── package.json
└── README.md
```

## Customization

### Theme

The custom theme is located in `docs/.vitepress/theme/` and includes:
- Gradient colors for hero text
- Background effects
- Responsive design

### Configuration

Main configuration is in `docs/.vitepress/config.ts` with:
- Site metadata
- Navigation structure
- Footer content
- Social links

### Content

Homepage content is defined in `docs/index.md` using VitePress frontmatter format.

## Technologies Used

- **VitePress**: Static site generator
- **Vue.js**: Component framework (used by VitePress)
- **CSS Custom Properties**: For theming
- **TypeScript**: Configuration files

## License

Based on the original zx project by Google.

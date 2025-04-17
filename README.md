# ReacUI Website

This is the documentation and showcase website for ReacUI, a React UI library with customizable components.

## Features

- Built with Next.js 14 and App Router
- Dark/light mode support using next-themes
- Interactive component playground with react-live
- Documentation using MDX
- Blog section for tutorials and updates

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/reacui.git
cd reacui/website
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

- `/app`: Next.js App Router pages and components
  - `/components`: Components page and individual component pages
  - `/docs`: Documentation pages
  - `/blog`: Blog pages
  - `/playground`: Interactive playground
- `/public`: Static assets (images, fonts, etc.)
- `/styles`: Global CSS and Tailwind configuration
- `/lib`: Utility functions and shared code

## Building for Production

```bash
npm run build
# or
yarn build
```

## Deployment

The website can be deployed to Vercel or any other hosting provider that supports Next.js.

### Deploying to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Freacui)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 
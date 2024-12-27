# OBOMS Client

A modern, responsive web client for the OBOMS (Online Business Operations Management System) platform. Built with React and featuring an elegant dark/light theme system.

## 🌟 Features

- **Modern UI/UX**: Clean, responsive interface with smooth transitions
- **Theme System**: Sophisticated dark/light mode with system preference detection
- **Performance Optimized**: Lazy loading and optimized image components
- **Secure Authentication**: Protected routes and secure session management

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- pnpm (v7 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd ObomsClient
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your configuration values.

4. Start the development server:
   ```bash
   pnpm dev
   ```

## 🛠️ Tech Stack

- **Framework**: React
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Data Fetching**: React Query
- **Routing**: React Router
- **Package Manager**: pnpm

## 📚 Documentation

Detailed documentation is available in the `docs` directory:

- [Architecture Overview](docs/ARCHITECTURE.md)
- [Component Documentation](docs/COMPONENTS.md)
- [Theme System](docs/THEMING.md)

## 🔧 Development

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier

### Project Structure

```
client/
├── docs/               # Documentation
├── public/            # Static assets
├── src/
│   ├── components/    # Reusable components
│   ├── context/       # React context providers
│   ├── lib/          # Library configurations
│   ├── pages/        # Page components
│   ├── routes/       # Routing configuration
│   ├── store/        # Redux store setup
│   └── utils/        # Utility functions
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

# Pomodoro Electron

A desktop Pomodoro timer application built with Electron, React, and TypeScript.

## Features

- 🍅 Pomodoro timer with standard 25-minute work sessions
- ⏸️ Start, pause, and reset controls
- 🔔 Notifications when timer completes
- 💻 Cross-platform support (Windows, macOS, Linux)
- ⚡ Built with Electron for native desktop performance
- 🎨 Modern UI built with React

## Prerequisites

Before you begin, ensure you have the following installed:

### All Platforms

- **Node.js** (v18 or later) - [Download](https://nodejs.org/)
- **npm** (v9 or later, usually comes with Node.js)

### Windows Only

- **Visual Studio 2022 Community Edition** with the "Desktop development with C++" module is required for compiling/testing in Windows systems
  - This is needed to build native modules that may be required by Electron dependencies

### macOS

- **Xcode Command Line Tools**:
  ```bash
  xcode-select --install
  ```

### Linux

- **Build essentials**:
  ```bash
  # Debian/Ubuntu
  sudo apt-get install build-essential python3

  # Fedora/CentOS
  sudo yum install gcc gcc-c++ make python3
  ```

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/giulitz189/pomodoro-electron.git
   cd pomodoro-electron
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Development

### Available Scripts

- **Start development server**:
  ```bash
  npm start
  ```
  This launches the application in development mode with hot-reload enabled.

- **Build the application**:
  ```bash
  npm run package
  ```
  Creates a packaged version of the application.

- **Create installers**:
  ```bash
  npm run make
  ```
  Generates platform-specific installers (MSI for Windows, DMG for macOS, RPM/DEB for Linux).

- **Release**:
  ```bash
  npm run release
  ```
  Creates a full release with all installers.

- **Linting**:
  ```bash
  # Check code style and lint errors
  npm run lint

  # Fix code style and lint errors automatically
  npm run lint:fix
  ```

- **Type checking**:
  ```bash
  npm run typecheck
  ```
  Performs TypeScript type checking without emitting files.

## Project Structure

```
pomodoro-electron/
├── src/
│   ├── main.ts           # Electron main process
│   ├── renderer.ts       # Renderer process entry point
│   ├── preload.ts        # Preload script for IPC
│   ├── app.tsx           # Root React component
│   ├── index.html        # Main HTML file
│   ├── index.css         # Global styles
│   └── app/
│       ├── main.tsx      # Main component
│       └── main.scss     # Component styles
├── webpack.*.config.ts   # Webpack configuration files
├── forge.config.mts      # Electron Forge configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies and scripts
```

## Technology Stack

- **[Electron](https://www.electronjs.org/)** - Framework for building desktop applications
- **[React](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Electron Forge](https://www.electronforge.io/)** - Build tools for Electron
- **[Webpack](https://webpack.js.org/)** - Module bundler
- **[Sass](https://sass-lang.com/)** - CSS preprocessor
- **[OxLint](https://oxc-project.github.io/docs/guide/linter.html)** - Fast, modern linter

## Building Installers

The project is configured to create installers for multiple platforms:

- **Windows**: MSI installer via MakerSquirrel
- **macOS**: ZIP archive
- **Linux**: RPM and DEB packages

Run `npm run make` to generate platform-specific installers.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

**Giuliano 'OneHalf' Gradilone** - [klaimer671@gmail.com](mailto:klaimer671@gmail.com)

## Troubleshooting

### Windows Build Issues

If you encounter build issues on Windows:
1. Ensure Visual Studio 2022 Community Edition with "Desktop development with C++" module is installed
2. Run the installation as Administrator
3. Restart your terminal after installation

### Module Not Found Errors

If you get module not found errors:
```bash
npm install
npm run typecheck  # Verify TypeScript compilation
npm start          # Start the development server
```

### Port Already in Use

If the development server fails to start due to port conflicts, the port can be configured in the Webpack configuration files.
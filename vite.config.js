import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // abre o navegador automaticamente
    port: 3000 // pode alterar a porta se necessário
  }
});

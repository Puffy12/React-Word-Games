import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import replace from '@rollup/plugin-replace';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

// Extract environment variables
const { RESEND_API_KEY } = process.env;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    replace({
      preventAssignment: true,
      values: {
        'process.env.RESEND_API_KEY': JSON.stringify(RESEND_API_KEY),
      },
    }),
  ],
});
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import replace from '@rollup/plugin-replace';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

// Extract environment variables
const { SERVICE_ID, TEMPLATE_ID, USER_ID } = process.env;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    replace({
      preventAssignment: true,
      values: {
        'process.env.SERVICE_ID': JSON.stringify(SERVICE_ID),
        'process.env.TEMPLATE_ID': JSON.stringify(TEMPLATE_ID),
        'process.env.USER_ID': JSON.stringify(USER_ID),
      },
    }),
  ],
});

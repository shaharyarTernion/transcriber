/** @format */

import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Material Dashboard inspired color palette
        primary: {
          50: '#fdf2f8',
          100: '#fce7f3',
          500: '#e91e63',
          600: '#d81b60',
          700: '#c2185b',
          900: '#ad1457',
        },
        info: {
          50: '#e3f2fd',
          100: '#bbdefb',
          500: '#1A73E8',
          600: '#1662C4',
          700: '#1565c0',
          900: '#0d47a1',
        },
        success: {
          50: '#e8f5e8',
          100: '#c8e6c9',
          500: '#4CAF50',
          600: '#43a047',
          700: '#388e3c',
          900: '#1b5e20',
        },
        warning: {
          50: '#fff3e0',
          100: '#ffe0b2',
          500: '#fb8c00',
          600: '#f57c00',
          700: '#ef6c00',
          900: '#e65100',
        },
        error: {
          50: '#ffebee',
          100: '#ffcdd2',
          500: '#F44335',
          600: '#e53935',
          700: '#d32f2f',
          900: '#b71c1c',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          500: '#344767',
          600: '#2c3c58',
          700: '#1e293b',
          800: '#0f172a',
          900: '#020617',
        },
        gray: {
          50: '#f8f9fa',
          100: '#f1f3f4',
          200: '#e8eaed',
          300: '#dadce0',
          400: '#bdc1c6',
          500: '#9aa0a6',
          600: '#80868b',
          700: '#5f6368',
          800: '#3c4043',
          900: '#202124',
        },
        background: {
          DEFAULT: '#f0f2f5',
          secondary: '#ffffff',
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #EC407A 0%, #D81B60 100%)',
        'gradient-info': 'linear-gradient(135deg, #49a3f1 0%, #1A73E8 100%)',
        'gradient-success': 'linear-gradient(135deg, #66BB6A 0%, #43A047 100%)',
        'gradient-warning': 'linear-gradient(135deg, #FFA726 0%, #FB8C00 100%)',
        'gradient-error': 'linear-gradient(135deg, #EF5350 0%, #E53935 100%)',
        'gradient-dark': 'linear-gradient(135deg, #42424a 0%, #191919 100%)',
      },
      boxShadow: {
        'material': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'material-lg': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'colored-primary': '0 4px 20px 0 rgba(233, 30, 99, 0.14)',
        'colored-info': '0 4px 20px 0 rgba(26, 115, 232, 0.14)',
        'colored-success': '0 4px 20px 0 rgba(76, 175, 80, 0.14)',
        'colored-warning': '0 4px 20px 0 rgba(251, 140, 0, 0.14)',
        'colored-error': '0 4px 20px 0 rgba(244, 67, 53, 0.14)',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
});

export default config;

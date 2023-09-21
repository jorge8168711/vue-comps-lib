import { defineConfig } from 'vite'
import { resolve } from "path";
import typescript2 from 'rollup-plugin-typescript2';
import dts from "vite-plugin-dts";

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
    typescript2({
      check: false,
      include: ["src/components/**/*.vue"],
      tsconfigOverride: {
        compilerOptions: {
          outDir: "dist",
          sourceMap: true,
          declaration: true,
          declarationMap: true,
        },
      },
      exclude: ["vite.config.ts"]
    })
  ],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      // src/indext.ts is where we have exported the component(s)
      entry: resolve(__dirname, "src/components/main.ts"),
      name: "MyComLib",
      // the name of the output files when the build is run
      fileName: "my-com-lib",
    },
    rollupOptions: {
      // make sure to externalize deps that should not be bundled
      // into your library
      input: {
        main: resolve(__dirname, "src/components/main.ts")
      },
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        exports: "named",
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})

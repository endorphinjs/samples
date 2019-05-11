import fs from 'fs';
import path from 'path';
import endorphin from '@endorphinjs/rollup-plugin-endorphin';
import sass from 'sass';
import autoprefixer from 'autoprefixer';
import postcss from 'postcss';
import typescript from 'rollup-plugin-typescript';
import nodeResolve from 'rollup-plugin-node-resolve';
import { sync as mkdirp } from 'mkdirp';

export default {
	input: './src/app.ts',
	plugins: [
		nodeResolve(), 
		typescript(),
		endorphin({
			css: {
				preprocess(type, data, file) {
					// Detect stylesheet type: CSS, SCSS etc.
					// Detect it either from `type` argument (a `type="..." attribute
					// value of tag that contains stylesheet) or from file name 
					// (for external stylesheets)
					if (type === 'scss' || (file && file.endsWith('.scss'))) {
						return sass.renderSync({
							data, file,

							// Required for proper source map generation
							outFile: file,
							sourceMap: true,
							sourceMapContents: true
						});
					}
				},
				// Post-process generated CSS
				async bundle(code, map) {
					const destFile = './dist/app.css';
					const absPath = path.resolve(__dirname, destFile);
					const processed = await postcss([autoprefixer]).process(code, {
						from: void 0,
						to: destFile,
						map: map && {
							prev: map.toJSON(),
							annotation: true
						}
					});

					mkdirp(path.dirname(absPath));
					fs.writeFileSync(absPath, processed.css);
					if (processed.map) {
						fs.writeFileSync(`${absPath}.map`, processed.map.toString());
					}
				}
			}
		})
	],
	output: {
		file: './dist/app.js',
		format: 'iife',
		sourcemap: true
	}
}

import endorphin from '@endorphinjs/rollup-plugin-endorphin';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
	input: './src/app.js',
	plugins: [
		nodeResolve(), 
		endorphin({
			css: {
				// Path to store generated CSS
				bundle: './dist/app.css'
			}
		})
	],
	output: {
		file: './dist/app.js',
		format: 'iife',
		sourcemap: true
	}
}
import fs from 'fs';
import path from 'path';
import { sync as mkdirp } from 'mkdirp';
import nodeResolve from '@rollup/plugin-node-resolve';
import tslint from 'rollup-plugin-tslint';
import typescript from '@rollup/plugin-typescript';
import endorphin from '@endorphinjs/rollup-plugin-endorphin';
import sass from 'sass';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/app.js',
        format: 'iife',
        sourcemap: true
    },
    plugins: [
        tslint(),
        nodeResolve(),
        typescript(),
        endorphin({
            css: {
                preprocess(type, data, file) {
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
                async name(code, map) {
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
        }),
    ]
};

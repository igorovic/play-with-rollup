import { createFilter } from 'rollup-pluginutils';
import { readFileSync } from 'fs';

export default function importNjk(options = {}) {
    const filter = createFilter( "**/*.njk" );
    return {
        name: 'import-njk',
        /* async transform(code) {
            console.log(code)
            return `module.exports = Promise.reolve(()=>${code});`;
        }, */
        /* renderDynamicImport({targetModuleId}) {
            console.log('targetModuleId', targetModuleId)
            return {
              left: 'const base = ',
              right: ';'
            }
        } */
        load ( id ) {
			if ( !filter( id ) ) return null;

			const data = readFileSync( id, 'base64' );
			const code = `const tmpl = '${data}'; const buf = Buffer.from(tmpl, 'base64'); function Template(){return buf.toString();}; export default Template;`;
            console.log(id, data)
			const ast = {
				type: 'Program',
				sourceType: 'module',
				start: 0,
				end: null,
				body: []
			};

			return { ast, code, map: { mappings: '' } };
		},

        transform(code, id) {
            console.log('transform', code);
			if (filter(id)) {
				const x = {
					code,
					map: { mappings: '' }
				};

				return x;
			}
		}
        
    }
}
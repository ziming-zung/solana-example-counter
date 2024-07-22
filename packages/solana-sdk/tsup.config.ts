import { defineConfig, getDefaultConfig } from '@layerzerolabs/tsup-config-next'

const { default: packageJson } = await import('@layerzerolabs/lz-v2-utilities/package.json', {
    assert: { type: 'json' },
})

export default defineConfig({
    ...getDefaultConfig(),
    entry: ['src/index.ts'],
    noExternal: ['@layerzerolabs/lz-v2-utilities'],
    external: [...Object.keys(packageJson.dependencies)],
})

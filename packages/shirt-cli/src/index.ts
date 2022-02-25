import { cac } from 'cac'
import { version } from '../package.json'

const cli = cac('shirt')

cli.command('init <name>', 'Init a project with default templete').action(async (name: string) => {
  console.log(name)
})

cli
  .command('build', 'Init a project with default templete')
  .option('-c, --config <dir>', `[string] directory of rollup.build.js`)
  .option('-p, --platform <platform>', `[string] wx | alipay`)
  .action(async (name: string) => {
    console.log(name)
  })

cli.command('').action(async () => {
  cli.outputHelp()
})

cli.help()

cli.version(version)

cli.parse()

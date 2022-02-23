import { cac } from 'cac'

const cli = cac('shirt')

cli.command('init <name>', 'Init a project with default templete').action(async (name: string) => {
  console.log(name)
})

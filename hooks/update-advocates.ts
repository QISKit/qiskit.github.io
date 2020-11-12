import fs from 'fs'
import util from 'util'

import { fetchAdvocates } from './advocate-conversion-utils'

export default async function (apiKey: any, outputFolder: string) {
  const advocates = await fetchAdvocates(apiKey)

  const writeFile = util.promisify(fs.writeFile)
  await writeFile(`${outputFolder}/advocates.json`, JSON.stringify(advocates, null, 2))
}

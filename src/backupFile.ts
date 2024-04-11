import fs = require('fs/promises')

async function readFile (name: string) {
  try {
    const data = await fs.readFile(name, { encoding: 'utf8' })
    return data
  } catch (err) {
    console.log(err)
  }
}

async function statFile (name: string) {
  try {
    const stats = await fs.stat(name)
    const returnedText:string = 'size: ' + stats.size + ' blocks: ' + stats.blocks
    return returnedText
  } catch (err) {
    console.log(err)
  }
}

async function writeFile (name: string, content: string) {
  try {
    await fs.writeFile(name, content)
    return await statFile(name)
  } catch (err) {
    console.log(err)
  }
}

export async function createFileBackup (name: string) {
  try {
    const readData = await readFile(name)
    const writtenData = await writeFile(name + '.backup', readData!)
    console.log(writtenData)
  } catch (err) {
    console.log(err)
  }
}

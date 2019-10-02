const util = require('util');
const exec = util.promisify(require('child_process').exec);

const seq = `yarn sequelize`;
const m_create = `${seq} model:create --name`;

const commands = [
  // 'yarn sequelize db:drop',
  // 'yarn sequelize db:migration:undo:all',
  // 'yarn sequelize db:create',
  `${m_create} user --attributes name:string,email:string,password_hash:string`,
  `${m_create} venda --attributes userId:integer,produtoId:integer`,
  `${m_create} produto --attributes name:string,valor:integer`,
  `${seq} db:migrate`
];

async function run() {
  for (let command of commands) {
    const { stdout, stderr } = await exec(command);
    if (stderr) console.log('stderr:', stderr);
    console.log('stdout:', stdout);
  }

  // const { stdout, stderr } = await exec('ls');
  // console.log('stdout:', stdout);
  // console.log('stderr:', stderr);
}

run();

import * as core from '@actions/core';

async function run() {
  try {
    const myInput = core.getInput('myInput');
    core.debug(`Hello ${myInput}`);
    core.setOutput("myOutput",myInput)
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

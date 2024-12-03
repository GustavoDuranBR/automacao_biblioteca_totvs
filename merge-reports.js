const mochawesomeMerge = require('mochawesome-merge');
const fs = require('fs');
const { exec } = require('child_process');

module.exports = (on, config) => {
  on('after:run', () => {
    // Listar os arquivos JSON gerados
    const reports = ['cypress/results/mochawesome/*.json'];

    // Mesclar os relatórios em um único arquivo
    mochawesomeMerge(reports)
      .then((mergedJson) => {
        // Salvar o relatório combinado em um único arquivo
        fs.writeFileSync('cypress/results/merged-report.json', JSON.stringify(mergedJson, null, 2));
      })
      .catch((error) => {
        console.error('Erro ao mesclar relatórios:', error);
      });
  });
};

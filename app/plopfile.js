export default function (plop) {
    // Gerador para componentes
    plop.setGenerator('component', {
      description: 'Create a new component',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'Component name:',
        },
      ],
      actions: [
        {
          type: 'add',
          path: 'src/components/{{pascalCase name}}.tsx',
          templateFile: 'plop-templates/Component.tsx.hbs',
        },
      ],
    });
  
    // Gerador para páginas
    plop.setGenerator('page', {
      description: 'Create a new page',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'Page name:',
        },
      ],
      actions: [
        {
          type: 'add',
          path: 'src/pages/{{pascalCase name}}.tsx',
          templateFile: 'plop-templates/Page.tsx.hbs',
        },
      ],
    });
  }
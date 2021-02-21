// eslint-disable-next-line import/no-extraneous-dependencies
import { NodePlopAPI } from 'plop';

module.exports = (plop: NodePlopAPI) => {
  plop.setGenerator('Component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/Components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/component.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/Components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/index.tsx.hbs',
      },
      {
        type: 'add',
        path:
          '../src/Components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/stories.tsx.hbs',
      },
      {
        type: 'modify',
        path: '../src/Components/index.ts',
        transform: (template: string, { name }: { name: string }) =>
          `${template.replace(
            /\\n$/,
            ''
          )}export { default as ${name} } from './${name}';\nexport type { ${name}Props } from './${name}';\n`,
      },
    ],
  });

  plop.setGenerator('Page', {
    description: 'Create a page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your page name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../Pages/{{lowerCase name}}.tsx',
        templateFile: 'templates/Pages.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/Pages/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/Pages/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/component.tsx.hbs',
      },
      {
        type: 'modify',
        path: '../src/Pages/index.ts',
        transform: (template: string, { name }: { name: string }) =>
          `${template.replace(
            /\\n$/,
            ''
          )}export { default as ${name}Page } from './${name}';\n`,
      },
    ],
  });
};

import { KanbanBoard } from '.';

const toDoColumn = {
  id: 1,
  title: 'To Do',
  tasks: [
    {
      id: 11,
      title: 'Integrar a autenticação de usuário',
      description:
        'Integrar a autenticação de usuário, se necessário, para permitir que os usuários criem e editem issues',
      date: new Date(),
      hours: 2,
      status: 'toDo',
    },
    {
      id: 12,
      title: 'Adicionar uma funcionalidade de pesquisa',
      description:
        'Adicionar uma funcionalidade de pesquisa para encontrar issues específicas',
      date: new Date(),
      hours: 1,
      status: 'toDo',
    },
    {
      id: 13,
      title: 'Testar e depurar a aplicação Angular',
      description:
        'Testar e depurar a aplicação Angular para garantir que todas as funcionalidades estejam funcionando corretamente',
      date: new Date(),
      hours: 3,
      status: 'toDo',
    },
    {
      id: 14,
      title: 'Preparar a documentação do projeto',
      description:
        'Preparar a documentação do projeto, incluindo instruções de instalação e uso',
      date: new Date(),
      hours: 2,
      status: 'toDo',
    },
  ],
};

const inProgressColumn = {
  id: 2,
  title: 'In Progress',
  tasks: [
    {
      id: 6,
      title: 'Estilizar o componente de listagem de issues',
      description:
        'Estilizar o componente de listagem de issues com CSS ou um framework de estilos',
      date: new Date(),
      hours: 2,
      status: 'inProgress',
    },
    {
      id: 7,
      title: 'Conectar o serviço de busca de issues à API real',
      description:
        'Conectar o serviço de busca de issues à API real e obter dados reais',
      date: new Date(),
      hours: 3,
      status: 'inProgress',
    },
    {
      id: 8,
      title: 'Implementar a funcionalidade de edição de issues existentes',
      description:
        'Implementar a funcionalidade de edição de issues existentes',
      date: new Date(),
      hours: 2,
      status: 'inProgress',
    },
    {
      id: 9,
      title: 'Adicionar a capacidade de atribuir responsáveis às issues',
      description: 'Adicionar a capacidade de atribuir responsáveis às issues',
      date: new Date(),
      hours: 2,
      status: 'inProgress',
    },
    {
      id: 10,
      title: 'Implementar um sistema de comentários',
      description:
        'Implementar um sistema de comentários para as issues em andamento',
      date: new Date(),
      hours: 2,
      status: 'inProgress',
    },
  ],
};

const doneColumn = {
  id: 3,
  title: 'Done',
  tasks: [
    {
      id: 1,
      title: 'Criar o repositório do projeto no GitHub',
      description:
        'Configurar o ambiente de desenvolvimento para o projeto Angular',
      date: new Date(),
      hours: 1,
      status: 'done',
    },
    {
      id: 2,
      title: 'Criar a estrutura de diretórios do projeto',
      description:
        'Criar a estrutura de diretórios do projeto, incluindo os componentes, serviços e modelos necessários',
      date: new Date(),
      hours: 2,
      status: 'done',
    },
    {
      id: 3,
      title: 'Inicializar um novo projeto Angular',
      description: 'Inicializar um novo projeto Angular usando o Angular CLI',
      date: new Date(),
      hours: 2,
      status: 'done',
    },
    {
      id: 4,
      title: 'Definir os requisitos',
      description:
        'Definir os requisitos e funcionalidades principais do projeto',
      date: new Date(),
      hours: 2,
      status: 'done',
    },
    {
      id: 5,
      title: 'Criar componentes',
      description: 'Criar os componentes principais',
      date: new Date(),
      hours: 2,
      status: 'done',
    },
  ],
};

export const dataBoard: KanbanBoard = {
  lists: [toDoColumn, inProgressColumn, doneColumn],
};

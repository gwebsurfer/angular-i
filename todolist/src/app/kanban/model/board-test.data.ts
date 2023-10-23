import { KanbanBoard } from '.';

const toDoColumn = {
  id: 1,
  title: 'To Do',
  tasks: [
    {
      id: 11,
      description:
        'Integrar a autenticação de usuário, se necessário, para permitir que os usuários criem e editem issues',
    },
    {
      id: 12,
      description:
        'Adicionar uma funcionalidade de pesquisa para encontrar issues específicas',
    },
    {
      id: 13,
      description:
        'Testar e depurar a aplicação Angular para garantir que todas as funcionalidades estejam funcionando corretamente',
    },
    {
      id: 14,
      description:
        'Preparar a documentação do projeto, incluindo instruções de instalação e uso',
    },
  ],
};

const inProgressColumn = {
  id: 2,
  title: 'In Progress',
  tasks: [
    {
      id: 6,
      description:
        'Estilizar o componente de listagem de issues com CSS ou um framework de estilos',
    },
    {
      id: 7,
      description:
        'Conectar o serviço de busca de issues à API real e obter dados reais',
    },
    {
      id: 8,
      description:
        'Implementar a funcionalidade de edição de issues existentes',
    },
    {
      id: 9,
      description: 'Adicionar a capacidade de atribuir responsáveis às issues',
    },
    {
      id: 10,
      description:
        'Implementar um sistema de comentários para as issues em andamento',
    },
  ],
};

const doneColumn = {
  id: 3,
  title: 'Done',
  tasks: [
    {
      id: 1,
      description:
        'Configurar o ambiente de desenvolvimento para o projeto Angular',
    },
    {
      id: 2,
      description:
        'Criar a estrutura de diretórios do projeto, incluindo os componentes, serviços e modelos necessários',
    },
    {
      id: 3,
      description: 'Inicializar um novo projeto Angular usando o Angular CLI',
    },
    {
      id: 4,
      description:
        'Definir os requisitos e funcionalidades principais do projeto',
    },
    { id: 5, description: 'Criar os componentes principais' },
  ],
};

export const dataBoard: KanbanBoard = {
  lists: [toDoColumn, inProgressColumn, doneColumn],
};

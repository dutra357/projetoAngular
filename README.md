# Syllabus - Gestão de Ambiente Educacional

## Sobre o projeto

O sistema Syllabus consiste em uma aplicação web direcionada à gestão de um ambiente educacional, ela engloba o cadastramento de Professores, Alunos, Cursos, Turmas e Notas, bem como realiza a validação das informações de cadastro, notadamente aquelas pessoais.

A aplicação foi pensada de forma a reutilizar os componentes para melhor aproveitamento. A exemplo do componente 'card', serve tanto à exibição de professores quanto alunos. Os dados são preenchidos em conformidade com o usuário que estiver logado.

A reutilização dos componentes ainda é bem presente no menu lateral, gerando os botões, informações e funcionalidades próprios de cada usuário, assim como reaproveitado em cada rota de acesso.

Com a implementação de recursos de tecnologia da informação certamente poderemos imprimir agilidade e eficiência de gestão no trato administrativo de sistemas e estruturas de ensino, seja ele básico ou superior.

Não menos importante, ainda podemos citar a facilidade de acesso aos dados por parte de qualquer usuário por meio da rede mundial de computadores, disponibilizando as informações em qualquer tempo e local do globo, desde que provido de acesso a internet.


## Tecnologias utilizadas
### Front-end
- Angular
- JavaScript
- Typescript
- HTML, SCSS


## Clonar repositório
https://github.com/dutra357/projetoAngular

## Trello
https://trello.com/b/DraeKfFp/m2s11-projetoava


## Execução e cuidados

Execute `ng serve` para rodar o servidor de desenvolvimento. Pagina inicial em `http://localhost:4200/`. Aplicação automaticamente recarrecada com o salvamento de qualquer modificação.

Salientamos que o mokc é realocado no localStorage quando do carregamento da rota '/login'. Os dados ali carregados são assim alocados pelo construtor, não sendo 'zerados' com o logout. Caso o usuário prefira redefiní-los ao logar, sugerimos utilizar os métodos de 'starter' em conjunto com o método ngOnInit().

~~~javascript
ngOnInit() {
    this.loginService.start();
    this.turmasService.startTurmas();
}
~~~

Ademais, anotamos que fizemos uso de expressões regulares (RegEx) paraa formatação e validação de e-mails, telefones e cpf a serem inseridos nos campos de cadastro e login. Valores em desconformidade com o padrão não serão aceitos (000.000.000-00 , (xx)x xxxx-xxxx, etc.).

Informações e dados de login de cada usuário podem ser encontrados no login.service.ts, no diretório 'shared/services'.

Cadastros de senhas exigem 'passfrase' com mais de 8 caracteres, bem como os campos de nome (input).


## Projeto Angular

Projeto criado com através do [Angular CLI](https://github.com/angular/angular-cli), v. 18.0.5.


## Build

Execute `ng build` para realizar o build da aplicação.


## Considerações sobre login

O acesso inicial ao sistema pode se dar por meio de login com uma das contas 'mockadas', seja ela de administrador, docente ou aluno. Cada qual possui as suas funcionalidades e limitações, sendo a mais ampla delas, logicamente, o acesso na qualidade de  administrador.

A persistência dos dados, ausente o beck-end nesta fase, se dá pelo uso do recurso do localStorage, sendo os dados de usuários inicialmente carregados com o início da rota '/login' através do construtor.

Optamos pela via do construtor e não do ngOnInit() em razão de este último 'zerar' a persistência dos dados toda vez que acessa a página de '/login', assim o usuário/tester pdoe verificar a persistências dos dados mesmo após efetuar logout e acessar o sistema com um usuário de outro perfil.


## Melhorias a serem implementadas

Como sugestões ao aprimoramento do projeto podemos citar a implantação de um design profissional, que não foi aqui objetivo da aplicação, a integração dos dados e criação de tabelas de associação quando da integração com o beck-end, bem como.

Ainda, e não menos importante, o acréscimo de mais elementos de cadastro a serem adicionados às funcionalidades presentes, em atenção à eventuais peculiaridades ou necessidades do usuário final, a exemplo integração de turmas à grupos de cursos, cadastramento de outros profissionais que atuam em auxílio à atividade letiva, bem como funcionalidades de agendamento de atividades, solicitações para provas de recuperação etc.

Acrescentamos uma observação especial quanto aos 'cursos extras' disponibilizados ao usuario 'aluno', pois encontram-se mockados de forma fixa conforme solicitação do projeto. Neste ponto, anotamos que uma funcionalidade abrangente de atividades complementares, contando com cadastramento, agendamento e edição, seria uma excelente adesão ao projeto.


## Início - Página /home de usuário Adm

![MER](/modelo.jpg)


## Rotas disponibilizadas

/login - acesso inicial ao sistema.

/docentes ou /alunos - rota inicial (home) dos usuários Docente/Adm e Aluno, respectivamente.

/cadastroal - rota para cadastramento de alunos, acessível apenas a usuários Administradores.

/cadastroava - Cadastramento de avaliações/notas, para Docentes e Administradores.

/cadastrodoc - Cadastramento de docentes, acessível apenas a Administradores.

/cadastroturma - Cadastramento de turmas, disponível a Docentes e Administradores.

/listadoc - Listagem de Docentes cadastrados no sistema, exclusivo para Administradores.

/notas - Lista de notas/avaliações do aluno, com listagem em ordem cronológica, e disponível apenas para usuários do perfil Aluno.


## Autor

David Alves Dutra

contato: dadutra@hotmail.com
# Express-API

Esqueleto de um WebService com express expondo uma API com rota de autenticação com JWT, testes em Jest.

Scripts npm para iniciar o Docker-compose nos ambientes de produção, desenvolvimento e testes.

## Scripts npm para subir o Docker

O package.json tem os scripts prontos para executar o Docker no ambiente escolhido (desenvolvimento, produção e teste).

Os scripts têm a nomenclatura `docker-{ambiente}-{ação}`. Para subir o ambiente de desenvolvimento, por exemplo, execute:

```npm run docker-dev-up```

Os containeres geram sua própria pasta npm_modules e a mantêm em um volume virtual.

Isso significa que você pode instalar as suas dependências em qualquer sistema operacional e ao mesmo tempo subir os containeres que as instalações da npm_modules estão isoladas e não vão interferir uma na outra.

A ideia é usar o npm como ferramenta para o deploy e desenvolvimento. Com um comando você pode subir o ambiente escolhido.

Obs: Os scripts npm estão usando expansão de parâmetro de shell: `${npm_variable}`

Portanto não vão subir em linha de comando que não aceita esse recurso, como o cmd e PowerShell do Windows.


## referências

- Arquitetura do WS escrita em classes ES6 e testes Jest inspiradas no vídeo [Testes no NodeJS aplicando TDD com Jest](https://www.youtube.com/watch?v=2G_mWfG0DZE&t=639s) da Rocketseat
- Ambientes docker inspirados no projeto do [projeto docker](https://github.com/CloudNativeJS/docker) da [CloudNative.js](https://www.cloudnativejs.io/) e no projeto [livereload-nodejs-debug-docker](https://github.com/ErickWendel/livereload-nodejs-debug-docker) e no conceito [Docker-first](https://www.linkedin.com/posts/erickwendel_ser%C3%A1-que-realmente-vale-a-pena-usar-docker-activity-6635530851524333568-C4z_/) de Erick Wendel
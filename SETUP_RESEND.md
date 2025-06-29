# Configuração do Resend para Formulário de Contato

## Passos para configurar o Resend:

### 1. Criar conta no Resend
- Acesse [resend.com](https://resend.com)
- Crie uma conta gratuita
- Confirme seu email

### 2. Obter API Key
- Faça login no dashboard do Resend
- Vá para "API Keys" no menu lateral
- Clique em "Create API Key"
- Dê um nome para a chave (ex: "Portfolio Contact Form")
- Copie a chave gerada

### 3. Configurar variáveis de ambiente
- Abra o arquivo `.env.local` na raiz do projeto
- Substitua `your_resend_api_key_here` pela sua chave real:
```
RESEND_API_KEY=re_sua_chave_aqui
```

### 4. Configurar domínio (Opcional)
Para usar um domínio personalizado:
- No dashboard do Resend, vá para "Domains"
- Adicione seu domínio
- Configure os registros DNS conforme instruído
- Atualize o campo `from` em `app/actions/contact.ts`:
```typescript
from: "Portfólio <contato@seudominio.com>",
```

### 5. Testar o formulário
- Execute `yarn dev`
- Acesse a seção de contato
- Preencha e envie o formulário
- Verifique se o email foi recebido

## Limites da conta gratuita:
- 100 emails por dia
- 3.000 emails por mês
- Apenas domínio `onboarding@resend.dev` (sem domínio personalizado)

## Troubleshooting:
- Verifique se a API key está correta
- Confirme que o arquivo `.env.local` está na raiz do projeto
- Reinicie o servidor de desenvolvimento após alterar variáveis de ambiente
- Verifique os logs do console para erros específicos

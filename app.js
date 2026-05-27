const elementKeys = [
  "metrics",
  "economicBuyer",
  "decisionCriteria",
  "decisionProcess",
  "paperProcess",
  "identifyPain",
  "champion",
  "competition"
];

const copy = {
  en: {
    htmlLang: "en",
    nav: { signIn: "Sign In", signedIn: (name) => name, contact: "Contact" },
    auth: {
      eyebrow: "Deal repository",
      title: "Sign in to save your deals",
      body: "Sign in with email and password. If Firebase is configured, your deals sync to Firestore; otherwise they stay in this browser.",
      name: "Name",
      email: "Email",
      password: "Password",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@company.com",
      passwordPlaceholder: "At least 6 characters",
      submit: "Sign in",
      create: "Create account",
      close: "Close",
      signOut: "Sign out",
      firebaseReady: "Synced.",
      localFallback: "Saved on this browser.",
      authError: "Could not sign in. Check the email and password.",
      invalidCredential: "Wrong password or account method. Try again or create a new account with another email.",
      emailInUse: "This email already has an account. Use Sign in instead.",
      weakPassword: "Use at least 6 characters for the password.",
      forgotPassword: "Forgot password?",
      resetSent: "Password reset email sent. Check your inbox.",
      resetNoEmail: "Enter your email first.",
      resetUnavailable: "Password reset needs Firebase sync."
    },
    repository: {
      title: "Deal repository",
      signedOut: "Sign in to save deals",
      signedOutNote: "Sign in to save and switch deals.",
      signedIn: (name, count) => `${name}'s deals (${count})`,
      signedInNote: "Saved deals sync when Firebase is active.",
      savedDeals: "Saved deals",
      newDeal: "New Deal",
      saveDeal: "Save",
      deleteDeal: "Delete",
      newDealName: "New deal",
      savedMessage: "Deal saved to your repository.",
      createdMessage: "New deal created in your repository.",
      deletedMessage: "Deal deleted from your repository.",
      confirmDelete: "Delete this saved deal?"
    },
    heroBadge: "⚡ Built for B2B Sales Teams",
    heroTitle: "Win More Deals with <span>MEDDPICC</span> Discipline",
    heroText:
      "Score deals, spot gaps, and coach the next move in minutes.",
    heroButtons: {
      start: "Get Started Free ›",
      signIn: "Sign In",
      example: "See a Live Example"
    },
    criteriaTitle: "Every element, tracked & scored",
    criteriaText:
      "Score the 8 MEDDPICC criteria and see what needs work.",
    workspaceEyebrow: "Live workspace",
    workspaceTitle: "Coach and score your active deal",
    tabs: {
      coach: "Coach",
      scorecard: "Scorecard",
      "action-plan": "Action Plan",
      library: "Playbook"
    },
    deal: {
      eyebrow: "Current deal",
      reset: "Reset",
      opportunity: "Opportunity",
      defaultName: "Acme expansion",
      untitled: "Untitled deal",
      stage: "Stage",
      closeDate: "Close date"
    },
    exampleDeal: {
      name: "Enterprise rollout",
      message: "Live example loaded. Review the yellow areas first: Economic Buyer, Paper Process, and Champion.",
      notes: {
        metrics: "Buyer confirmed a $420k productivity target tied to rollout speed.",
        economicBuyer: "Champion says CFO owns budget, but we have not met her yet.",
        decisionCriteria: "Technical fit and time-to-value are documented.",
        decisionProcess: "Security review, CFO approval, and procurement are mapped.",
        paperProcess: "MSA redlines expected; legal timeline is not confirmed.",
        identifyPain: "Delayed onboarding is creating churn risk in the enterprise segment.",
        champion: "Champion is engaged, but has not yet secured access to the CFO.",
        competition: "Incumbent is cheaper, but weaker on analytics and coaching workflow."
      }
    },
    stages: {
      discovery: "Discovery",
      validation: "Validation",
      proposal: "Proposal",
      procurement: "Procurement",
      commit: "Commit"
    },
    health: {
      controlled: "Controlled",
      promising: "Promising",
      risky: "Risky",
      unqualified: "Unqualified"
    },
    coach: {
      topEyebrow: "24/7 deal review",
      eyebrow: "AI-style coaching",
      title: "Ask about your next move",
      clear: "Clear",
      placeholder: "Ask: How do I test my champion before procurement?",
      submit: "Coach Me",
      defaultMessage:
        "Pick a gap or ask for the next move.",
      avatarUser: "You",
      avatarAi: "AI",
      snapshotEyebrow: "Deal snapshot",
      snapshotTitle: "Qualification gaps",
      prompts: [
        ["Diagnose risk", "Diagnose the biggest risk in this deal."],
        ["Economic Buyer", "Give me questions for the Economic Buyer."],
        ["Next call plan", "Create a next call plan for this opportunity."]
      ]
    },
    scorecard: {
      eyebrow: "Honest inspection",
      title: "Score each MEDDPICC element",
      export: "Export Summary",
      notesPlaceholder: "Evidence, buyer quotes, missing proof...",
      scoreLabel: "score"
    },
    plan: {
      eyebrow: "Generated plan",
      title: "Actions to de-risk the deal",
      regenerate: "Regenerate",
      priorities: { high: "high", medium: "medium", low: "low" },
      evidence: "evidence",
      body: (ask, dealName) =>
        `${ask} Capture the answer in the notes and confirm the next owner/date before advancing ${dealName}.`
    },
    library: {
      eyebrow: "Coaching playbook",
      title: "Element-by-element guidance"
    },
    labels: ["None", "Partial", "Mostly", "Confirmed"],
    export: {
      deal: "Deal",
      stage: "Stage",
      closeDate: "Close date",
      notSet: "Not set",
      health: "Qualification health",
      notes: "Notes",
      nextActions: "Next actions",
      copied: "Summary copied to clipboard. Use it for a deal review or manager 1:1."
    },
    elements: {
      metrics: {
        letter: "M",
        name: "Metrics",
        question: "Can you quantify the business impact and value case?",
        guidance:
          "Quantify value in money, risk, or time.",
        prompts: [
          "What happens financially if the problem stays unsolved?",
          "Which metric will the buyer use to prove success?",
          "Can the customer confirm the calculation in their own words?"
        ]
      },
      economicBuyer: {
        letter: "E",
        name: "Economic Buyer",
        question: "Have you met the person who can release budget and say yes?",
        guidance:
          "Confirm budget owner, priority, and timing.",
        prompts: [
          "Who owns the budget and what outcome are they measured on?",
          "What would make them personally sponsor this change?",
          "How can your champion help you earn a direct meeting?"
        ]
      },
      decisionCriteria: {
        letter: "D",
        name: "Decision Criteria",
        question: "Do you know and influence the standards used to choose?",
        guidance: "Know and shape how they choose.",
        prompts: [
          "What are the must-have capabilities and why?",
          "Which requirements are weighted highest?",
          "Where can you introduce criteria tied to business impact?"
        ]
      },
      decisionProcess: {
        letter: "D",
        name: "Decision Process",
        question: "Can you map every step from evaluation to signature?",
        guidance: "Map owners, dates, approvals, and exits.",
        prompts: [
          "What happens after this meeting?",
          "Who else reviews the recommendation?",
          "What date must each step happen to hit the close date?"
        ]
      },
      paperProcess: {
        letter: "P",
        name: "Paper Process",
        question: "Have legal, procurement, security, and contract steps been surfaced?",
        guidance:
          "Surface legal, security, and procurement early.",
        prompts: [
          "Who owns procurement and legal review?",
          "Can we review redline expectations before selection?",
          "What security or vendor steps create calendar risk?"
        ]
      },
      identifyPain: {
        letter: "I",
        name: "Identify Pain",
        question: "Is the pain specific, owned, urgent, and expensive?",
        guidance:
          "Tie pain to urgency and business impact.",
        prompts: [
          "What is broken today and who feels it?",
          "Why is solving it urgent this quarter?",
          "How does this pain affect the buyer personally?"
        ]
      },
      champion: {
        letter: "C",
        name: "Champion",
        question: "Do you have an internal seller with power and personal gain?",
        guidance:
          "Test if they sell when you are absent.",
        prompts: [
          "What have they done that proves influence?",
          "What is their personal win?",
          "Will they coach you on people, process, and politics?"
        ]
      },
      competition: {
        letter: "C",
        name: "Competition",
        question: "Do you know every alternative, including no decision?",
        guidance:
          "Name every alternative, including no decision.",
        prompts: [
          "Who or what are we really competing against?",
          "Why would the customer choose to do nothing?",
          "Where is our proof stronger than the alternatives?"
        ]
      }
    },
    response: {
      economic: (dealName) =>
        `Your next move is to earn direct Economic Buyer access, not just ask your champion to relay messages.\nAsk: "Who owns the business outcome and budget if this works?" Then ask your champion to help frame a meeting around ${dealName}'s quantified impact.\nDo not forecast this as controlled until the Economic Buyer confirms the pain, priority, and decision timing.`,
      champion: (nextName) =>
        `Test the champion with action, not enthusiasm.\nAsk them to map the decision team, explain the political risk, and introduce you to one stakeholder you have not met. If they cannot or will not do that, treat Champion as unproven.\nTie their personal win to the ${nextName} gap so they have a reason to sell internally.`,
      risk: (health, percent, nextName, secondName) =>
        `The deal is ${health.toLowerCase()} at ${percent}% qualified. The biggest exposed areas are ${nextName} and ${secondName}.\nYour manager will ask for proof, not confidence. Bring buyer-confirmed evidence for those two elements before you advance the stage.\nRecommended next step: schedule a mutual plan review and validate dates, owners, and exit criteria.`,
      default: (dealName, nextName, guidance, prompt) =>
        `Focus on ${nextName}. ${guidance}\nAsk: "${prompt}"\nLeave with one owner and one dated next step.`
    }
  },
  pt: {
    htmlLang: "pt-BR",
    nav: { signIn: "Entrar", signedIn: (name) => name, contact: "Contato" },
    auth: {
      eyebrow: "Repositório de negócios",
      title: "Entre para salvar seus negócios",
      body: "Entre com email e senha. Se o Firebase estiver configurado, seus negócios sincronizam com o Firestore; caso contrário ficam neste navegador.",
      name: "Nome",
      email: "Email",
      password: "Senha",
      namePlaceholder: "Seu nome",
      emailPlaceholder: "voce@empresa.com",
      passwordPlaceholder: "Pelo menos 6 caracteres",
      submit: "Entrar",
      create: "Criar conta",
      close: "Fechar",
      signOut: "Sair",
      firebaseReady: "Sincronizado.",
      localFallback: "Salvo neste navegador.",
      authError: "Não foi possível entrar. Verifique email e senha.",
      invalidCredential: "Senha incorreta ou método de conta diferente. Tente novamente ou crie outra conta com outro email.",
      emailInUse: "Este email já tem conta. Use Entrar.",
      weakPassword: "Use pelo menos 6 caracteres na senha.",
      forgotPassword: "Esqueceu a senha?",
      resetSent: "Email de redefinição enviado. Verifique sua caixa de entrada.",
      resetNoEmail: "Digite seu email primeiro.",
      resetUnavailable: "Redefinir senha precisa do Firebase."
    },
    repository: {
      title: "Repositório de negócios",
      signedOut: "Entre para salvar negócios",
      signedOutNote: "Entre para salvar e alternar negócios.",
      signedIn: (name, count) => `Negócios de ${name} (${count})`,
      signedInNote: "Negócios salvos sincronizam com Firebase ativo.",
      savedDeals: "Negócios salvos",
      newDeal: "Novo negócio",
      saveDeal: "Salvar",
      deleteDeal: "Excluir",
      newDealName: "Novo negócio",
      savedMessage: "Negócio salvo no seu repositório.",
      createdMessage: "Novo negócio criado no seu repositório.",
      deletedMessage: "Negócio excluído do seu repositório.",
      confirmDelete: "Excluir este negócio salvo?"
    },
    heroBadge: "⚡ Criado para equipes de vendas B2B",
    heroTitle: "Ganhe Mais Negócios com Disciplina <span>MEDDPICC</span>",
    heroText:
      "Pontue negócios, veja lacunas e defina o próximo passo em minutos.",
    heroButtons: {
      start: "Começar grátis ›",
      signIn: "Entrar",
      example: "Ver exemplo ao vivo"
    },
    criteriaTitle: "Cada elemento, acompanhado e pontuado",
    criteriaText:
      "Pontue os 8 critérios MEDDPICC e veja o que precisa melhorar.",
    workspaceEyebrow: "Área de trabalho",
    workspaceTitle: "Faça coaching e pontue seu negócio",
    tabs: {
      coach: "Coach",
      scorecard: "Scorecard",
      "action-plan": "Plano de Ação",
      library: "Playbook"
    },
    deal: {
      eyebrow: "Negócio atual",
      reset: "Reiniciar",
      opportunity: "Oportunidade",
      defaultName: "Expansão Acme",
      untitled: "Negócio sem nome",
      stage: "Etapa",
      closeDate: "Data de fechamento"
    },
    exampleDeal: {
      name: "Rollout enterprise",
      message: "Exemplo ao vivo carregado. Revise primeiro as áreas amarelas: Comprador Econômico, Paper Process e Champion.",
      notes: {
        metrics: "O comprador confirmou uma meta de produtividade de $420k ligada à velocidade do rollout.",
        economicBuyer: "O champion diz que a CFO controla o orçamento, mas ainda não falamos com ela.",
        decisionCriteria: "Fit técnico e tempo até valor estão documentados.",
        decisionProcess: "Revisão de segurança, aprovação da CFO e compras estão mapeados.",
        paperProcess: "Redlines no MSA são esperadas; o prazo jurídico ainda não está confirmado.",
        identifyPain: "Onboarding lento está criando risco de churn no segmento enterprise.",
        champion: "Champion está engajado, mas ainda não garantiu acesso à CFO.",
        competition: "Incumbente é mais barato, mas mais fraco em analytics e fluxo de coaching."
      }
    },
    stages: {
      discovery: "Descoberta",
      validation: "Validação",
      proposal: "Proposta",
      procurement: "Compras",
      commit: "Commit"
    },
    health: {
      controlled: "Controlado",
      promising: "Promissor",
      risky: "Arriscado",
      unqualified: "Não qualificado"
    },
    coach: {
      topEyebrow: "Revisão de negócio 24/7",
      eyebrow: "Coaching estilo IA",
      title: "Pergunte sobre o próximo movimento",
      clear: "Limpar",
      placeholder: "Pergunte: Como testo meu champion antes de compras?",
      submit: "Me orientar",
      defaultMessage:
        "Escolha uma lacuna ou peça o próximo passo.",
      avatarUser: "Você",
      avatarAi: "IA",
      snapshotEyebrow: "Resumo do negócio",
      snapshotTitle: "Lacunas de qualificação",
      prompts: [
        ["Diagnosticar risco", "Diagnostique o maior risco deste negócio."],
        ["Comprador econômico", "Me dê perguntas para o Comprador Econômico."],
        ["Plano da próxima call", "Crie um plano para a próxima call desta oportunidade."]
      ]
    },
    scorecard: {
      eyebrow: "Inspeção honesta",
      title: "Pontue cada elemento MEDDPICC",
      export: "Exportar resumo",
      notesPlaceholder: "Evidências, falas do comprador, provas faltando...",
      scoreLabel: "pontuação"
    },
    plan: {
      eyebrow: "Plano gerado",
      title: "Ações para reduzir o risco do negócio",
      regenerate: "Regenerar",
      priorities: { high: "alta", medium: "média", low: "baixa" },
      evidence: "evidência",
      body: (ask, dealName) =>
        `${ask} Registre a resposta nas notas e confirme o próximo responsável/data antes de avançar ${dealName}.`
    },
    library: {
      eyebrow: "Playbook de coaching",
      title: "Orientação elemento por elemento"
    },
    labels: ["Nenhum", "Parcial", "Quase", "Confirmado"],
    export: {
      deal: "Negócio",
      stage: "Etapa",
      closeDate: "Data de fechamento",
      notSet: "Não definida",
      health: "Saúde da qualificação",
      notes: "Notas",
      nextActions: "Próximas ações",
      copied: "Resumo copiado para a área de transferência. Use em uma revisão de negócio ou 1:1 com gestor."
    },
    elements: {
      metrics: {
        letter: "M",
        name: "Métricas",
        question: "Você consegue quantificar o impacto de negócio e o caso de valor?",
        guidance:
          "Quantifique valor em dinheiro, risco ou tempo.",
        prompts: [
          "O que acontece financeiramente se o problema continuar?",
          "Qual métrica o comprador usará para provar sucesso?",
          "O cliente confirma o cálculo com as próprias palavras?"
        ]
      },
      economicBuyer: {
        letter: "E",
        name: "Comprador Econômico",
        question: "Você já falou com a pessoa que libera orçamento e pode dizer sim?",
        guidance:
          "Confirme dono do orçamento, prioridade e timing.",
        prompts: [
          "Quem controla o orçamento e qual resultado essa pessoa precisa entregar?",
          "O que faria essa pessoa patrocinar a mudança?",
          "Como seu champion pode ajudar você a conseguir uma reunião direta?"
        ]
      },
      decisionCriteria: {
        letter: "D",
        name: "Critérios de Decisão",
        question: "Você conhece e influencia os critérios usados para escolher?",
        guidance:
          "Conheça e influencie como eles escolhem.",
        prompts: [
          "Quais capacidades são obrigatórias e por quê?",
          "Quais requisitos têm maior peso?",
          "Onde você pode introduzir critérios ligados ao impacto de negócio?"
        ]
      },
      decisionProcess: {
        letter: "D",
        name: "Processo de Decisão",
        question: "Você mapeia cada etapa da avaliação até a assinatura?",
        guidance: "Mapeie donos, datas, aprovações e saídas.",
        prompts: [
          "O que acontece depois desta reunião?",
          "Quem mais revisa a recomendação?",
          "Em que data cada etapa precisa acontecer para bater a data de fechamento?"
        ]
      },
      paperProcess: {
        letter: "P",
        name: "Processo de Papel",
        question: "Jurídico, compras, segurança e contrato já apareceram no plano?",
        guidance:
          "Antecipe jurídico, segurança e compras.",
        prompts: [
          "Quem cuida de compras e revisão jurídica?",
          "Podemos revisar expectativas de redline antes da escolha?",
          "Quais etapas de segurança ou cadastro criam risco de calendário?"
        ]
      },
      identifyPain: {
        letter: "I",
        name: "Identificar Dor",
        question: "A dor é específica, tem dono, é urgente e cara?",
        guidance:
          "Ligue dor a urgência e impacto.",
        prompts: [
          "O que está quebrado hoje e quem sente isso?",
          "Por que resolver isso é urgente neste trimestre?",
          "Como essa dor afeta pessoalmente o comprador?"
        ]
      },
      champion: {
        letter: "C",
        name: "Champion",
        question: "Você tem um vendedor interno com poder e ganho pessoal?",
        guidance:
          "Teste se ele vende sem você na sala.",
        prompts: [
          "O que essa pessoa fez que prova influência?",
          "Qual é o ganho pessoal dela?",
          "Ela vai te orientar sobre pessoas, processo e política interna?"
        ]
      },
      competition: {
        letter: "C",
        name: "Concorrência",
        question: "Você conhece todas as alternativas, inclusive não decidir?",
        guidance:
          "Nomeie toda alternativa, inclusive não decidir.",
        prompts: [
          "Contra quem ou contra o quê estamos realmente competindo?",
          "Por que o cliente escolheria não fazer nada?",
          "Onde nossa prova é mais forte que as alternativas?"
        ]
      }
    },
    response: {
      economic: (dealName) =>
        `Seu próximo movimento é conseguir acesso direto ao Comprador Econômico, não apenas pedir ao champion para repassar mensagens.\nPergunte: "Quem é dono do resultado de negócio e do orçamento se isso funcionar?" Depois peça ao champion para ajudar a estruturar uma reunião em torno do impacto quantificado de ${dealName}.\nNão coloque este negócio como controlado até o Comprador Econômico confirmar dor, prioridade e timing de decisão.`,
      champion: (nextName) =>
        `Teste o champion com ação, não com entusiasmo.\nPeça para mapear o comitê de decisão, explicar o risco político e apresentar você a um stakeholder que ainda não conhece. Se não conseguir ou não quiser fazer isso, trate Champion como não comprovado.\nConecte o ganho pessoal dele à lacuna de ${nextName} para que tenha motivo para vender internamente.`,
      risk: (health, percent, nextName, secondName) =>
        `O negócio está ${health.toLowerCase()} com ${percent}% de qualificação. As maiores áreas expostas são ${nextName} e ${secondName}.\nSeu gestor vai pedir prova, não confiança. Traga evidências confirmadas pelo comprador para esses dois elementos antes de avançar a etapa.\nPróximo passo recomendado: marque uma revisão de plano mútuo e valide datas, responsáveis e critérios de saída.`,
      default: (dealName, nextName, guidance, prompt) =>
        `Foque em ${nextName}. ${guidance}\nPergunte: "${prompt}"\nSaia com um dono e uma próxima etapa datada.`
    }
  },
  es: {
    htmlLang: "es",
    nav: { signIn: "Iniciar sesión", signedIn: (name) => name, contact: "Contacto" },
    auth: {
      eyebrow: "Repositorio de oportunidades",
      title: "Inicia sesión para guardar tus oportunidades",
      body: "Inicia sesión con email y contraseña. Si Firebase está configurado, tus oportunidades se sincronizan con Firestore; si no, quedan en este navegador.",
      name: "Nombre",
      email: "Email",
      password: "Contraseña",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@empresa.com",
      passwordPlaceholder: "Al menos 6 caracteres",
      submit: "Iniciar sesión",
      create: "Crear cuenta",
      close: "Cerrar",
      signOut: "Cerrar sesión",
      firebaseReady: "Sincronizado.",
      localFallback: "Guardado en este navegador.",
      authError: "No se pudo iniciar sesión. Revisa email y contraseña.",
      invalidCredential: "Contraseña incorrecta o método de cuenta distinto. Intenta de nuevo o crea otra cuenta con otro email.",
      emailInUse: "Este email ya tiene una cuenta. Usa Iniciar sesión.",
      weakPassword: "Usa al menos 6 caracteres para la contraseña.",
      forgotPassword: "¿Olvidaste tu contraseña?",
      resetSent: "Email de recuperación enviado. Revisa tu bandeja.",
      resetNoEmail: "Escribe tu email primero.",
      resetUnavailable: "Recuperar contraseña requiere Firebase."
    },
    repository: {
      title: "Repositorio de oportunidades",
      signedOut: "Inicia sesión para guardar oportunidades",
      signedOutNote: "Inicia sesión para guardar y cambiar oportunidades.",
      signedIn: (name, count) => `Oportunidades de ${name} (${count})`,
      signedInNote: "Las oportunidades guardadas sincronizan con Firebase activo.",
      savedDeals: "Oportunidades guardadas",
      newDeal: "Nueva oportunidad",
      saveDeal: "Guardar",
      deleteDeal: "Eliminar",
      newDealName: "Nueva oportunidad",
      savedMessage: "Oportunidad guardada en tu repositorio.",
      createdMessage: "Nueva oportunidad creada en tu repositorio.",
      deletedMessage: "Oportunidad eliminada de tu repositorio.",
      confirmDelete: "¿Eliminar esta oportunidad guardada?"
    },
    heroBadge: "⚡ Creado para equipos de ventas B2B",
    heroTitle: "Gana Más Negocios con Disciplina <span>MEDDPICC</span>",
    heroText:
      "Puntúa oportunidades, detecta brechas y define el próximo paso en minutos.",
    heroButtons: {
      start: "Comenzar gratis ›",
      signIn: "Iniciar sesión",
      example: "Ver ejemplo en vivo"
    },
    criteriaTitle: "Cada elemento, seguido y puntuado",
    criteriaText:
      "Puntúa los 8 criterios MEDDPICC y ve qué falta mejorar.",
    workspaceEyebrow: "Espacio de trabajo",
    workspaceTitle: "Haz coaching y puntúa tu oportunidad",
    tabs: {
      coach: "Coach",
      scorecard: "Scorecard",
      "action-plan": "Plan de Acción",
      library: "Playbook"
    },
    deal: {
      eyebrow: "Oportunidad actual",
      reset: "Reiniciar",
      opportunity: "Oportunidad",
      defaultName: "Expansión Acme",
      untitled: "Oportunidad sin nombre",
      stage: "Etapa",
      closeDate: "Fecha de cierre"
    },
    exampleDeal: {
      name: "Rollout enterprise",
      message: "Ejemplo en vivo cargado. Revisa primero las áreas amarillas: Comprador Económico, Paper Process y Champion.",
      notes: {
        metrics: "El comprador confirmó una meta de productividad de $420k ligada a la velocidad del rollout.",
        economicBuyer: "El champion dice que la CFO controla el presupuesto, pero aún no hablamos con ella.",
        decisionCriteria: "Fit técnico y tiempo hasta valor están documentados.",
        decisionProcess: "Revisión de seguridad, aprobación de la CFO y compras están mapeados.",
        paperProcess: "Se esperan redlines en el MSA; el plazo legal aún no está confirmado.",
        identifyPain: "El onboarding lento está creando riesgo de churn en el segmento enterprise.",
        champion: "El champion está comprometido, pero aún no aseguró acceso a la CFO.",
        competition: "El incumbente es más barato, pero más débil en analytics y flujo de coaching."
      }
    },
    stages: {
      discovery: "Descubrimiento",
      validation: "Validación",
      proposal: "Propuesta",
      procurement: "Compras",
      commit: "Commit"
    },
    health: {
      controlled: "Controlada",
      promising: "Prometedora",
      risky: "Riesgosa",
      unqualified: "No calificada"
    },
    coach: {
      topEyebrow: "Revisión de oportunidad 24/7",
      eyebrow: "Coaching estilo IA",
      title: "Pregunta por tu próximo movimiento",
      clear: "Limpiar",
      placeholder: "Pregunta: ¿Cómo pruebo a mi champion antes de compras?",
      submit: "Coachéame",
      defaultMessage:
        "Elige una brecha o pide el próximo paso.",
      avatarUser: "Tú",
      avatarAi: "IA",
      snapshotEyebrow: "Resumen de la oportunidad",
      snapshotTitle: "Brechas de calificación",
      prompts: [
        ["Diagnosticar riesgo", "Diagnostica el mayor riesgo de esta oportunidad."],
        ["Comprador económico", "Dame preguntas para el Comprador Económico."],
        ["Plan de próxima llamada", "Crea un plan para la próxima llamada de esta oportunidad."]
      ]
    },
    scorecard: {
      eyebrow: "Inspección honesta",
      title: "Puntúa cada elemento MEDDPICC",
      export: "Exportar resumen",
      notesPlaceholder: "Evidencia, frases del comprador, pruebas faltantes...",
      scoreLabel: "puntuación"
    },
    plan: {
      eyebrow: "Plan generado",
      title: "Acciones para reducir el riesgo de la oportunidad",
      regenerate: "Regenerar",
      priorities: { high: "alta", medium: "media", low: "baja" },
      evidence: "evidencia",
      body: (ask, dealName) =>
        `${ask} Registra la respuesta en las notas y confirma el próximo responsable/fecha antes de avanzar ${dealName}.`
    },
    library: {
      eyebrow: "Playbook de coaching",
      title: "Guía elemento por elemento"
    },
    labels: ["Ninguno", "Parcial", "Casi", "Confirmado"],
    export: {
      deal: "Oportunidad",
      stage: "Etapa",
      closeDate: "Fecha de cierre",
      notSet: "No definida",
      health: "Salud de calificación",
      notes: "Notas",
      nextActions: "Próximas acciones",
      copied:
        "Resumen copiado al portapapeles. Úsalo en una revisión de oportunidad o en un 1:1 con tu manager."
    },
    elements: {
      metrics: {
        letter: "M",
        name: "Métricas",
        question: "¿Puedes cuantificar el impacto de negocio y el caso de valor?",
        guidance:
          "Cuantifica valor en dinero, riesgo o tiempo.",
        prompts: [
          "¿Qué pasa financieramente si el problema no se resuelve?",
          "¿Qué métrica usará el comprador para probar el éxito?",
          "¿Puede el cliente confirmar el cálculo con sus propias palabras?"
        ]
      },
      economicBuyer: {
        letter: "E",
        name: "Comprador Económico",
        question: "¿Has hablado con la persona que puede liberar presupuesto y decir que sí?",
        guidance:
          "Confirma dueño del presupuesto, prioridad y timing.",
        prompts: [
          "¿Quién controla el presupuesto y qué resultado debe entregar?",
          "¿Qué haría que patrocine personalmente este cambio?",
          "¿Cómo puede tu champion ayudarte a conseguir una reunión directa?"
        ]
      },
      decisionCriteria: {
        letter: "D",
        name: "Criterios de Decisión",
        question: "¿Conoces e influyes los criterios usados para elegir?",
        guidance:
          "Conoce e influye cómo eligen.",
        prompts: [
          "¿Qué capacidades son imprescindibles y por qué?",
          "¿Qué requisitos pesan más?",
          "¿Dónde puedes introducir criterios ligados al impacto de negocio?"
        ]
      },
      decisionProcess: {
        letter: "D",
        name: "Proceso de Decisión",
        question: "¿Puedes mapear cada paso desde la evaluación hasta la firma?",
        guidance: "Mapea dueños, fechas, aprobaciones y salidas.",
        prompts: [
          "¿Qué ocurre después de esta reunión?",
          "¿Quién más revisa la recomendación?",
          "¿En qué fecha debe ocurrir cada paso para cumplir la fecha de cierre?"
        ]
      },
      paperProcess: {
        letter: "P",
        name: "Proceso de Papel",
        question: "¿Legal, compras, seguridad y contrato ya están incluidos?",
        guidance:
          "Anticipa legal, seguridad y compras.",
        prompts: [
          "¿Quién lidera compras y revisión legal?",
          "¿Podemos revisar expectativas de redlines antes de la selección?",
          "¿Qué pasos de seguridad o alta de proveedor crean riesgo de calendario?"
        ]
      },
      identifyPain: {
        letter: "I",
        name: "Identificar Dolor",
        question: "¿El dolor es específico, tiene dueño, es urgente y caro?",
        guidance:
          "Conecta dolor con urgencia e impacto.",
        prompts: [
          "¿Qué está roto hoy y quién lo siente?",
          "¿Por qué resolverlo es urgente este trimestre?",
          "¿Cómo afecta este dolor personalmente al comprador?"
        ]
      },
      champion: {
        letter: "C",
        name: "Champion",
        question: "¿Tienes un vendedor interno con poder y ganancia personal?",
        guidance:
          "Prueba si vende cuando no estás.",
        prompts: [
          "¿Qué ha hecho que pruebe influencia?",
          "¿Cuál es su ganancia personal?",
          "¿Te guiará sobre personas, proceso y política interna?"
        ]
      },
      competition: {
        letter: "C",
        name: "Competencia",
        question: "¿Conoces todas las alternativas, incluida no decidir?",
        guidance:
          "Nombra toda alternativa, incluso no decidir.",
        prompts: [
          "¿Contra quién o contra qué competimos realmente?",
          "¿Por qué el cliente elegiría no hacer nada?",
          "¿Dónde nuestra prueba es más fuerte que las alternativas?"
        ]
      }
    },
    response: {
      economic: (dealName) =>
        `Tu próximo movimiento es conseguir acceso directo al Comprador Económico, no solo pedirle al champion que transmita mensajes.\nPregunta: "¿Quién es dueño del resultado de negocio y del presupuesto si esto funciona?" Luego pide al champion que ayude a enmarcar una reunión alrededor del impacto cuantificado de ${dealName}.\nNo pronostiques esta oportunidad como controlada hasta que el Comprador Económico confirme dolor, prioridad y timing de decisión.`,
      champion: (nextName) =>
        `Prueba al champion con acción, no con entusiasmo.\nPídele que mapee el equipo de decisión, explique el riesgo político y te presente a un stakeholder que aún no conoces. Si no puede o no quiere hacerlo, trata Champion como no probado.\nConecta su ganancia personal con la brecha de ${nextName} para que tenga razón para vender internamente.`,
      risk: (health, percent, nextName, secondName) =>
        `La oportunidad está ${health.toLowerCase()} con ${percent}% de calificación. Las áreas más expuestas son ${nextName} y ${secondName}.\nTu manager pedirá prueba, no confianza. Trae evidencia confirmada por el comprador para esos dos elementos antes de avanzar de etapa.\nPróximo paso recomendado: agenda una revisión del plan mutuo y valida fechas, responsables y criterios de salida.`,
      default: (dealName, nextName, guidance, prompt) =>
        `Enfócate en ${nextName}. ${guidance}\nPregunta: "${prompt}"\nSal con un dueño y un próximo paso fechado.`
    }
  }
};

const defaultState = {
  lang: "en",
  user: null,
  deals: [],
  currentDealId: null,
  dealName: "Acme expansion",
  dealStage: "proposal",
  closeDate: "",
  scores: Object.fromEntries(elementKeys.map((key) => [key, 0])),
  notes: Object.fromEntries(elementKeys.map((key) => [key, ""])),
  chat: []
};

let state = loadState();

const views = document.querySelectorAll(".view");
const tabs = document.querySelectorAll(".nav-tab");
const pageTitle = document.querySelector("#pageTitle");
const healthScore = document.querySelector("#healthScore");
const healthLabel = document.querySelector("#healthLabel");
const radialScore = document.querySelector("#radialScore");
const radialValue = document.querySelector("#radialValue");
const gapList = document.querySelector("#gapList");
const scoreGrid = document.querySelector("#scoreGrid");
const libraryGrid = document.querySelector("#libraryGrid");
const planList = document.querySelector("#planList");
const chatWindow = document.querySelector("#chatWindow");
const messageTemplate = document.querySelector("#messageTemplate");
const signinButton = document.querySelector("#signinButton");
const authModal = document.querySelector("#authModal");
const authForm = document.querySelector("#authForm");
const repositoryControls = document.querySelector("#repositoryControls");
const repositoryStatus = document.querySelector("#repositoryStatus");
const repositoryNote = document.querySelector("#repositoryNote");
const dealRepository = document.querySelector("#dealRepository");
const firebaseConfig = window.MEDDPICC_FIREBASE_CONFIG || {};
const firebaseState = {
  enabled: Boolean(firebaseConfig.apiKey && firebaseConfig.authDomain && firebaseConfig.projectId && firebaseConfig.appId),
  loaded: false,
  auth: null,
  db: null,
  user: null
};

async function loadFirebase() {
  if (!firebaseState.enabled || firebaseState.loaded) return firebaseState.loaded;
  await loadScript("https://www.gstatic.com/firebasejs/12.2.1/firebase-app-compat.js");
  await loadScript("https://www.gstatic.com/firebasejs/12.2.1/firebase-auth-compat.js");
  await loadScript("https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore-compat.js");
  firebase.initializeApp(firebaseConfig);
  firebaseState.auth = firebase.auth();
  firebaseState.db = firebase.firestore();
  firebaseState.loaded = true;
  return true;
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.append(script);
  });
}

function firebaseDealCollection() {
  return firebaseState.db.collection("users").doc(firebaseState.user.uid).collection("deals");
}

function t() {
  return copy[state.lang] || copy.en;
}

function elements() {
  const text = t();
  return elementKeys.map((key) => ({ key, ...text.elements[key] }));
}

function defaultChat() {
  return [{ role: "coach", text: t().coach.defaultMessage, systemDefault: true }];
}

function normalizeStage(value) {
  const map = {
    Discovery: "discovery",
    Validation: "validation",
    Proposal: "proposal",
    Procurement: "procurement",
    Commit: "commit"
  };
  return map[value] || value || "proposal";
}

function createId() {
  return `deal-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function currentDealSnapshot(id = state.currentDealId || createId()) {
  return {
    id,
    name: state.dealName,
    stage: state.dealStage,
    closeDate: state.closeDate,
    scores: { ...state.scores },
    notes: { ...state.notes },
    chat: structuredClone(state.chat || []),
    updatedAt: new Date().toISOString()
  };
}

function applyDeal(deal) {
  state.currentDealId = deal.id;
  state.dealName = deal.name;
  state.dealStage = normalizeStage(deal.stage);
  state.closeDate = deal.closeDate || "";
  state.scores = { ...defaultState.scores, ...deal.scores };
  state.notes = { ...defaultState.notes, ...deal.notes };
  state.chat = Array.isArray(deal.chat) && deal.chat.length ? structuredClone(deal.chat) : defaultChat();
}

function syncCurrentDeal() {
  if (!state.user || !state.currentDealId) return;
  const snapshot = currentDealSnapshot(state.currentDealId);
  const index = state.deals.findIndex((deal) => deal.id === state.currentDealId);
  if (index >= 0) state.deals[index] = snapshot;
  else state.deals.unshift(snapshot);
}

async function pullFirebaseDeals() {
  if (!firebaseState.loaded || !firebaseState.user) return;
  const snapshot = await firebaseDealCollection().orderBy("updatedAt", "desc").get();
  state.deals = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  if (state.deals.length) {
    const active = state.deals.find((deal) => deal.id === state.currentDealId) || state.deals[0];
    applyDeal(active);
  } else {
    state.currentDealId = createId();
    state.chat = defaultChat();
    syncCurrentDeal();
    await pushCurrentDealToFirebase();
  }
}

async function pushCurrentDealToFirebase() {
  if (!firebaseState.loaded || !firebaseState.user || !state.currentDealId) return;
  const snapshot = currentDealSnapshot(state.currentDealId);
  await firebaseDealCollection().doc(snapshot.id).set(snapshot);
}

async function deleteCurrentDealFromFirebase(dealId) {
  if (!firebaseState.loaded || !firebaseState.user || !dealId) return;
  await firebaseDealCollection().doc(dealId).delete();
}

async function signIntoFirebase(email, password, name) {
  await loadFirebase();
  await firebaseState.auth.signInWithEmailAndPassword(email, password);
  firebaseState.user = firebaseState.auth.currentUser;
  if (firebaseState.user && !firebaseState.user.displayName && name) {
    await firebaseState.user.updateProfile({ displayName: name });
  }
}

async function createFirebaseAccount(email, password, name) {
  await loadFirebase();
  await firebaseState.auth.createUserWithEmailAndPassword(email, password);
  firebaseState.user = firebaseState.auth.currentUser;
  if (firebaseState.user && name) {
    await firebaseState.user.updateProfile({ displayName: name });
  }
}

function friendlyAuthError(error) {
  const text = t().auth;
  if (["auth/invalid-credential", "auth/wrong-password", "auth/user-not-found"].includes(error.code)) {
    return text.invalidCredential;
  }
  if (error.code === "auth/email-already-in-use") return text.emailInUse;
  if (error.code === "auth/weak-password") return text.weakPassword;
  return text.authError;
}

function showAuthMessage(message, tone = "error") {
  const errorNode = document.querySelector("#authError");
  errorNode.textContent = message;
  errorNode.dataset.tone = tone;
  errorNode.hidden = false;
}

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem("meddpicc-coach-state"));
    const next = { ...defaultState, ...stored };
    next.lang = copy[next.lang] ? next.lang : "en";
    next.user = next.user || null;
    next.deals = Array.isArray(next.deals) ? next.deals : [];
    next.currentDealId = next.currentDealId || null;
    next.dealStage = normalizeStage(next.dealStage);
    next.scores = { ...defaultState.scores, ...next.scores };
    next.notes = { ...defaultState.notes, ...next.notes };
    if (!Array.isArray(next.chat) || next.chat.length === 0) next.chat = [];
    return next;
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  syncCurrentDeal();
  localStorage.setItem("meddpicc-coach-state", JSON.stringify(state));
}

async function saveStateAndRemote() {
  saveState();
  await pushCurrentDealToFirebase();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function setText(selector, value) {
  const node = document.querySelector(selector);
  if (node) node.textContent = value;
}

function setHtml(selector, value) {
  const node = document.querySelector(selector);
  if (node) node.innerHTML = value;
}

function scorePercent() {
  const max = elementKeys.length * 3;
  const total = elementKeys.reduce((sum, key) => sum + Number(state.scores[key] || 0), 0);
  return Math.round((total / max) * 100);
}

function healthText(percent) {
  const health = t().health;
  if (percent >= 82) return health.controlled;
  if (percent >= 62) return health.promising;
  if (percent >= 38) return health.risky;
  return health.unqualified;
}

function weakestElements(limit = 3) {
  return elements()
    .sort((a, b) => state.scores[a.key] - state.scores[b.key])
    .slice(0, limit);
}

function renderStaticCopy() {
  const text = t();
  const isFirebaseSynced = state.user?.provider === "firebase";
  document.documentElement.lang = text.htmlLang;
  document.querySelector("#contactLink").setAttribute("aria-label", text.nav.contact);
  setText(".signin-link", state.user ? text.nav.signedIn(state.user.name) : text.nav.signIn);
  setText(".hero-badge", text.heroBadge);
  setHtml(".hero h1", text.heroTitle);
  setText(".hero p", text.heroText);
  setText(".primary-hero", text.heroButtons.start);
  document.querySelectorAll(".ghost-hero")[0].textContent = text.heroButtons.signIn;
  document.querySelectorAll(".ghost-hero")[1].textContent = text.heroButtons.example;
  setText("#criteria-title", text.criteriaTitle);
  setText(".section-heading p", text.criteriaText);
  setText(".workspace-heading .eyebrow", text.workspaceEyebrow);
  setText("#workspace-title", text.workspaceTitle);
  setText(".topbar .eyebrow", text.coach.topEyebrow);
  setText(".deal-card .eyebrow", text.deal.eyebrow);
  setText("#resetDeal", text.deal.reset);
  setText(".repository-card .eyebrow", text.repository.title);
  setText("#repositoryStatus", state.user ? text.repository.signedIn(state.user.name, state.deals.length) : text.repository.signedOut);
  setText(
    "#repositoryNote",
    state.user
      ? `${text.repository.signedInNote} ${isFirebaseSynced ? text.auth.firebaseReady : text.auth.localFallback}`
      : text.repository.signedOutNote
  );
  setText("#signOutButton", text.auth.signOut);
  setText("#newDealButton", text.repository.newDeal);
  setText("#saveDealButton", text.repository.saveDeal);
  setText("#deleteDealButton", text.repository.deleteDeal);
  document.querySelector(".repository-controls label span").textContent = text.repository.savedDeals;
  repositoryControls.hidden = !state.user;
  document.querySelector("#signOutButton").hidden = !state.user;
  setText("#authEyebrow", text.auth.eyebrow);
  setText("#authTitle", text.auth.title);
  setText("#authBody", text.auth.body);
  setText("#closeAuthModal", text.auth.close);
  setText("#authSubmit", text.auth.submit);
  setText("#authCreate", text.auth.create);
  setText("#forgotPasswordButton", text.auth.forgotPassword);
  document.querySelectorAll(".auth-form label span")[0].textContent = text.auth.name;
  document.querySelectorAll(".auth-form label span")[1].textContent = text.auth.email;
  document.querySelectorAll(".auth-form label span")[2].textContent = text.auth.password;
  document.querySelector("#authName").placeholder = text.auth.namePlaceholder;
  document.querySelector("#authEmail").placeholder = text.auth.emailPlaceholder;
  document.querySelector("#authPassword").placeholder = text.auth.passwordPlaceholder;
  document.querySelectorAll(".deal-card label span")[0].textContent = text.deal.opportunity;
  document.querySelectorAll(".deal-card label span")[1].textContent = text.deal.stage;
  document.querySelectorAll(".deal-card label span")[2].textContent = text.deal.closeDate;
  tabs.forEach((tab) => {
    tab.textContent = text.tabs[tab.dataset.view];
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    const selected = button.dataset.lang === state.lang;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  renderCriteria();
  renderStageOptions();
  renderRepository();
}

function renderCriteria() {
  document.querySelector(".criteria-row").innerHTML = elements()
    .map(
      (element) =>
        `<div class="criterion"><span>${element.letter}</span><small>${escapeHtml(element.name)}</small></div>`
    )
    .join("");
}

function renderStageOptions() {
  const stageSelect = document.querySelector("#dealStage");
  stageSelect.innerHTML = Object.entries(t().stages)
    .map(([value, label]) => `<option value="${value}">${escapeHtml(label)}</option>`)
    .join("");
  stageSelect.value = normalizeStage(state.dealStage);
}

function renderRepository() {
  if (!state.user) {
    dealRepository.innerHTML = "";
    return;
  }
  dealRepository.innerHTML = state.deals
    .map((deal) => {
      const updated = deal.updatedAt ? new Date(deal.updatedAt).toLocaleDateString() : "";
      const label = updated ? `${deal.name} - ${updated}` : deal.name;
      return `<option value="${escapeHtml(deal.id)}">${escapeHtml(label)}</option>`;
    })
    .join("");
  dealRepository.value = state.currentDealId || "";
}

function renderShell() {
  const percent = scorePercent();
  healthScore.textContent = `${percent}%`;
  healthLabel.textContent = healthText(percent);
  radialValue.textContent = `${percent}%`;
  radialScore.style.setProperty("--score", `${percent * 3.6}deg`);

  document.querySelector("#dealName").value = state.dealName;
  document.querySelector("#dealStage").value = state.dealStage;
  document.querySelector("#closeDate").value = state.closeDate;

  gapList.innerHTML = "";
  weakestElements().forEach((element) => {
    const item = document.createElement("article");
    item.className = "gap-item";
    item.innerHTML = `<strong>${escapeHtml(element.name)}</strong><p>${escapeHtml(element.guidance)}</p>`;
    gapList.append(item);
  });
}

function renderScorecard() {
  const text = t();
  scoreGrid.innerHTML = "";
  elements().forEach((element) => {
    const item = document.createElement("article");
    item.className = "score-item";
    item.innerHTML = `
      <div class="score-title">
        <span class="letter">${element.letter}</span>
        <div>
          <strong>${escapeHtml(element.name)}</strong>
          <p>${escapeHtml(element.question)}</p>
        </div>
      </div>
      <div class="rating-row" role="group" aria-label="${escapeHtml(`${element.name} ${text.scorecard.scoreLabel}`)}">
        ${text.labels
          .map(
            (label, index) =>
              `<button type="button" class="${state.scores[element.key] === index ? "active" : ""}" data-key="${element.key}" data-score="${index}">${escapeHtml(label)}</button>`
          )
          .join("")}
      </div>
      <textarea class="notes" data-note="${element.key}" placeholder="${escapeHtml(text.scorecard.notesPlaceholder)}">${escapeHtml(state.notes[element.key] || "")}</textarea>
    `;
    scoreGrid.append(item);
  });
}

function renderLibrary() {
  libraryGrid.innerHTML = "";
  elements().forEach((element) => {
    const item = document.createElement("article");
    item.className = "library-item";
    item.innerHTML = `
      <div class="score-title">
        <span class="letter">${element.letter}</span>
        <div>
          <strong>${escapeHtml(element.name)}</strong>
          <p>${escapeHtml(element.guidance)}</p>
        </div>
      </div>
      <ul>${element.prompts.map((prompt) => `<li>${escapeHtml(prompt)}</li>`).join("")}</ul>
    `;
    libraryGrid.append(item);
  });
}

function makePlan() {
  const text = t();
  return weakestElements(5).map((element, index) => {
    const score = state.scores[element.key];
    const priority = score === 0 ? "high" : score === 1 ? "medium" : "low";
    const ask = element.prompts[index % element.prompts.length];
    return {
      priority,
      priorityLabel: text.plan.priorities[priority],
      title: `${element.name}: ${text.labels[score]} ${text.plan.evidence}`,
      body: text.plan.body(ask, state.dealName)
    };
  });
}

function renderPlan() {
  planList.innerHTML = "";
  makePlan().forEach((plan) => {
    const item = document.createElement("article");
    item.className = "plan-item";
    item.innerHTML = `
      <span class="priority ${plan.priority}">${escapeHtml(plan.priorityLabel)}</span>
      <div>
        <strong>${escapeHtml(plan.title)}</strong>
        <p>${escapeHtml(plan.body)}</p>
      </div>
    `;
    planList.append(item);
  });
}

function renderChat() {
  const text = t();
  if (state.chat.length === 0) state.chat = defaultChat();
  chatWindow.innerHTML = "";
  state.chat.forEach((message) => {
    const node = messageTemplate.content.firstElementChild.cloneNode(true);
    node.classList.toggle("user", message.role === "user");
    node.querySelector(".message-avatar").textContent =
      message.role === "user" ? text.coach.avatarUser : text.coach.avatarAi;
    node.querySelector(".message-body").innerHTML = message.text
      .split("\n")
      .map((line) => `<p>${escapeHtml(line)}</p>`)
      .join("");
    chatWindow.append(node);
  });
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function renderPanelHeaders() {
  const text = t();
  pageTitle.textContent = text.tabs[document.querySelector(".nav-tab.active")?.dataset.view || "coach"];
  setText("#coach-title", text.coach.title);
  setText("#clearChat", text.coach.clear);
  setText(".coach-panel .eyebrow", text.coach.eyebrow);
  document.querySelector("#coachPrompt").placeholder = text.coach.placeholder;
  document.querySelector("#coachForm .primary-button").textContent = text.coach.submit;
  setText("#snapshot-title", text.coach.snapshotTitle);
  setText(".insight-panel .eyebrow", text.coach.snapshotEyebrow);
  document.querySelector(".quick-prompts").innerHTML = text.coach.prompts
    .map(([label, prompt]) => `<button type="button" data-prompt="${escapeHtml(prompt)}">${escapeHtml(label)}</button>`)
    .join("");
  setText("#scorecard .eyebrow", text.scorecard.eyebrow);
  setText("#scorecard h3", text.scorecard.title);
  setText("#exportSummary", text.scorecard.export);
  setText("#action-plan .eyebrow", text.plan.eyebrow);
  setText("#action-plan h3", text.plan.title);
  setText("#regeneratePlan", text.plan.regenerate);
  setText("#library .eyebrow", text.library.eyebrow);
  setText("#library h3", text.library.title);
}

function coachResponse(prompt) {
  const text = t();
  const weakest = weakestElements(2);
  const percent = scorePercent();
  const next = weakest[0];
  const second = weakest[1];
  const lower = prompt.toLowerCase();

  if (
    lower.includes("economic") ||
    lower.includes("buyer") ||
    lower.includes("comprador") ||
    lower.includes("econômico") ||
    lower.includes("economico")
  ) {
    return text.response.economic(state.dealName);
  }

  if (lower.includes("champion") || lower.includes("campeão") || lower.includes("campeao")) {
    return text.response.champion(next.name);
  }

  if (
    lower.includes("risk") ||
    lower.includes("diagnose") ||
    lower.includes("risco") ||
    lower.includes("riesgo") ||
    lower.includes("diagnost")
  ) {
    return text.response.risk(healthText(percent), percent, next.name, second.name);
  }

  return text.response.default(state.dealName, next.name, next.guidance, next.prompts[0]);
}

function exportSummary() {
  const text = t();
  const rows = elements().map((element) => {
    const note = state.notes[element.key] ? ` ${text.export.notes}: ${state.notes[element.key]}` : "";
    return `${element.name}: ${text.labels[state.scores[element.key]]}.${note}`;
  });
  const summary = [
    `${text.export.deal}: ${state.dealName}`,
    `${text.export.stage}: ${text.stages[state.dealStage]}`,
    `${text.export.closeDate}: ${state.closeDate || text.export.notSet}`,
    `${text.export.health}: ${scorePercent()}% (${healthText(scorePercent())})`,
    "",
    ...rows,
    "",
    `${text.export.nextActions}:`,
    ...makePlan().map((plan) => `- [${plan.priorityLabel.toUpperCase()}] ${plan.title}: ${plan.body}`)
  ].join("\n");

  navigator.clipboard.writeText(summary).then(() => {
    state.chat.push({ role: "coach", text: text.export.copied });
    saveStateAndRemote();
    renderChat();
  });
}

function renderAll() {
  renderStaticCopy();
  renderPanelHeaders();
  renderShell();
  renderScorecard();
  renderLibrary();
  renderPlan();
  renderChat();
}

function activateView(viewId, title) {
  tabs.forEach((item) => item.classList.remove("active"));
  views.forEach((view) => view.classList.remove("active"));
  const selectedTab = document.querySelector(`.nav-tab[data-view="${viewId}"]`);
  const selectedView = document.querySelector(`#${viewId}`);
  if (!selectedTab || !selectedView) return;
  selectedTab.classList.add("active");
  selectedView.classList.add("active");
  pageTitle.textContent = title || t().tabs[viewId] || selectedTab.textContent.trim();
}

function openAuthModal() {
  authModal.hidden = false;
  document.querySelector("#authName").value = state.user?.name || "";
  document.querySelector("#authEmail").value = state.user?.email || "";
  document.querySelector("#authPassword").value = "";
  document.querySelector("#authError").hidden = true;
  document.querySelector("#authName").focus();
}

function closeAuthModal() {
  authModal.hidden = true;
}

function ensureRepositoryDeal() {
  if (!state.currentDealId) state.currentDealId = createId();
  syncCurrentDeal();
  if (state.deals.length === 0) state.deals.push(currentDealSnapshot(state.currentDealId));
}

function addRepositoryMessage(text) {
  state.chat.push({ role: "coach", text });
}

async function loadLiveExample() {
  const example = t().exampleDeal;
  const closeDate = new Date();
  closeDate.setDate(closeDate.getDate() + 21);

  if (state.user) {
    syncCurrentDeal();
    await pushCurrentDealToFirebase();
    state.currentDealId = createId();
  } else {
    state.currentDealId = null;
  }

  state.dealName = example.name;
  state.dealStage = "proposal";
  state.closeDate = closeDate.toISOString().slice(0, 10);
  state.scores = {
    metrics: 3,
    economicBuyer: 1,
    decisionCriteria: 2,
    decisionProcess: 2,
    paperProcess: 1,
    identifyPain: 3,
    champion: 1,
    competition: 2
  };
  state.notes = { ...defaultState.notes, ...example.notes };
  state.chat = [{ role: "coach", text: example.message }];
  await saveStateAndRemote();
  renderAll();
}

async function createNewDeal() {
  const text = t();
  syncCurrentDeal();
  await pushCurrentDealToFirebase();
  state.currentDealId = createId();
  state.dealName = text.repository.newDealName;
  state.dealStage = "discovery";
  state.closeDate = "";
  state.scores = { ...defaultState.scores };
  state.notes = { ...defaultState.notes };
  state.chat = defaultChat();
  syncCurrentDeal();
  addRepositoryMessage(text.repository.createdMessage);
  await saveStateAndRemote();
  renderAll();
}

async function saveRepositoryDeal() {
  if (!state.user) {
    openAuthModal();
    return;
  }
  addRepositoryMessage(t().repository.savedMessage);
  await saveStateAndRemote();
  renderAll();
}

async function deleteRepositoryDeal() {
  if (!state.user || !state.currentDealId) return;
  if (!window.confirm(t().repository.confirmDelete)) return;
  const deletedDealId = state.currentDealId;
  state.deals = state.deals.filter((deal) => deal.id !== state.currentDealId);
  if (state.deals.length) {
    applyDeal(state.deals[0]);
    addRepositoryMessage(t().repository.deletedMessage);
  } else {
    state.currentDealId = createId();
    state.dealName = t().repository.newDealName;
    state.dealStage = "discovery";
    state.closeDate = "";
    state.scores = { ...defaultState.scores };
    state.notes = { ...defaultState.notes };
    state.chat = defaultChat();
    syncCurrentDeal();
    addRepositoryMessage(t().repository.deletedMessage);
  }
  await deleteCurrentDealFromFirebase(deletedDealId);
  await saveStateAndRemote();
  renderAll();
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activateView(tab.dataset.view);
  });
});

document.querySelectorAll("[data-jump]").forEach((button) => {
  button.addEventListener("click", async () => {
    const viewId = button.dataset.jump;
    if (viewId === "scorecard") {
      await loadLiveExample();
    }
    activateView(viewId);
    document.querySelector("#workspace").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

signinButton.addEventListener("click", () => {
  if (state.user) {
    document.querySelector("#workspace").scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  openAuthModal();
});

document.querySelector("#heroSignInButton").addEventListener("click", openAuthModal);
document.querySelector("#closeAuthModal").addEventListener("click", closeAuthModal);

authModal.addEventListener("click", (event) => {
  if (event.target === authModal) closeAuthModal();
});

let authAction = "signin";

document.querySelectorAll("[data-auth-action]").forEach((button) => {
  button.addEventListener("click", () => {
    authAction = button.dataset.authAction;
  });
});

document.querySelector("#forgotPasswordButton").addEventListener("click", async () => {
  const email = document.querySelector("#authEmail").value.trim();
  if (!email) {
    showAuthMessage(t().auth.resetNoEmail);
    return;
  }
  if (!firebaseState.enabled) {
    showAuthMessage(t().auth.resetUnavailable);
    return;
  }
  try {
    await loadFirebase();
    await firebaseState.auth.sendPasswordResetEmail(email);
    showAuthMessage(t().auth.resetSent, "success");
  } catch (error) {
    showAuthMessage(friendlyAuthError(error));
  }
});

authForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const errorNode = document.querySelector("#authError");
  const name = document.querySelector("#authName").value.trim();
  const email = document.querySelector("#authEmail").value.trim();
  const password = document.querySelector("#authPassword").value;
  errorNode.hidden = true;
  errorNode.dataset.tone = "error";
  try {
    if (firebaseState.enabled) {
      if (authAction === "create") {
        await createFirebaseAccount(email, password, name);
      } else {
        await signIntoFirebase(email, password, name);
      }
      state.user = {
        id: firebaseState.user.uid,
        name: firebaseState.user.displayName || name,
        email: firebaseState.user.email,
        provider: "firebase",
        signedInAt: new Date().toISOString()
      };
      await pullFirebaseDeals();
    } else {
      state.user = { name, email, provider: "local", signedInAt: new Date().toISOString() };
      ensureRepositoryDeal();
    }
    await saveStateAndRemote();
    closeAuthModal();
    renderAll();
    document.querySelector("#workspace").scrollIntoView({ behavior: "smooth", block: "start" });
  } catch (error) {
    errorNode.textContent = friendlyAuthError(error);
    errorNode.hidden = false;
  }
});

document.querySelector("#signOutButton").addEventListener("click", async () => {
  syncCurrentDeal();
  await pushCurrentDealToFirebase();
  if (firebaseState.auth) await firebaseState.auth.signOut();
  firebaseState.user = null;
  state.user = null;
  saveState();
  renderAll();
});

dealRepository.addEventListener("change", async (event) => {
  syncCurrentDeal();
  await pushCurrentDealToFirebase();
  const deal = state.deals.find((item) => item.id === event.target.value);
  if (!deal) return;
  applyDeal(deal);
  await saveStateAndRemote();
  renderAll();
});

document.querySelector("#newDealButton").addEventListener("click", createNewDeal);
document.querySelector("#saveDealButton").addEventListener("click", saveRepositoryDeal);
document.querySelector("#deleteDealButton").addEventListener("click", deleteRepositoryDeal);

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", async () => {
    state.lang = button.dataset.lang;
    state.chat = defaultChat();
    if (state.dealName === copy.en.deal.defaultName || state.dealName === copy.pt.deal.defaultName || state.dealName === copy.es.deal.defaultName) {
      state.dealName = t().deal.defaultName;
    }
    await saveStateAndRemote();
    renderAll();
  });
});

document.querySelector("#dealName").addEventListener("input", (event) => {
  state.dealName = event.target.value || t().deal.untitled;
  saveState();
});

document.querySelector("#dealStage").addEventListener("change", (event) => {
  state.dealStage = event.target.value;
  saveState();
});

document.querySelector("#closeDate").addEventListener("input", (event) => {
  state.closeDate = event.target.value;
  saveState();
});

scoreGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-score]");
  if (!button) return;
  state.scores[button.dataset.key] = Number(button.dataset.score);
  saveStateAndRemote();
  renderAll();
});

scoreGrid.addEventListener("input", (event) => {
  if (!event.target.matches("[data-note]")) return;
  state.notes[event.target.dataset.note] = event.target.value;
  saveState();
});

document.querySelector("#coachForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#coachPrompt");
  const prompt = input.value.trim();
  if (!prompt) return;
  state.chat.push({ role: "user", text: prompt });
  state.chat.push({ role: "coach", text: coachResponse(prompt) });
  input.value = "";
  saveStateAndRemote();
  renderChat();
});

document.querySelector(".quick-prompts").addEventListener("click", (event) => {
  const button = event.target.closest("[data-prompt]");
  if (!button) return;
  document.querySelector("#coachPrompt").value = button.dataset.prompt;
  document.querySelector("#coachForm").requestSubmit();
});

document.querySelector("#clearChat").addEventListener("click", async () => {
  state.chat = defaultChat();
  await saveStateAndRemote();
  renderChat();
});

document.querySelector("#resetDeal").addEventListener("click", async () => {
  const lang = state.lang;
  const user = state.user;
  const deals = state.deals;
  const currentDealId = state.currentDealId;
  state = structuredClone(defaultState);
  state.lang = lang;
  state.user = user;
  state.deals = deals;
  state.currentDealId = currentDealId;
  state.dealName = t().deal.defaultName;
  state.chat = defaultChat();
  await saveStateAndRemote();
  renderAll();
});

document.querySelector("#regeneratePlan").addEventListener("click", renderPlan);
document.querySelector("#exportSummary").addEventListener("click", exportSummary);

async function initializeApp() {
  const date = new Date();
  if (!state.closeDate) {
    date.setDate(date.getDate() + 30);
    state.closeDate = date.toISOString().slice(0, 10);
  }

  if (state.chat.length === 0) {
    state.chat = defaultChat();
  }

  if (firebaseState.enabled) {
    try {
      await loadFirebase();
      const firebaseUser = await new Promise((resolve) => {
        const unsubscribe = firebaseState.auth.onAuthStateChanged((user) => {
          unsubscribe();
          resolve(user);
        });
      });
      if (firebaseUser) {
        firebaseState.user = firebaseUser;
        state.user = {
          id: firebaseUser.uid,
          name: firebaseUser.displayName || firebaseUser.email,
          email: firebaseUser.email,
          provider: "firebase",
          signedInAt: new Date().toISOString()
        };
        await pullFirebaseDeals();
        saveState();
      }
    } catch (error) {
      console.warn("Firebase initialization failed. Falling back to local storage.", error);
    }
  }

  renderAll();
}

initializeApp();

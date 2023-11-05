const ErrorCode = {
  SERVICE_FAILED: {
    code: "SERVICE_FAILED",
    message: "Falha no serviço",
    status: 500,
  },
  REQUEST_TIMEDOUT: {
    code: "REQUEST_TIMEDOUT",
    message: "Tempo máximo de espera atingido!",
    status: 503,
  },
  NOT_FOUND: {
    code: "NOT_FOUND",
    message: "Objeto não encontrado",
    status: 404,
  },
  INVALID_DATA: {
    code: "INVALID_DATA",
    message: "Dados inválidos",
    status: 400,
  },
  INVALID_AUTHENTICATION: {
    code: "INVALID_AUTHENTICATION",
    message: "Falha na autenticação! Email e/ou senha inválido(s)",
    status: 401,
  },
  INVALID_TOKEN: {
    code: "INVALID_TOKEN",
    message: "Token inválido",
    status: 401,
  },
  TOKEN_EXPIRED: {
    code: "TOKEN_EXPIRED",
    message: "Token expirado",
    status: 401,
  },
  INVALID_CURRENT_PASSWORD: {
    code: "INVALID_CURRENT_PASSWORD",
    message: "Senha atual incorreta",
    status: 400,
  },
  UNAUTHORIZED_SERVICES: {
    code: "UNAUTHORIZED_SERVICES",
    message: "Sem permissão para fazer isso",
    status: 403,
  },
  USER: {
    EMAIL_ALREADY_IN_USE: {
      code: "EMAIL_ALREADY_IN_USE",
      message: "Já existe um usuário com esse email!",
      status: 409,
    },
  },
};

module.exports = ErrorCode;

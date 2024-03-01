import { Redis } from "ioredis";


export const redis = process.env.ENVIRONMENT === "development" ? new Redis() : new Redis(process.env.REDIS_URL as string, {
    username: process.env.REDIS_USERNAME,
    password: process.env.REDIS_PASSWORD
});

// redis.on('connect', () => {
//     console.log('Conexão com o banco de dados KV Redis estabelecida com sucesso.');
  
//     // Coloque aqui as operações que você deseja realizar com o Redis
//     console.log("Connection Established");
    
    
//     // Exemplo: obter um valor de uma chave
//     redis.keys('*', (err, result) => {
//       if (err) {
//         console.error('Erro ao recuperar valor:', err);
//       } else {
//         console.log('Valor recuperado:', result);
//       }
  
//       // Feche a conexão após as operações
//       redis.quit();
//     });
//   });
  
//   // Lidar com erros de conexão
//   redis.on('error', (err) => {
//     console.error('Erro ao conectar ao banco de dados KV Redis:', err);
//   });
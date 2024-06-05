const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt')

module.exports = app => {
    const signin = async (req, res) => {
      if (!req.body.email || !req.body.password) {
        return res.status(400).send("Informe usuário e senha!");
      }

      const user = await app
        .db("users")
        .where({ email: req.body.email })
        .first();

      if (!user) return res.status(400).send("Usuário não encontrado!");

      const isMatch = bcrypt.compareSync(req.body.password, user.password);
      if (!isMatch) return res.status(401).send("Email/Senha inválidos!");

      // Date.now() vem em milisegundos 
      // dividir por 1000 = transforma em segundos (floor = arredonda pra baixo)
      const now = Math.floor(Date.now() / 1000);

      const payload = {
        id: user.id,
        name: user.name,
        email: user.email,
        admin: user.admin,
        iat: now, // issued at = emitido em
        exp: now + (60 * 60 * 24 * 10) // exp = expira em (60 = minuto - 60 hora - 24 = dia - nn = dias)
      };

      res.json({
        ...payload,
        token: jwt.encode(payload, authSecret),
      });
    }

    const validateToken = async (req, res) => {
        const userData = req.body || null
        try {
            if (userData) {
                const token = jwt.decode(userData.token, authSecret)
                if (new Date(token.exp * 1000) > new Date()) {
                    return res.send(true)
                }
            }
        } catch (e) {
            // Problemas no token
        }

        res.send(false)
    }

    return { signin, validateToken }

}

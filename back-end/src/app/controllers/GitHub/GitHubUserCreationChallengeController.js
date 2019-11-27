import axios from "axios";

import User from "../../models/User";

class GitHubUserCreationChallengeController {
  async store(req, res) {
    const { userId } = req;

    const loggedDev = await User.findByPk(userId);

    try {
      const apiResponse = await axios.get(
        `https://api.github.com/search/users?q=${loggedDev.email} in:email`
      );

      const data = apiResponse.data;
      if (data.total_count > 0) {
        //TODO
        console.log("lógica para completar desafio=");

        return res.json({
          message: "Parabéns! Desafio completado, você está no caminho certo."
        });
      }
    } catch (err) {
      console.log(err);
    }

    return res.status(401).json({
      error:
        "Parece que não encontramos um usuário com seu e-mail cadastrado no GitHub, tente novamente"
    });
  }
}

export default new GitHubUserCreationChallengeController();

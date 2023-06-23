import fetch from 'node-fetch';

class CharController {
  async translate(req, res) {
    const { text, de, para } = req.body;
    const texto = text;
    const idiomaOrigem = de;
    const idiomaDestino = para;

    try {
      const resposta = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(texto)}&langpair=${idiomaOrigem}|${idiomaDestino}`
      );
      const resultado = await resposta.json();
      console.log(resultado)
      const traducao = resultado.responseData.translatedText;
      if (traducao === null) {
        res.status(404).json({ "error": "Tradução não encontrada" });
      } else {
        res.status(200).json({ "Traducao": traducao });
      }


    } catch (error) {
      console.error('Erro na tradução:', error);
      res.status(200).json({ "Traducao": error.message });
    }
  }
}

export default new CharController();

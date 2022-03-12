const cio = require('cheerio');
const superagent = require('superagent');

async function info(id) {
    if (!id) return "Forneça um id"
    var { text } = await superagent
        .get(`http://vaka.me/${id}`)
    const $ = cio.load(text)
    const doado = $('span[class="CampaignPledgedGoalstyles__PledgedValue-sc-4262tm-2 guAxSO"]').text()
    const dono = $('div[class="UserCampaignstyles__Name-sc-bv0x3z-2 jHQsNK"]').text()
    const apoiadores = $('[class="CampaignPledgedGoalstyles__GoalValue-sc-4262tm-6 jSUTYL"]').text()
    const titulo = $('h1[class="CampaignShowTitlestyles__H1-sc-1ez7nbk-0 hSUtzX"]').text()
    const total = $('span[class="CampaignPledgedGoalstyles__GoalValue-sc-4262tm-6 cLOBZG"]').text()
    const ativo = $('span[class="UserCampaignstyles__ActivedDate-sc-bv0x3z-5 gGWstk"]').text()

    var res = {
        doado: doado,
        dono: dono,
        apoiadores: apoiadores,
        titulo: titulo,
        total: total,
        ativo: ativo
    }
    return res

}
info('2721487')
  .then(result => console.log(result))

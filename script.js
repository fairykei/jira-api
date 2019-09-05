var farol = {
    verde: '<div class="rounded-circle bg-success farol my-3"></div>',
    amarelo: '<div class="rounded-circle bg-warning farol my-3"></div>',
    vermelho: '<div class="rounded-circle bg-danger farol my-3"></div>'
}

function createCard() {
<<<<<<< Updated upstream
        var impeditivo;
        custoPlano = currentIssue.customfield_10925;
        custoReal = currentIssue.customfield_10923;
        epm = currentIssue.customfield_10911;
        custoReal = currentIssue.customfield_10911 * 100;
        evolucaoPlano = currentIssue.customfield_10911 * 100;
        evolucaoReal = currentIssue.customfield_10911 * 100;
        fatPlano = currentIssue.customfield_10911;
        fatReal = currentIssue.customfield_10911;
        jira = currentIssue.customfield_10913;
        proximaEntrega = currentIssue.customfield_10301;
        rentPlano = currentIssue.customfield_10912 * 100;
        rentReal = currentIssue.customfield_10911 * 100;
        sponsor = currentIssue.customfield_10933;
        titulo = currentIssue.summary;
        diferencaCusto = custoReal / custoPlano;
        diferencaEvolucao = evolucaoReal / evolucaoPlano;
        link = "https://zurich.jira.stefanini.io/browse/" + key;
        
        if (currentIssue.assignee != null) {
            responsavel = currentIssue.assignee.displayName;
        } else {
            responsavel = "Sem responsável";
        }   

        diferencaCusto >= (diferencaEvolucao - 3) ? impeditivo = true : false;
    
=======
    var impeditivo;
    custoPlano = currentIssue.customfield_10925;
    custoReal = currentIssue.customfield_10923;
    epm = currentIssue.customfield_10911;
    custoReal = currentIssue.customfield_10911 * 100;
    evolucaoPlano = currentIssue.customfield_10911 * 100;
    evolucaoReal = currentIssue.customfield_10911 * 100;
    fatPlano = currentIssue.customfield_10911;
    fatReal = currentIssue.customfield_10911;
    jira = currentIssue.customfield_10913;
    proximaEntrega = currentIssue.customfield_10301;
    rentPlano = currentIssue.customfield_10912 * 100;
    rentReal = currentIssue.customfield_10911 * 100;
    sponsor = currentIssue.customfield_10933;
    titulo = currentIssue.summary;
    diferencaCusto = custoReal / custoPlano;
    diferencaEvolucao = evolucaoReal / evolucaoPlano;
    link = "https://zurich.jira.stefanini.io/browse/" + key;

    if (currentIssue.assignee != null) {
        responsavel = currentIssue.assignee.displayName;
    } else {
        responsavel = "Sem responsável";
    }

    diferencaCusto >= (diferencaEvolucao - 3) ? impeditivo = true : false;

>>>>>>> Stashed changes
    html = ' <div id="task" class="card my-1 rounded-lg" draggable="true" style="z-index:1">';
    html += ' <div id="" class="card-body p-2 column">';
    html += '    <div class="row">';
    html += '       <div class="col-12">';
    html += impeditivo ? '<div class="rounded bg-warning d-block text-center mx-3 mb-1">Impeditivo</div>' : "";
    html += '       </div>';
    html += '       <div class="col-12 mt-1">';
    html += '           <img src="https://stefaninilatam.sharepoint.com/sites/sharepointdev/364projetos/Documentos%20Compartilhados/z.png" draggable="false">';
    html += '          <p class="card-text d-inline">';
    html += '               <b>GP:</b> ' + responsavel;
    html += '           </p>';
    html += '       </div>';
    html += '    </div>';
    html += '    <p class="card-text my-1"><b>Projetos: </b>' + titulo + '</p>';
    html += '    <p class="card-text my-1"><b>Sponsor: </b>' + sponsor + '</p>';
    html += '    <div class="row text-center mt-3">';
    html += '        <div class="col-md-5">';
    html += '            <p class="card-text">';
    html += '                <b>Custo Plano:</b><br>R$ ' + custoPlano;
    html += '            </p>';
    html += '        </div>';
    html += '        <div class="col-md-5">';
    html += '            <p class="card-text">';
    html += '                <b>Custo Real:</b><br>R$ ' + custoReal;
    html += '            </p>';
    html += '        </div>';
    html += '        <div class="col-md-2">';
    html += diferencaCusto <= diferencaEvolucao ? farol.verde : diferencaCusto <= (diferencaEvolucao + 3) ? farol.amarelo : farol.vermelho;
    html += '        </div>';
    html += '    </div>';
    html += '        <div class="row text-center">';
    html += '            <div class="col-md-5">';
    html += '                <p class="card-text">';
    html += '                    <b>Evolução Plan:</b><br>' + evolucaoPlano + '%';
    html += '                </p>';
    html += '            </div>';
    html += '            <div class="col-md-5">';
    html += '                <p class="card-text">';
    html += '                    <b>Evolução Real:</b><br>' + evolucaoReal + '%';
    html += '                </p>';
    html += '            </div>';
    html += '            <div class="col-md-2">';
    html += evolucaoReal >= evolucaoPlano ? farol.verde : evolucaoReal >= (evolucaoPlano - 3) ? farol.amarelo : farol.vermelho;
    html += '            </div>';
    html += '        </div>';
    html += '        <div class="row text-center">';
    html += '            <div class="col-md-5">';
    html += '                <p class="card-text">';
    html += '                    <b>Fat Plano:</b><br>R$ ' + fatPlano;
    html += '                </p>';
    html += '            </div>';
    html += '            <div class="col-md-5">';
    html += '                <p class="card-text">';
    html += '                    <b>Fat Real:</b><br>R$ ' + fatReal;
    html += '                </p>';
    html += '            </div>';
    html += '            <div class="col-md-2">';
    html += fatPlano >= fatReal ? farol.verde : farol.amarelo;
    html += '            </div>';
    html += '        </div>';
    html += '        <div class="row text-center mb-2">';
    html += '            <div class="col-md-5">';
    html += '                <p class="card-text">';
    html += '                    <b>Rent Plano:</b><br>' + rentPlano + '%';
    html += '                </p>';
    html += '            </div>';
    html += '            <div class="col-md-5">';
    html += '                <p class="card-text">';
    html += '                    <b>Rent Real:</b><br>' + rentReal + '%';
    html += '                </p>';
    html += '            </div>';
    html += '            <div class="col-md-2">';
    html += rentReal < rentPlano ? farol.vermelho : farol.verde;
    html += '            </div>';
    html += '        </div>';
    html += '        <p class="card-text my-1"><b>Proxima entrega: </b>' + proximaEntrega + '</p>';
    html += '        <p class="card-text my-1"><b>Jira: </b>' + jira + '</p>';
    html += '        <p class="card-text my-1"><b>EPM: </b>' + epm + '</p>';
    html += '    </div>';
    html += '    <div class="card-footer p-1 text-center">';
    html += '        <a href="' + link + '" target="_blank">DETALHES</a>';
    html += '    </div>';
    html += ' </div>';

    switch (currentStatus) {
        case "Backlog":
        case "Em Análise":
            document.getElementById("c1").innerHTML += html;
            break;

        case "Validação Cliente":
            document.getElementById("c2").innerHTML += html;
            break;

        case "Em Desenvolvimento":
        case "Em Planejamento":
            document.getElementById("c3").innerHTML += html;
            break;

        case "Homologação Cliente":
            document.getElementById("c4").innerHTML += html;
            break;

        case "Promoção PROD":
            document.getElementById("c5").innerHTML += html;
            break;

        case "Operação Assistida / Garantia":
            document.getElementById("c6").innerHTML += html;
            break;

        default:
            document.getElementById("c7").innerHTML += html;
    }
}

var settings = {
    "async": true,
    "dataType": "json",
    "crossDomain": true,
    "withCredentials": true,
    "url": "https://zurich.jira.stefanini.io/rest/api/latest/search?jql=project=PED&fields=summary,customfield_10933,customfield_10925,customfield_10923,customfield_10912,customfield_10911,customfield_10913,customfield_10301,status,assignee",
    "method": "GET",
    "headers": {
        "content-type": "application/json",
        "authorization": "Basic bG9zb3V6YTpxdHBpZTg2",
        "Access-Control-Allow-Origin": "https://stefaninilatam.sharepoint.com"
    },
}

$.ajax(settings).done(function (response) {
    //console.log(response);
    //Setando os cards  
    for (i = 0; i < response.issues.length; i++) {
        key = response.issues[i].key;
        currentIssue = response.issues[i].fields;
        currentStatus = currentIssue.status.name;
        createCard();
    }
});

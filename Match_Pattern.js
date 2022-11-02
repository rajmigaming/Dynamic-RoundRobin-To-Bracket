let matchups = [
    [0,1],
    [2,3],

    [0,2],
    [1,3],

    [0,3],
    [1,2]
]



let SHEET_ID = '1yJ91UEFxZDfdfi8Mm3nCrSI3a2rPAke5e-rwnTr-91U';
let SHEET_TITLE = 'Information_Sheet';
let SHEET_RANGE = 'C3:C';

let Group_1 = []
let Group_2 = []
Group_1.length = 4;
Group_2.length = 4;


let Sheet_url = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

    fetch(Sheet_url)
    .then(res => res.text())
    .then(rep=>{
    const data = JSON.parse(rep.substr(47).slice(0,-2));
    //console.log(data);
    //console.log(data);
    //console.log(data.table.rows[0].c[0].v);

    let myTeamsLength = data.table.rows.length; //8

    for(let i = 0; i < myTeamsLength/2; i++){ //0 --> 4
        Group_1[i] = data.table.rows[i].c[0].v
        Group_2[i] = data.table.rows[i+4].c[0].v
    }




    //myfirstdiv.style.display = "none";
{
    let container = document.getElementById("Container_group1");
    for(let x = 0; x < Group_1.length+2; x++){
        let myfirstdiv = document.createElement('div');

        let HomeTeam = document.createElement('div');
        let HomeTeam_result = document.createElement('input');
        let AwayTeam_result = document.createElement('input');
        let AwayTeam = document.createElement('div');

        myfirstdiv.className = "Grid_Class";

        HomeTeam.className = "HomeTeam Team";
        AwayTeam.className = "AwayTeam Team";

        HomeTeam_result.className = "HomeTeamResult Result";
        AwayTeam_result.className = "AwayTeamResult Result";


        HomeTeam_result.placeholder = "0";
        AwayTeam_result.placeholder = "0";

        HomeTeam_result.value = "0";
        AwayTeam_result.value = "0";

        HomeTeam_result.id = ("Group_1_Home_")
        AwayTeam_result.id = ("Group_1_Away_")
        HomeTeam.id = "HomeTeam_Group1";
        AwayTeam.id = "AwayTeam_Group1";


        myfirstdiv.append(HomeTeam);
        myfirstdiv.append(HomeTeam_result);
        myfirstdiv.append(AwayTeam_result);
        myfirstdiv.append(AwayTeam);

        container.append(myfirstdiv);
    }


    let Home_team_div = document.querySelectorAll("#HomeTeam_Group1")
    let Away_team_div = document.querySelectorAll("#AwayTeam_Group1")

/**/

    Home_team_div[0].textContent = Group_1[matchups[0][0]];
    Home_team_div[1].textContent = Group_1[matchups[1][0]];
    Home_team_div[2].textContent = Group_1[matchups[2][0]];
    Home_team_div[3].textContent = Group_1[matchups[3][0]];
    Home_team_div[4].textContent = Group_1[matchups[4][0]];
    Home_team_div[5].textContent = Group_1[matchups[5][0]];

    Away_team_div[0].textContent = Group_1[matchups[0][1]];
    Away_team_div[1].textContent = Group_1[matchups[1][1]];
    Away_team_div[2].textContent = Group_1[matchups[2][1]];
    Away_team_div[3].textContent = Group_1[matchups[3][1]];
    Away_team_div[4].textContent = Group_1[matchups[4][1]];
    Away_team_div[5].textContent = Group_1[matchups[5][1]];
}
{
    let container = document.getElementById("Container_group2");
    for(let x = 0; x < Group_2.length+2; x++){
        let myfirstdiv = document.createElement('div');

        let HomeTeam = document.createElement('div');
        let HomeTeam_result = document.createElement('input');
        let AwayTeam_result = document.createElement('input');
        let AwayTeam = document.createElement('div');

        myfirstdiv.className = "Grid_Class";

        HomeTeam.className = "HomeTeam Team";
        AwayTeam.className = "AwayTeam Team";

        HomeTeam_result.className = "HomeTeamResult Result";
        AwayTeam_result.className = "AwayTeamResult Result";


        HomeTeam_result.placeholder = "0";
        AwayTeam_result.placeholder = "0";

        HomeTeam_result.value = "0";
        AwayTeam_result.value = "0";

        HomeTeam_result.id = ("Group_2_Home_")
        AwayTeam_result.id = ("Group_2_Away_")
        HomeTeam.id = "HomeTeam_Group2";
        AwayTeam.id = "AwayTeam_Group2";


        myfirstdiv.append(HomeTeam);
        myfirstdiv.append(HomeTeam_result);
        myfirstdiv.append(AwayTeam_result);
        myfirstdiv.append(AwayTeam);

        container.append(myfirstdiv);
    }


    let Home_team_div = document.querySelectorAll("#HomeTeam_Group2")
    let Away_team_div = document.querySelectorAll("#AwayTeam_Group2")

/**/

    Home_team_div[0].textContent = Group_2[matchups[0][0]];
    Home_team_div[1].textContent = Group_2[matchups[1][0]];
    Home_team_div[2].textContent = Group_2[matchups[2][0]];
    Home_team_div[3].textContent = Group_2[matchups[3][0]];
    Home_team_div[4].textContent = Group_2[matchups[4][0]];
    Home_team_div[5].textContent = Group_2[matchups[5][0]];

    Away_team_div[0].textContent = Group_2[matchups[0][1]];
    Away_team_div[1].textContent = Group_2[matchups[1][1]];
    Away_team_div[2].textContent = Group_2[matchups[2][1]];
    Away_team_div[3].textContent = Group_2[matchups[3][1]];
    Away_team_div[4].textContent = Group_2[matchups[4][1]];
    Away_team_div[5].textContent = Group_2[matchups[5][1]];
}

    });















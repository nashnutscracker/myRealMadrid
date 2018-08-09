export const TeamsConfigConst = {
    teamNames: {
        "teamHome": "Real Madrid",
        "team1": "Barcelona",
        "team2": "Juventus",
        "team3": "Paris-Saint Germain",
        "team4": "Manchester United",
        "team5": "Bayern Munich"
    },

    teamsDescription: {
        "firstClause": "This tie is between ",
        "middleClause": " and ",
        "lastClause": ".",
        "teamHome": "13 times UCL champions",
        "team1": "5 times UCL champions",
        "team2": "the best Italian club",
        "team3": "the best French club",
        "team4": "the Red Devils",
        "team5": "the best German club"
    },

    matchDates: {
        "date1": "August 15, 2018",
        "date2": "August 30, 2018",
        "date3": "September 11, 2018",
        "date4": "September 29, 2018",
        "date5": "October 12, 2018",
    },

    cities: {
        "cityHome": "Madrid",
        "city1": "Barcelona",
        "city2": "Turin",
        "city3": "Paris",
        "city4": "Manchester",
        "city5": "Munich"
    },

    logos: {
        "teamHome": "../../assets/imgs/clubHome.png",
        "team1": "../../assets/imgs/club1.png",
        "team2": "../../assets/imgs/club2.png",
        "team3": "../../assets/imgs/club3.png",
        "team4": "../../assets/imgs/club4.png",
        "team5": "../../assets/imgs/club5.png",
        "teamVsTeam": "../../assets/imgs/vs.png"
    }
}

export const MatchConfigConst = {
    matchDetails: {
        "match1": {
            "home": TeamsConfigConst.teamNames.teamHome,
            "homeLogo": TeamsConfigConst.logos.teamHome,
            "homeDescription": TeamsConfigConst.teamsDescription.teamHome,
            "away": TeamsConfigConst.teamNames.team1,
            "awayLogo": TeamsConfigConst.logos.team1,
            "awayDescription": TeamsConfigConst.teamsDescription.team1,
            "matchDate": TeamsConfigConst.matchDates.date1,
            "matchCity": TeamsConfigConst.cities.cityHome
        },
        "match2": {
            "home": TeamsConfigConst.teamNames.team2,
            "homeLogo": TeamsConfigConst.logos.team2,
            "homeDescription": TeamsConfigConst.teamsDescription.team2,
            "away": TeamsConfigConst.teamNames.teamHome,
            "awayLogo": TeamsConfigConst.logos.teamHome,
            "awayDescription": TeamsConfigConst.teamsDescription.teamHome,
            "matchDate": TeamsConfigConst.matchDates.date2,
            "matchCity": TeamsConfigConst.cities.city2
        },
        "match3": {
            "home": TeamsConfigConst.teamNames.teamHome,
            "homeLogo": TeamsConfigConst.logos.teamHome,
            "homeDescription": TeamsConfigConst.teamsDescription.teamHome,
            "away": TeamsConfigConst.teamNames.team3,
            "awayLogo": TeamsConfigConst.logos.team3,
            "awayDescription": TeamsConfigConst.teamsDescription.team3,
            "matchDate": TeamsConfigConst.matchDates.date3,
            "matchCity": TeamsConfigConst.cities.cityHome
        },
        "match4": {
            "home": TeamsConfigConst.teamNames.teamHome,
            "homeLogo": TeamsConfigConst.logos.teamHome,
            "homeDescription": TeamsConfigConst.teamsDescription.teamHome,
            "away": TeamsConfigConst.teamNames.team4,
            "awayLogo": TeamsConfigConst.logos.team4,
            "awayDescription": TeamsConfigConst.teamsDescription.team4,
            "matchDate": TeamsConfigConst.matchDates.date4,
            "matchCity": TeamsConfigConst.cities.cityHome
        },
        "match5": {
            "home": TeamsConfigConst.teamNames.team5,
            "homeLogo": TeamsConfigConst.logos.team5,
            "homeDescription": TeamsConfigConst.teamsDescription.team5,
            "away": TeamsConfigConst.teamNames.teamHome,
            "awayLogo": TeamsConfigConst.logos.teamHome,
            "awayDescription": TeamsConfigConst.teamsDescription.teamHome,
            "matchDate": TeamsConfigConst.matchDates.date5,
            "matchCity": TeamsConfigConst.cities.city5
        }
    }
};
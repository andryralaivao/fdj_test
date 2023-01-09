const { getLeagueDetails, searchLeaguesByName } = require('../../controllers/league.controller.js');

describe('endpoints Handlers', function () {

    const mockSearchByName = jest.fn().mockImplementation((term, callback) => {
        callback(null, [{_id: '1', name: 'Ligue 1'}]);
    });
    
    const mockGetLeagueDetails = jest.fn().mockImplementation((term, callback) => {
        callback(null, {_id: '1', name: 'Ligue 1'});
    });

    beforeAll(() => {
        jest.mock('../../lib/league.lib.js', () => {
            return jest.fn().mockImplementation(() => {
                return {
                    searchByName: mockSearchByName,
                    getLeagueDetails: mockGetLeagueDetails
                }
            })
        })
    })

    test('responds to /league/searchByName', () => {

        const req = {
            params: {
                term: "li"
            }
        };

        const res = {
            code: 200,
            leagues: null,
            status: function (input) { this.code = input },
            json: function (input) { this.leagues = input }
        };

        getLeagueDetails(req, res);

        expect(res.code).toEqual(200);
        expect(res.length).toEqual(1);
        expect(res[0]._id).toEqual(1);
        expect(res[0].name).toEqual('Ligue 1');
    });

    test('responds to /league/:id', () => {

        const req = {
            params: {
                id: '5d2d9024da07b95bb8f1718e'
            }
        };

        const res = {
            code: 200,
            league: {},
            status: function (input) { this.code = input },
            json: function (input) { this.league = input }
        };

        searchLeaguesByName(req, res);

        expect(res.code).toEqual(200);
        expect(res.league._id).toEqual('1');
        expect(res.league.name).toEqual('Ligue 1');
    });

});


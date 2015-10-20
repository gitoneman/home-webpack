import alt from "../alt";

class MoviesActions{
    constructor() {
        this.generateActions(
            'getMoviesSuccess',
            'getMoviesFail'
        );
    }

    getMovies() {
        $.ajax({ url: '/movies' })
        .done(data => {
            this.actions.getMoviesSuccess(data);
        })
        .fail(jqXhr => {
            this.actions.getMoviesFail(jqXhr.responseJSON.message);
        });
    }
}
export default alt.createActions(MoviesActions);